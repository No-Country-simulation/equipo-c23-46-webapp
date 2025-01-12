import { CustomError } from '../errors/custom.error';
import { ProxyEntity } from './proxy.entity';

export class StudentEntity {
  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public password: string,
    public email: string,
    public birthdate: Date,
    public age: number,
    public dni: string,
    public proxy: ProxyEntity,
    public createdAt: Date
  ) {}

  static fromJson(object: { [key: string]: any }): StudentEntity {
    const {
      id,
      name,
      lastName,
      password,
      email,
      birthdate,
      age,
      dni,
      Student,
      createdAt,
    } = object;

    if (!id) throw CustomError.badRequest('Missing ID');
    if (!name) throw CustomError.badRequest('Missing Name');
    if (!lastName) throw CustomError.badRequest('Missing Last Name');
    if (!password) throw CustomError.badRequest('Missing Password');
    if (!email) throw CustomError.badRequest('Missing Email');
    if (!birthdate) throw CustomError.badRequest('Missing Birthdate');
    if (!dni) throw CustomError.badRequest('Missing DNI');
    if (!createdAt) throw CustomError.badRequest('Missing Created At');
    if (!age) throw CustomError.badRequest('Missing Age');

    return new StudentEntity(
      id,
      name,
      lastName,
      password,
      email,
      birthdate,
      age,
      dni,
      ProxyEntity.fromJson(Student),
      createdAt
    );
  }
}
