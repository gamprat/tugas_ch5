import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MoviePage } from '../pages/MoviePage'
import { MovePage } from '../pages/MovePage'
import { Register } from '../pages/auth/Register'
import { Login } from '../pages/auth/Login'
import { Contoh } from '../pages/Contoh'
import { Dashboard } from '../pages/Dashboard'

export const RouterList = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
