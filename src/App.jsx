import './App.css'
import { Login } from './Auth/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Register } from './Auth/Register'
import Home from './Pages/Home'
import UpdatePost from './Pages/Update'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-post/:id" element={<UpdatePost />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
