import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStateUserProps } from '../../types/User'
import { fetchLoginUser } from '../actions/user.actions'

const initialState: InitialStateUserProps = {
  user: {
    id: '',
    name: '',
    lastName: '',
    email: '',
    birthdate: '',
    age: 0,
    dni: '',
    position: '',
    salary: 0,
    startDate: '',
    phone: '',
    createdAt: ''
  },
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // ejemplos para cambios sincronos, Aqui se usa "PayloadAction<>"
    patchUser: (
      state,
      action: PayloadAction<InitialStateUserProps['user']>
    ) => {
      const { name, email } = action.payload
      const { user } = state
      user.name = name
      user.email = email
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      const { user } = state
      user.email = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginUser.pending, (state) => {
        state.loading = true
      })
      .addCase(
        fetchLoginUser.fulfilled,
        (state, action: PayloadAction<InitialStateUserProps['user']>) => {
          state.loading = false
          state.user = { ...action.payload }
        }
      )
      .addCase(fetchLoginUser.rejected, (state, action) => {
        state.loading = false
        // se usa "as string" para definir y asegurar q estamos recibiendo un string y no de error
        state.error = action.payload as string
      })
  }
})

export const { patchUser, changeEmail } = userSlice.actions
export default userSlice.reducer
