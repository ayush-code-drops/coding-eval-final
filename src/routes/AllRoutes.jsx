import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Employees from '../pages/Employees'
import Employee from '../pages/Employee'

function AllRoutes() {
  return (
      <Routes>
          <Route path='/' element={<Home/>}>
              
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}>    
      </Route>
          <Route path='/employees' element={<Employees/>}>    
   </Route>
          <Route path='/employees/:id' element={<Employee/>}>    
      </Route>
          <Route path='/employees/:id/edit' element={<></>}>    
      </Route>
      <Route path="*" element={<div>Path doesn't exist</div>}/>
  </Routes>
  )
}

export default AllRoutes