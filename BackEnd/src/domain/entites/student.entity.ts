import { CustomError } from '../errors/custom.error';

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
    public proxy: string,
    public phone_proxy: string,
    public dni_proxy: string,
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
      Student: { proxy, phone_proxy, dni_proxy },
      createdAt,
    } = object;

    if (!id) throw CustomError.badRequest('Missing ID');
    if (!name) throw CustomError.badRequest('Missing Name');
    if (!lastName) throw CustomError.badRequest('Missing Last Name');
    if (!password) throw CustomError.badRequest('Missing Password');
    if (!email) throw CustomError.badRequest('Missing Email');
    if (!birthdate) throw CustomError.badRequest('Missing Birthdate');
    if (!dni) throw CustomError.badRequest('Missing DNI');
    if (!proxy) throw CustomError.badRequest('Missing Proxy');
    if (!phone_proxy) throw CustomError.badRequest('Missing Phone Proxy');
    if (!dni_proxy) throw CustomError.badRequest('Missing DNI Proxy');
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
      proxy,
      phone_proxy,
      dni_proxy,
      createdAt
    );
  }
}
