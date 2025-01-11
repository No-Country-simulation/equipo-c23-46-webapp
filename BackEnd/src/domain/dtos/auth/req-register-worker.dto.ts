import { Validators } from '../../../config/validators';

export class RegisterWorkerDto {
  private constructor(
    public name: string,
    public lastName: string,
    public password: string,
    public email: string,
    public birthdate: string,
    public dni: string,
    public position: string,
    public salary: number,
    public start_date: string,
    public phone: string
  ) {}

  static create(object: {
    [key: string]: any;
  }): [{ [key: string]: string }?, RegisterWorkerDto?] {
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
      phone
    } = object;

    const errors: { [key: string]: string } = {};

    if (!name) errors.name = 'Name is required';
    if (!lastName) errors.lastName = 'Last name is required';
    if (!password) errors.password = 'Password is required';
    if (!email) errors.email = 'Email is required';
    if (email && !Validators.email.test(email)) errors.email = 'Invalid email';
    if (!birthdate) errors.birthdate = 'Birthdate is required';
    if (!dni) errors.dni = 'DNI is required';
    if (!position) errors.position = 'Position is required';
    if (!salary) errors.salary = 'Salary is required';
    if (!start_date) errors.start_date = 'Start date is required';
    if (!phone) errors.phone = 'Phone is required';

    if (Object.keys(errors).length > 0) {
      return [errors];
    }

    const birthdateISO = new Date(birthdate).toISOString().split('T')[0];

    console.log(birthdateISO);

    return [
      undefined,
      new RegisterWorkerDto(
        name,
        lastName,
        password,
        email,
        birthdateISO,
        dni,
        position,
        salary,
        start_date,
        phone
      ),
    ];
  }
}
