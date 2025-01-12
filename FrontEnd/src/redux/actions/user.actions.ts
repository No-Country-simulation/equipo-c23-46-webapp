import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserProps } from '../../types/User'
import { BACKEND, POST } from '../../helpers/enviroment'

// "InitialState["userData"], number y { rejectValue: string }" son los tipos
export const fetchLoginUser = createAsyncThunk<
  UserProps,
  { email: string; password: string },
  { rejectValue: string }
>('user/fetchUser', async (userData, thunkAPI) => {
  try {
    const response = await fetch(`${BACKEND}/auth/login`, POST(userData))
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    // Puedes usar thunkAPI para manejar el error
    return thunkAPI.rejectWithValue('Failed to fetch user')
  }
})
