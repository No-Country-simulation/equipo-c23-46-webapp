import { InputComponentProps } from '../types/Components'

const InputLogin = ({ name }: InputComponentProps) => {
  return (
    <>
      <input
        type='text'
        placeholder={name}
        className='bg-white text-black h-10 max-w-sm w-full px-5 border border-[#5A5A5A] rounded'
      />
    </>
  )
}

export default InputLogin
