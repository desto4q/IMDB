import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import WelcomePage from '../page/WelcomePage'
import Nav from '../components/Nav'


function Router() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<WelcomePage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router