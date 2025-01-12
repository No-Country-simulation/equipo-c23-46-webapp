import { Role } from '@prisma/client';
import { BcryptAdapter, JwtAdapter } from '../../config';
import { prisma } from '../../data/prisma/prisma-db';
import {
  CustomError,
  RegisterStudentDto,
  StudentEntity,
  WorkerEntity,
} from '../../domain';
import { RegisterWorkerDto } from '../../domain/dtos/auth/req-register-worker.dto';
import { LoginUserDto } from '../../domain/dtos/auth/req-login.dto';

type HashFunction = (password: string) => string;
type ConpareFunction = (password: string, hashed: string) => boolean;

export class AuthService {
  constructor(
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: ConpareFunction = BcryptAdapter.compare
  ) {}

  async registerStudent(registerStudentDto: RegisterStudentDto) {
    const {
      password,
      birthdate,
      dni,
      dni_proxy,
      email,
      lastName,
      name,
      phone_proxy,
      proxy,
    } = registerStudentDto;

    const [existEmail, exitsDni] = await Promise.all([
      prisma.user.findUnique({ where: { email } }),
      prisma.user.findUnique({ where: { dni } }),
    ]);

    if (existEmail) {
      throw CustomError.badRequest('Email already exists');
    }
    if (exitsDni) {
      throw CustomError.badRequest('Dni already exists');
    }

    const age = new Date().getFullYear() - new Date(birthdate).getFullYear();

    try {
      const hashPassword = this.hashPassword(password);
      const user = await prisma.user.create({
        data: {
          role: Role.STUDENT,
          birthdate: new Date(birthdate).toISOString(),
          dni,
          age,
          email,
          lastName,
          name,
          password: hashPassword,
          Student: {
            create: {
              dni_proxy,
              phone_proxy,
              proxy,
            },
          },
        },
        include: { Student: true },
      });

      return { student: StudentEntity.fromJson(user) };
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer(`${error}`);
    }
  }

  async registerWorker(registerWorkerDto: RegisterWorkerDto) {
    const {
      name,
      lastName,
      password,
      email,
      birthdate,
      dni,
      position,
      salary,
      start_date,
      phone,
    } = registerWorkerDto;

    const [existEmail, exitsDni] = await Promise.all([
      prisma.user.findUnique({ where: { email } }),
      prisma.user.findUnique({ where: { dni } }),
    ]);

    if (existEmail) {
      throw CustomError.badRequest('Email already exists');
    }
    if (exitsDni) {
      throw CustomError.badRequest('Dni already exists');
    }

    const age = new Date().getFullYear() - new Date(birthdate).getFullYear();

    try {
      const hashPassword = this.hashPassword(password);
      const user = await prisma.user.create({
        data: {
          role: Role.WORKER,
          birthdate: new Date(birthdate).toISOString(),
          dni,
          age,
          email,
          lastName,
          name,
          password: hashPassword,
          Worker: {
            create: {
              position,
              salary,
              start_date: new Date(start_date).toISOString(),
              phone,
            },
          },
        },
        include: { Worker: true },
      });

      return { worker: WorkerEntity.fromJson(user) };
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer(`${error}`);
    }
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto
    const user = await prisma.user.findUnique({
      where: { email },
      include: { Worker: true, Student: true }
    })
    if (!user) {
      throw CustomError.badRequest('Invalid credentials')
    }
    const isMatchPassword = this.comparePassword(password, user.password)
    if (!isMatchPassword) {
      throw CustomError.badRequest('Invalid credentials')
    }

    if(user.isActived === false) {
      throw CustomError.badRequest('User is not actived')
    }

    if (user.role === Role.WORKER) {
      return {
        worker: WorkerEntity.fromJson(user),
        token: await this.generateTokenService(user.id)
      }
    } else if (user.role === Role.STUDENT) {
      return {
        student: StudentEntity.fromJson(user),
        token: await this.generateTokenService(user.id)
      }
    }

    const token = await this.generateTokenService(user.id)
  }

  private async generateTokenService(id: string) {
    const token = await JwtAdapter.generateToken({ id })
    if (!token) {
      throw CustomError.internalServer('Error generating token')
    }
    return token
  }
}
