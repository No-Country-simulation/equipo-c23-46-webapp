export type Email = {
  email: string
  name: string
  token: string
  password: string
}

export type EmailForgotPassword = Pick<Email, 'email' | 'name' | 'password'>
