import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { loginSuccess } from '../redux/action'
const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

input{
    padding:10px;
    margin:5px;
    width:300px
}

input[type='submit']{
    background:teal;
    color:white;
    width:300px;
    border-radius:10px;
    
}
    `
function Login() {
   const {isAuth}=useSelector((state)=>state)
  const [username,setUsername]=useState("")
    const [password,setPassword]=useState('')
     const dispatch=useDispatch()
    
    const navigate = useNavigate()
    
    if (isAuth) {
        navigate('/')
    }

    const handleLogin = (username, password) => {
        if (username === "" || password == "") {
            alert('Username or Password missing')
            return
        }
        axios.post('https://masai-api-mocker.herokuapp.com/auth/login', {
            username: username,
            password,password
        }).then((res) => {
            console.log(res)
            alert('Login Successful')
           dispatch(loginSuccess())
        })
            .catch((err) => {
              alert(err.message)
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(username,password)
        
    }
    
  


  return (
    
          <Form onSubmit={handleSubmit}>
              <input type="text"
                  placeholder='username'
                  name="username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)} />
              <br />
              <input
                  type="text"
                  name="password"
                  placeholder='password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)} />
              <br />

              <input type="submit" value="Login" />
              
              </Form>
   
  )
}

export default Login