import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css';
import axios from 'axios'
import { employeesSuccess } from '../redux/action';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
function Employees() {
    const {isAuth}=useSelector((state)=>state)
    const employees  = useSelector((state) => state.employees)
    console.log(isAuth,employees)
    const navigate=useNavigate
//    const [employees,setEmployees]=useState([])
    const dispatch = useDispatch()
      if (!isAuth) { 
            // alert ('Login to access this page')
             navigate('/login')
         }
    useEffect(() => {
      
        axios.get("https://json-server-deploy-mock.herokuapp.com/employees2")
            .then((res) => {
                console.log('res',res.data)
                dispatch(employeesSuccess(res.data))
                
        }).catch((err)=>console.log('failed to fetch employees'))
    }, [])

    // console.log('emp',employees)
   
    const handleDelete = () => {
        
    }
  
  return (
      <div>
          <h1>Employees</h1>
          <table className={styles.table}>
              <thead>
               <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Address</th>
                  <th>Age</th>
                      <th>Salary</th>
                      <th>View Details</th>
                      <th>Edit Details</th>
                     
                      <th>Delete Employee</th>
              </tr>   
              </thead>

              <tbody>
               {employees?.map((item) => {
                  return (
                      <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.department}</td>
                          <td>{item.address}</td>
                          <td>{item.age}</td>
                          <td>₹{item.salary}</td>
                          <td><Link to={`/employee/:id` }>View Details</Link></td>
                          <td><Link to={`/employee/:id/edit` }>View Details</Link></td>
                          <td><Button onClick={handleDelete} variant="contained">Delete</Button></td>
                      </tr>
                  )
              })}   
              </tbody>
              

              
</table>
    </div>
  )
}

export default Employees