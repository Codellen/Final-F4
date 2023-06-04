import React from 'react'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Navbar from './Pages/Navbar'
import { Route,Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import "./App.css"
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/index/:id' element={<Details></Details>}></Route>
      </Routes>
    </div>
  )
}

export default App


