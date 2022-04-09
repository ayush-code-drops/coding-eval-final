import React, { useState } from 'react'
import axios  from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



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
    border-radius:10px
}
    `
    
    const Button = styled.button`
    background:teal;
    color:white;
    width:300px;
    border-radius:3px;
    padding:10px
    `
    
function Register() {

   
    const [data, setData] = useState(
        {
            name: "",
            email: "",
            password: '',
            username: "",
            mobile: '',
            description: ''
        }
    )

    const handleRegister = (details) => {
      
        axios.post('https://masai-api-mocker.herokuapp.com/auth/register',details
        ).then((res) => {
          alert("register success!, now you can use this username & password to login on login page")
console.log(res);
        })
        .catch((err)=>console.log(err))
    }
   



    const {name,email,password,username,mobile,description}=data
    const handleChange = (e) => {
       // console.log(e)
        const {name, value} = e.target
       // console.log(e.target)
        setData({
            ...data,
            [name] : value
        })
      // console.log('name',name,value);
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(data)
    
     
    }
    const navigate=useNavigate()
    
    const handleRedirect = () => {
        navigate(`/login`)
    }

    const { isAuth } = useSelector((state) => state)
    
    if (isAuth) {
       //  alert("Already logged in, redirecting to employees page")
        navigate('/employees')
      
    }

    
  return (
      <div>
          <h1>Register Form</h1>
          <Form onSubmit={handleSubmit}>
          <input name='name' onChange={(e)=>handleChange(e)} type="text" placeholder='Name' value={name} />
          <input name='email' onChange={(e)=>handleChange(e)} type="email" placeholder='Email' value={email} />
          
          
              <input name='password' onChange={(e) => handleChange(e)} type="text" placeholder='Password' value={password} />
              <input name='username' onChange={(e)=>handleChange(e)} type="text" placeholder='Username' value={username} />
              <input name='mobile' onChange={(e) => handleChange(e)} type="Number" placeholder='mobile' value={mobile} />
              <input name='description' onChange={(e) => handleChange(e)} type="text" placeholder='description' value={description} />
              
             
            
             
             
          <input type="submit" value="Register" />
       
          </Form>

          <Button onClick={handleRedirect}>Redirect to Login Page</Button>
          
        
    </div>
  )
}

export default Register