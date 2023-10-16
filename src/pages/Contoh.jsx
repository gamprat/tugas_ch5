import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetData } from '../services/auth/get_user'

export const Contoh = () => {
  const navigate = useNavigate()
  const kembali = () => {
    navigate('/login')
  }

  const { data: useData, isError, status } = useGetData({});

  useEffect(() => {}, [useData]);
  

  return (
    <div className='flex items-center justify-center h-screen flex-col'>
      <h1 className='text-5xl'>Hayoooo cari apa?</h1>
      <button onClick={kembali} className='bg-red-500 px-5 rounded-lg items-center text-white hover:bg-red-800 mt-7 shadow-gray-500 shadow-md'>Balik bro</button>
    </div>
  )
}
