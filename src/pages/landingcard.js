import React from 'react'
import img2 from './787499.jpg'
import img1 from './flixnet.png'
import './css/landingcard.css'



function landingcard() {
  return (
    
      <div className='con'>
      <div className='head row' style={{overflow:'hidden'}} >
        <div className='col' >
         <img style={{width:'200px', height:'150px'}} src={img1}></img>
         
          
                 <h3>Avengers </h3>
         <div className='row'>
          <div className='col-12'>
                 <p className='col-6' style={{padding:'0'}} >After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.
                 </p>
                 <button className='btn' style={{ background:'red', margin:'10px'}} > <a href='/home' style={{textDecoration:'none', color:'black'}}>Get Started</a></button>
                  <button className='btn' style={{ background:'white', margin:'10px' }} ><a href='/login' style={{textDecoration:'none' ,color:'black'}}>Login</a></button></div>
                  <div className='row pl-3 hi'>
                    
                     <div className='card  col p-0 m-2' style={{ width: '110px', height:'160px' ,overflow:'hidden'}}>
                  <img style={{height:'200px' , width:'160px'}} src={img2} className='card-img-top' alt='...'/>
            </div>
            <div className='card col p-0 m-2' style={{ width: '110px', height:'160px' ,overflow:'hidden'}}>
                 <img style={{height:'200px', width:'160px'}} src='https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_UF894,1000_QL80_.jpg' className='card-img-top' alt='...'/>
                 </div>









                  </div>
                 </div>
            </div>

              
      </div>
      </div>
      
    
  )
}

export default landingcard
