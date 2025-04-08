import './App.css'
import './components/login/Login.css'
import { Login } from './components/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
