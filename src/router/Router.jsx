import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import WelcomePage from '../page/WelcomePage'
import Nav from '../components/Nav'
import Search from '../page/Search'


function Router() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/search/:page' element={<Search/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router