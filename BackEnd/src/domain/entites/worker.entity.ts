import { CustomError } from '../errors/custom.error';
import { WorkerPosition } from '../utils/enum/worker-position.enum';

export class WorkerEntity {
  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public password: string,
    public email: string,
    public birthdate: Date,
    public age: number,
    public dni: string,
    public position: WorkerPosition,
    public salary: number,
    public start_date: Date,
    public phone: string,
    public createdAt: Date
  ) {}

  static fromJson(object: { [key: string]: any }): WorkerEntity {
    const {
      id,
      name,
      lastName,
      password,
      email,
      birthdate,
      age,
      dni,
      Worker: { position, salary, start_date, phone },
      createdAt,
    } = object;

    if (!id) throw CustomError.badRequest('Missing ID');
    if (!name) throw CustomError.badRequest('Missing Name');
    if (!lastName) throw CustomError.badRequest('Missing Last Name');
    if (!password) throw CustomError.badRequest('Missing Password');
    if (!email) throw CustomError.badRequest('Missing Email');
    if (!birthdate) throw CustomError.badRequest('Missing Birthdate');
    if (!dni) throw CustomError.badRequest('Missing DNI');
    if (!position) throw CustomError.badRequest('Missing Position');
    if (!salary) throw CustomError.badRequest('Missing Salary');
    if (!start_date) throw CustomError.badRequest('Missing Start Date');
    if (!phone) throw CustomError.badRequest('Missing Phone');
    if (!createdAt) throw CustomError.badRequest('Missing Created At');
    if (!age) throw CustomError.badRequest('Missing Age');

    return new WorkerEntity(
      id,
      name,
      lastName,
      password,
      email,
      birthdate,
      age,
      dni,
      position,
      salary,
      start_date,
      phone,
      createdAt
    );
  }
}
