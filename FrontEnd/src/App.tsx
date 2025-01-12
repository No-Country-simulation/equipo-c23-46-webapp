import './App.css'

function App() {
  return (
    <main className='main-app'>
      <form className='flex flex-col m-auto max-w-xl '>
        <label htmlFor='email'>Email</label>
        <input type='text' />
        <label htmlFor='password'>Contraseña</label>
        <input type='text' />
        <button type='submit'>Enviar</button>
      </form>
    </main>
  )
}

export default App
