import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import CheckParams from './Home/CheckParams'
import Home from "./Home/Home"
import Profile from './Home/Profile'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/profile/:id/:name' element={<Profile />}></Route>
            <Route path='*' element={<Navigate to={"/"}></Navigate>}></Route>
            <Route path='/CheckParams' element={<CheckParams />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;