import './App.css'
import { Login } from './Auth/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Register } from './Auth/Register'
import Home from './Pages/Home'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
