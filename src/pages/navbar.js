import React from 'react'
import img1 from './flixnet.png'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './css/navbar.css'
import menu from './burger-bar.png'
import close from './arrow.png'

function navbar() {
  function navbar2(){
    const sidebar=document.querySelector('.ni');
    sidebar.style.display='flex';


  }
  function navbar3(){
    const sidclose = document.querySelector('.ni');
    sidclose.style.display='none';
  }
  return (
    <>
    <div className='' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', boxShadow:'0px 4px 6px -1px rgba(0,0,0,0.1)', position:'sticky', top:'0', backgroundColor:'white', zIndex:'1000',   }}>
        <img src={img1} style={{width:'120px'}}></img>
        <nav className="navbaru" style={{   }}>
            <NavLink to='/changepassword' style={{margin:'10px', textDecoration:'none', color:'black'}}>change password</NavLink>
            <NavLink to='/home' style={{margin:'10px', textDecoration:'none', color:'black'}}>Home</NavLink>
            <NavLink to='/savedmovies' style={{margin:'10px', textDecoration:'none', color:'black'}}>Saved Movies</NavLink>
            <NavLink to='/watchhistory' style={{margin:'10px', textDecoration:'none', color:'black'}}>Watch History</NavLink>
            <NavLink to='/logout' style={{margin:'10px', textDecoration:'none', color:'black'}}>Logout</NavLink>
           
          
            
    </nav>
      <li className='nn' onClick={()=>navbar2()} style={{}}><img className='imgh' src={menu} style={{width:'40px'}}></img></li>

    
      
    </div>
     <div className='ni'>
        <img src={close} onClick={()=>navbar3()} style={{width:'48px', padding:'5px' , margin:'5px',}}></img>
        <nav className="navbaru2">
            <NavLink className='li' to='/home' style={{ textDecoration:'none'}}>Home</NavLink>
            <NavLink className='li' to='/savedmovies' style={{ textDecoration:'none'}}>Saved Movies</NavLink>
            <NavLink className='li' to='/watchhistory' style={{ textDecoration:'none'}}>Watch History</NavLink>
            <NavLink className='li' to='/' style={{ textDecoration:'none'}}>Logout</NavLink>
            <NavLink className='li' to='/changepassword' style={{ textDecoration:'none'}}>Profile</NavLink>
            
    </nav>
   
      
    </div>
    </>
  )
}

export default navbar
