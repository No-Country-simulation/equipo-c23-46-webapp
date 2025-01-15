import { ButtonComponentProps } from '../types/Components'

const ButtonLogin = ({ handleOnClick, name }: ButtonComponentProps) => {
  return (
    <>
      <button
        type='submit'
        className='bg-[#2A75B7] w-[229px] h-[40px] rounded-[20px]'
        onClick={handleOnClick}
      >
        {name}
      </button>
    </>
  )
}

export default ButtonLogin
