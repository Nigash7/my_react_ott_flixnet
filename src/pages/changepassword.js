import React from 'react'
import './css/signupcss.css'
import img1 from './flixnet.png' 
import axios from 'axios'
import { useState } from 'react'
import Navbar from  './navbar.js'

import { useNavigate } from 'react-router-dom'



function Changepassword() {
  const [oldPassword, setOldPassword] = useState(''); 
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
    function Changepassword2 (e) {
    e.preventDefault();

          if (!localStorage.getItem('token')) {
                    navigate('/login');
            }
          else {
                axios.post('http://127.0.0.1:8000/api/change-password/',
                  {
                    old_password: oldPassword,
                    new_password: newPassword
                  },
                  {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`,
                      'Content-Type': 'application/json'
                    }
                  }
                ).then((response) => {
                  console.log('Password changed successfully:', response.data.message);
                  alert(response.data.message);
                  navigate('/login');
                }).catch((error) => {
                  if (error.response) {
                    console.error('Error changing password:', error.response.data);
                    alert(error.response.data.error || 'Error changing password');
                  } else {
                    console.error('Error:', error.message);
                    alert('Network error');
                  }
                });
              }}


  return (

   <div className='head1'>
     <Navbar/>
    <div className='row'><img src={img1} style={{ width:'300px', padding:'30px'
    }}/></div>
    <div id='fo' style={{width:'100vw',height:'400px', display:'flex' , justifyContent:'center' ,alignItems:'center'}}>
      <div id='fom' className='col-12 col-lg-4 col-md-6'>
        <h2 >change Password</h2>
         {error && <div className='alert alert-danger'>{error}</div>}

      <form  className='col-12 ' onSubmit={ Changepassword2 }>
        
        <input type='password' placeholder='Old Password'  value={oldPassword} onInput={(e)=>setOldPassword(e.target.value)}className='form-control my-3' />
        <input type='password' placeholder='New Password'  value={newPassword} onInput={(e)=>setNewPassword(e.target.value)} className='form-control my-3' />
        <input className='btn btn-primary my-3' id='chp' type='submit' style={{ width:'100%'}} placeholder='change' />
        <span>or</span> <br></br>
        <span>did you like to </span>
        <a href='/login'> Login</a> 
      </form>
      </div>

    </div>
      
    </div>
    
  )
}

export default Changepassword
