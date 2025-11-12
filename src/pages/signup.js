
import React,{ useState } from "react"
import axios from 'axios'
import './css/signupcss.css'
import img1 from './flixnet.png' 

function Signup() {
  let [name,setName]= useState('');
  let [email,setEmail]= useState('');
  let [password,setPassword]= useState('');
  let [confirmpassword,setConfirmpassword]= useState('');
  let [error,setError]= useState('');
  let [success,setSuccess]= useState('');
  function registerUser(e){
    e.preventDefault();
    if(password!==confirmpassword){
      setError("Passwords do not match");
      return;
    }
    var data={name: name,
              email: email,
              password: password}
    axios.post("http://127.0.0.1:8000/api/signup/",data)
    .then((response)=>{
     let massages=response.data.message
     if( massages == 'user created successfully'){
      setSuccess(massages)
      setError('');

     }
     else{
      setError(response.data.message);
      setSuccess('');


     }
      
      
      
  
    })
    .catch((error)=>{
      console.log(error.response);
      setError("Registration Failed. Please try again later");

    });}
  return (
    <div className='head1'>
    <div className='row'><img src={img1} style={{ width:'300px', padding:'0px 30px'
    }}/></div>
    <div id='fo' style={{width:'100vw',height:'400px', display:'flex' , justifyContent:'center' ,alignItems:'center'}}>
      <div id='fom' className='col-12 col-lg-4 col-md-6'>
        <h2 >Sign Up</h2>

      <form  className='col-12 ' onSubmit={registerUser}>
        
        {error? <div className="alert alert-danger">{error}</div>:''}
        {success? <div className="success alert-success p-3">{success}</div>:''}
        <input  type='text' placeholder='Username' className='form-control my-3' value={name} onInput={(event)=>setName(event.target.value)} />
        <input type='email' placeholder='Email' className='form-control my-3' value={email}  onInput={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' className='form-control my-3'value={password} onInput={(e)=>setPassword(e.target.value)} />
        <input type='password' placeholder='Confirm Password'className='form-control my-3' value={confirmpassword} onInput={(e)=>setConfirmpassword(e.target.value)}></input>
       {/* {success && <p style={{color:'green'}}>{success}</p>}
        {error && <p  style={{color:'red'}}>{error}</p>} */}
        <button className='btn btn-primary my-3' style={{ width:'100%'}}>Sign Up</button>

        <span>or</span> <br></br>
        <span>you have a account</span>
        <a href='/login'> login</a>
      </form>
      </div>

    </div>
      
    </div>
  )
}
export default Signup;
