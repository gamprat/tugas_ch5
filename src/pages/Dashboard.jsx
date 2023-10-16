import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetData } from '../services/auth/get_user'
import Cookies from 'universal-cookie'
import { CookieKeys, CookieStorage } from '../utils/cookies'

export const Dashboard = () => {
  const navigate = useNavigate()
  const kembali = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    navigate('/login')
  }

  const { data: useData, isError, status } = useGetData({});

  useEffect(() => {
    console.log(useData)
  }, [useData, status]);
  

  return (
    <div className='flex items-center justify-center h-screen flex-col'>
      <h1 className='text-5xl'>Hayoooo cari apa?</h1>
      <button onClick={kembali} className='bg-red-500 px-5 rounded-lg items-center text-white hover:bg-red-800 mt-7 shadow-gray-500 shadow-md'>Balik bro</button>
    </div>
  )
}
