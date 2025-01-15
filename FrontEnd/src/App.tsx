import { Route, Routes } from 'react-router'
import './App.css'
import Login from './pages/login.page'
import NewPasword from './pages/newpassword.page'
import Recovery from './pages/recovery.page'

function App() {
  return (
    <main className='main-app'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/newpassword' element={<NewPasword />} />
        <Route path='/recovery' element={<Recovery />} />
      </Routes>
    </main>
  )
}

export default App
