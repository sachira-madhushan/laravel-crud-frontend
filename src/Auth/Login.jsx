import React, { useState } from 'react';
import axios from 'axios';
export function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = async(e) => {
        e.preventDefault();
    
        try {
            const response=await axios.post('http://localhost:8000/api/users/login', {
                email:email,
                password:password,
            })
            
            if(response.status===200){
                alert("Login Successful")
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('user',JSON.stringify(response.data.user))
                window.location.href="/home"
            }else{
                alert("Login Failed")
            }
        } catch (error) {
            alert("Login Failed")
        }
    }



    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" onChange={(e)=>setPassword(e.target.value)}/>
            <button className="w-full bg-blue-500 text-white p-2 rounded" onClick={Login}>Login</button>
          </form>
          <p className="text-center text-sm mt-4">
            Don't have an account? 
            <a href="/register" className="text-blue-500 hover:underline ml-1">Register</a>
          </p>
        </div>
      </div>
    );
  }