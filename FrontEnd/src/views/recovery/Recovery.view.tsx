import { useDispatch, useSelector } from 'react-redux'
import ButtonLogin from '../../components/buttonLogin'
import InputLogin from '../../components/inputsRegister'
import Landing from '../../components/landing'
import { useState } from 'react'
import { AppDispatch, RootState } from '../../redux/store'
import { fetchLoginUser } from '../../redux/actions/user.actions'

const RecoveryView = () => {
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
          <InputLogin name={'E-mail'} />
          <div className=' flex flex-col gap-5'>
            <ButtonLogin handleOnClick={handleOnClick} name='Enviar' />
          </div>
        </form>
      </section>
      <div className='bg-[#215e92]'></div>
    </>
  )
}

export default RecoveryView
