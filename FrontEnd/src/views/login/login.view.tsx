import { useDispatch, useSelector } from 'react-redux'
import { fetchLoginUser } from '../../redux/actions/user.actions'
import { AppDispatch, RootState } from '../../redux/store'
import { useState } from 'react'
import InputLogin from '../../components/inputsRegister'
import ButtonLogin from '../../components/buttonLogin'
import Landing from '../../components/landing'
import { Link } from 'react-router'

const LoginView = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { email, id } = useSelector((state: RootState) => state.user.userData)
  const [profile] = useState({
    email: 'asdasdas@asdas.com',
    password: 'asdasdqwe123'
  })

  console.log(email, id)

  const handleOnClick = () => {
    dispatch(fetchLoginUser(profile))
  }
  return (
    <>
      <div className='bg-[#215e92]'></div>
      <section className='grid grid-cols-2 gap-0'>
        <Landing />
        <form className='flex flex-col items-center justify-center m-auto bg-[#aac7e1] h-full w-full gap-12'>
          <h1 className='text-3xl font-bold'>Iniciar Sesion</h1>
          <InputLogin name={'E-mail'} />
          <InputLogin name={'Password'} />
          <div className=' flex flex-col gap-5'>
            <ButtonLogin handleOnClick={handleOnClick} name='Entrar' />
            <div>
              <p className='text-black'>Olvido su contraseña?</p>
              <Link to='/recovery'>
                <p className='text-[#1877F2]'>Click aquí</p>
              </Link>
            </div>
          </div>
        </form>
      </section>
      <div className='bg-[#215e92]'></div>
    </>
  )
}

export default LoginView
