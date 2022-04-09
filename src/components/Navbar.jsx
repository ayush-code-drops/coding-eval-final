import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from '../redux/action'
const NavWrapper = styled.nav`
background:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
padding:17px;
margin-bottom:30px;

h1{
  color:yellow;
}
`

const StyledLink = styled(Link)`
color:white;
text-decoration:none;
padding:10px;
font-weight:bold;
font-size:15px
`
function Navbar() {
  const dispatch = useDispatch()
  const navigate=useNavigate
  const handleLogout = () => {
    dispatch(logout)
   alert('Logged out')
  }

  const isAuth=useSelector((state)=>state.isAuth)
  return (
      <NavWrapper >
          <StyledLink to='/'> Home </StyledLink>
          <StyledLink to='/login'>Login</StyledLink>
          <StyledLink to='/register'>Register</StyledLink>
      <StyledLink to='/employees'>Employees</StyledLink>
      
        {isAuth&& <Button onClick={handleLogout} sx={{backgroundColor:'black',color:'white',marginLeft:'70px'}} variant="contained">LOG OUT</Button>}
         
    </NavWrapper>
  )
}

export default Navbar