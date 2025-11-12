import React from 'react'
import Navbar from  './navbar.js'
import { useLocation } from 'react-router-dom';

// const movies = [
//   { title: "Movie 1", image: "https://picsum.photos/id/64/200/300" },
//   { title: "Movie 2", image: "https://picsum.photos/id/91/200/300" },
//   { title: "Movie 3", image: "https://picsum.photos/id/152/200/300" },
//   { title: "Movie 4", image: "https://picsum.photos/id/175/200/300" },
//   { title: "Movie 5", image: "https://picsum.photos/id/167/200/300" },
//   { title: "Movie 6", image: "https://picsum.photos/id/189/200/300" },]

function Movie_details() {
  
  const location = useLocation();
  const { moviev } = location.state || {};

  //  const handleWatchLater = (movie) => {
  //   alert(`Added "${movie.title}" to Watch Later!`);
  // };
  return (

<> 
   <Navbar/>
   <div style={{display:'flex', flexDirection:'column' , alignItems:'center', marginTop:'20px'}}>
    <h2>{moviev.title}</h2>
    <div className='col-lg-5 col-md-12 mx-4'>
      <video width="100%" height="400" controls >
              <source src={ `http://127.0.0.1:8000${moviev.video_file}`} type="video/mp4"/>
              Your browser does not support the video tag.
      </video>  
      <p>{moviev.description}</p>


    </div>


   </div>
     

</>
  )
}

export default Movie_details
