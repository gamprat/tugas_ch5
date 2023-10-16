import React, { useState } from 'react'
import { useCreateUser } from '../../services/auth/register_user'
import { useNavigate } from 'react-router-dom'
import image from './geometric_pattern.jpg'

export const Register = () => {
  const [Username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const navigate = useNavigate()

  const { mutate : register , isSuccess , error } = useCreateUser()

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "username") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  }

  // console.log(Username, "Username")
  // console.log(Email, "Email")
  // console.log(Password, "Password");
  // console.log(isSuccess, "isSuccess");
  // console.log(error, "error");

  if (isSuccess) {
    navigate('/login')
  } else if (error) {
    console.log(error.response.data.message)
  } 
  
  const registerUser = () => {
    register({
      "email": Email,
      "name": Username,
      "password": Password
    })
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='relative flex flex-col m-4 space-y-8 bg-white shadow-2xl rounded-xl md:flex-row md:space-y-0'>
        <div className='flex flex-col justify-center p-8 md:p-14'>
          <span className='mb-3 text-4xl font-bold'>Hallo</span>
          <div className='py-1'>
            <span className='mb-2 text-md'>Username</span>
            <input onChange={handleInput} id='username' className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type="text"></input>
          </div>
          <div className='py-1'>
            <span className='mb-2 text-md'>Email</span>
            <input onChange={handleInput} id='email' className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type="email"></input>
          </div>
          <div className='py-1'>
            <span className='mb-2 text-md'>Password</span>
            <input onChange={handleInput} id='password' className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type="password"></input>
          </div>
          <div className='flex justify-between w-full py-4'>
            <div className='mr-24'>
              <input type='checkbox' className='mr-2'></input>
              <span className='text-md'>Remember Me</span>
            </div>
            <span className='font-bold text-md'>Forgot Password?</span>
          </div>
          <button onClick={() => {registerUser()}} className='w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black'>Register</button>
          <div className='justify-center flex'>
            <span className='text-sm font-bold'>Already have an account? <a className='text-orange-700' href='/login'>Login</a></span>
          </div>
        </div>
        <div className='relative'>
          <img src={image} className='w-[400px] h-full hidden rounded-r-2xl md:block object-cover' alt=''></img>
        </div>
      </div>
    </div>
  );
}
