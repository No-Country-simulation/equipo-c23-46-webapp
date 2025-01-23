export const registerStudentSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    birthdate: { type: 'string', format: 'date' },
    dni: { type: 'string' },
    proxy: { type: 'string' },
    phone_proxy: { type: 'string' },
    dni_proxy: { type: 'string' },
  },
  required: ['name', 'lastName', 'email', 'password', 'birthdate', 'dni', 'proxy', 'phone_proxy', 'dni_proxy'],
};
