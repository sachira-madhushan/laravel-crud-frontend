import React, { useState } from 'react';
import axios from 'axios';
export function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');

    const Register = async(e) => {
        e.preventDefault();
    
        try {
            const response=await axios.post('/api/users/register', {
                email:email,
                name:name,
                password_confirmation:conPassword,
                password:password,
            })
            
            if(response.status===200){
                alert("Registration Successful")
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('user',JSON.stringify(response.data.user))
                window.location.href="/"
            }else{
                alert("Register Failed")
            }
        } catch (error) {
            alert("Register Failed")
        }
    }
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded" onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" onChange={(e)=>setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded" onChange={(e)=>setConPassword(e.target.value)}/>
            <button className="w-full bg-blue-500 text-white p-2 rounded" onClick={Register}>Register</button>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account? 
            <a href="/login" className="text-blue-500 hover:underline ml-1">Login</a>
          </p>
        </div>
      </div>
    );
  }