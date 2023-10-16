import React, { useEffect, useState } from 'react'
import { useSaveData } from '../../services/auth/login_user';
import image from './forest.jpg'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigate()

  const { mutate: login, isSuccess, error, data } = useSaveData();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      sessionStorage.setItem("token", data.data.data.token);
      navigation("/dashboard");
    } else if (error) {
      console.log(error.response.data.message);
    }
  }, [isSuccess, error])
  
  const loginUser = () => {
    login({
      email: Email,
      password: Password,
    });
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-xl md:flex-row md:space-y-0'>
        <div className='flex flex-col justify-center p-8 md:p-14'>
          <span className='mb-3 text-4xl font-bold'>Login</span>
          <div className='py-1'>
            <span className='mb-2 text-md'>Email</span>
            <input onChange={handleInput} id='email' className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type="email"></input>
          </div>
          <div className='py-1'>
            <span className='mb-2 text-md'>Password</span>
            <input onChange={handleInput} id='password' className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type="password"></input>
          </div>
          <button onClick={() => {loginUser()}} className='w-full bg-black text-white p-2 rounded-lg mt-6 hover:bg-white hover:text-black'>Login</button>
          <div className='pt-3 justify-center flex'>
            <span className='text-sm font-bold'>Don't have an account? <a className='text-green-700' href='/'>Sign Up</a></span>
          </div>
        </div>
        <div className='relative'>
          <img src={image} className='w-[400px] h-full hidden rounded-r-2xl md:block object-cover' alt=''></img>
        </div>
      </div>
    </div>
  );
}
