import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import WelcomePage from '../page/WelcomePage'
import Nav from '../components/Nav'
import Search from '../page/Search'
import Movie from '../page/Movie'
import Now_Playing from '../page/Now_playing'


function Router() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/search/:page' element={<Search/>} />
        <Route path='/movie/:page' element={<Movie/>} />
        <Route path='/recent/:page' element={<Now_Playing/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router