export class RegisterStudentDto {
  private constructor(
    public name: string,
    public lastName: string,
    public password: string,
    public email: string,
    public birthdate: Date,
    public dni: string,
    public proxy: string,
    public phone_proxy: string,
    public dni_proxy: string
  ) {}

  static create(object: {
    [key: string]: any;
  }): [{ [key: string]: string }?, RegisterStudentDto?] {
    const {
      name,
      lastName,
      password,
      email,
      birthdate,
      dni,
      proxy,
      phone_proxy,
      dni_proxy,
    } = object;

    const errors: { [key: string]: string } = {};

    if (!name) errors.name = 'Name is required';
    if (!lastName) errors.lastName = 'Last name is required';
    if (!password) errors.password = 'Password is required';
    if (!email) errors.email = 'Email is required';
    if (!birthdate) errors.birthdat = 'Birthdate is required';
    if (!dni) errors.dni = 'DNI is required';
    if (!proxy) errors.proxy = 'Proxy is required';
    if (!phone_proxy) errors.phone_proxy = 'Phone proxy is required';
    if (!dni_proxy) errors.dni_proxy = 'DNI proxy is required';

    if (Object.keys(errors).length > 0) {
      return [errors];
    }

    return [
      undefined,
      new RegisterStudentDto(
        name,
        lastName,
        password,
        email,
        birthdate,
        dni,
        proxy,
        phone_proxy,
        dni_proxy
      ),
    ];
  }
}
