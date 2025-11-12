import React from 'react'
import img3 from './j1.jpg'
import img4 from './j2.jpg'
import img5 from './j3.jpg'
import './css/carosuel.css'
import { Link } from 'react-router-dom'


function carosuel() {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" style={
    {color:'black'}
  }>
    <div className="carousel-item active" style={
    {color:'black'}} >
      <img style={{width:'100vw',height:'400px',objectFit:'cover'}} className="d-block w-100" src={img3} alt="First slide"/>
       <div className="carousel-caption d-none d-md-block">
    <h5> jurassic park</h5>
    <p>the is the flixnet copy </p>
    <button className='btn btn-danger'><a style={{textDecoration:'none', color:'white'}} href='/moviedetails'>watch</a></button>
  </div>
    </div>
    <div className="carousel-item" style={
    {color:'black'}} >
      <img style={{width:'100vw',height:'400px',objectFit:'cover'}} className="d-block w-100" src={img4} alt="Second slide"/>
       <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
    <div className="carousel-item" style={
    {color:'black'}} >
      <img style={{width:'100vw',height:'400px', objectFit:'cover'}} className="d-block w-100" src={img5} alt="Third slide"/>
       <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

      
    </div>
  )
}

export default carosuel
