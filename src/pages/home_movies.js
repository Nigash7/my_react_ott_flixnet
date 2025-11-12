// import React, { use, useEffect } from 'react'
import './css/home_movies.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Home_movies({thumbnail, title, description, movieid}) {
   const navigate=useNavigate();
  
   
    const Gotodetails = () =>{
      
        axios.post(`http://127.0.0.1:8000/api/history/${movieid}/`,{},{headers:{ Authorization: `Token ${localStorage.getItem('token')}` }}).then((response)=>{
        console.log("history updated",response.data);
        if(response.data.message === "Movie added to history"){

          axios.get(`http://127.0.0.1:8000/api/movies/${movieid}/`,{headers:{ Authorization: `Token ${localStorage.getItem('token')}` }}).then((res)=>{
            console.log("movie details fetched",res.data);
            const moviev= res.data;
          


            
          
          navigate(`/moviedetails/`, { state: {moviev} });}).catch((error)=>{
            console.log("Error:",error.response ? error.response.data : error.message );
          });
       
        
        }
        else{
          navigate(`/home`);
        }
      }).catch((error)=>{
        console.log("Error:",error.response ? error.response.data : error.message );
      });
      
    };
    

  
  const addtowatch=(movieid)=>{
    
    alert(`movie with id ${movieid} added to watch later`);
    const token= localStorage.getItem('token');
    axios.post(`http://127.0.0.1:8000/api/watchlist/${movieid}/`,{},{headers:{ Authorization: `Token ${token}` }}).then((response)=>{

      
      
      console.log("added successfully",response.data);

      const massage=response.data.message;
      alert(massage);
    }).catch((error)=>{
      console.log("Error:",error.response ? error.response.data : error.message );
    });
  }

  return (
    <div>
      <div className='container'>

        <div className="row row-cols-1 row-cols-md-3">
  <div className="col mb-4 mt-4" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <div className="card h-100 col-12 col-md-6 col-lg-5" style={{  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }}>
      <img  src={`http://127.0.0.1:8000${thumbnail}`} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <p className="card-text">{description}</p> */}
        <button className='btn btn-primary' onClick={()=>Gotodetails(movieid)} >watch</button>
        <button className='btn btn-danger ml-2' onClick={()=>addtowatch(movieid)}>add to watch list</button>
      </div>
    </div>
  </div>
  
  
  
</div>

        
       
       </div>
      
      
        
      
    </div>
  )
}

export default Home_movies
