import React from 'react'
import './css/signupcss.css'
import img1 from './flixnet.png' 
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Login() {
  
  let [email,setEmail]= useState('');
  let [password,setPassword]= useState('');
  let [error,setError]= useState('');
  let [success,setSuccess]= useState('');
  const navigate = useNavigate()
  function loginUser(e){
    e.preventDefault();
    // if(password!==confirmpassword){
    //   setError("Passwords do not match");
    //   return;
    // }
    var data={
              email: email,
              password: password}
    axios.post("http://127.0.0.1:8000/api/login/",data)
    .then((response)=>{
     let massages=response.data.token
     
     
     const token= massages
     localStorage.setItem('token',token)
     console.log(massages)
     navigate('/home')
    //  if( (massages) ){
    //    setSuccess(massages)
    //    alert('login successful')

    //   setError('');
      


    //  }
    //   else{
    //    setError(response.data.message);
    //    setSuccess('');


    //  }
      
      
      
  
    })
    .catch((error)=>{
      console.log(error.response);
      setError("Registration Failed. Please try again later");

    });}
  return (
   <div className='head1'>
    <div className='row'><img src={img1} style={{ width:'300px', padding:'20px'
    }}/></div>
    <div id='fo' style={{width:'100vw',height:'400px', display:'flex' , justifyContent:'center' ,alignItems:'center'}}>
      <div id='fom' className='col-12 col-lg-4 col-md-6'>
        <h2 >Login</h2>
      <form  className='col-12 ' onSubmit={loginUser}>
         {error? <div className="alert alert-danger">{error}</div>:''}
        {success? <div className="success alert-success p-3">{success}</div>:''}
        <input type='email' placeholder='Email' className='form-control my-3' value={email}  onInput={(event)=>setEmail(event.target.value)} />
        <input type='password' placeholder='Password' className='form-control my-3' value={password}  onInput={(event)=>setPassword(event.target.value)}/>
        <button className='btn btn-primary my-3' style={{ width:'100%'}}>Login</button>
        <span>or</span> <br></br>
        <span>you don't have an account</span>
        <a href='/signup'> Sign Up</a> <span>or</span> <a href='/changepassword'>Change Password</a>
      </form>
      </div>

    </div>
      
    </div>
    
  )
}

export default Login
