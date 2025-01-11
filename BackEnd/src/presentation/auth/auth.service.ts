import { Role } from '@prisma/client';
import { BcryptAdapter } from '../../config';
import { prisma } from '../../data/prisma/prisma-db';
import { CustomError, RegisterStudentDto, StudentEntity } from '../../domain';
import { RegisterWorkerDto } from '../../domain/dtos/auth/req-register-worker.dto';

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
          role: Role.USER,
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

      return { worker: user.Worker };
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer(`${error}`);
    }
  }
}
