export interface UserProps {
  id: string
  name: string
  lastName: string
  email: string
  birthdate: string
  age: number
  dni: string
  position: string
  salary: number
  startDate: string
  phone: string
  createdAt: string
}

export interface InitialStateUserProps {
  loading: boolean
  error: string | null
  user: Partial<UserProps>
}
