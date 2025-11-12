import React from 'react'
import Navbar from  './navbar.js'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



 
  

function Savedmovies() {
  const [movies , setMovies] = React.useState([]);
   const [currentPage, setCurrentPage] = useState(1);
     const [postPerPage, setPostPerPage] = useState(2);
   const navigate=useNavigate();
  useEffect(( )=>{
    if (!localStorage.getItem('token')) {
      window.location.href = '/login';
    }
    else{
      const id= {
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      }
      axios.get('http://127.0.0.1:8000/api/watchlist/',id).then((response)=>{
        setMovies(response.data.sort((a, b) => b.id - a.id));
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      });
    }
  },[]);
  const deletefromwatchlist = (movieid) => {
  axios.get(`http://127.0.0.1:8000/api/watchlist_delete/${movieid}/`, {
    headers: { Authorization: `Token ${localStorage.getItem('token')}` },
  })
  .then((response) => {
    console.log("removed from watchlist", response.data);
    alert(response.data.message);
    setMovies(movies.filter((movie) => movie.id !== movieid));
  })
  .catch((error) => {
    console.log("Error:", error.response ? error.response.data : error.message);
  });
};

// ---------------------------------------------------------------------------------------------
 const Gotodetails = (movieid) =>{
 
      
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
     const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost); 
  const totalPages = Math.ceil(movies.length / postPerPage);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
// -----------------------------------------------------------------------------------------
  return (
    <div>
      <Navbar/>
        <h3>Saved movies</h3>
          <div className="container mt-4 mb-4">
              
      <div className="row g-3">
      
        {currentPosts.map(movie => (
          <div
            key={movie.id}
            className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3"
           >
            <div className="card bg-dark text-white border-0 shadow-sm" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <img
                src={`http://127.0.0.1:8000${movie.thumbnail}`}
                className="card-img"
                alt={movie.title}
              />
              <div className="card-img-overlay d-flex align-items-end p-2 " >
                <h6 className="card-title bg-black bg-opacity-50 w-100 text-center rounded" style={{backgroundColor:' rgba(0, 0, 0, 0.411'}}>
                  {movie.title}<br></br>
                  <button  onClick={()=>Gotodetails(movie.id)} className='btn btn-danger btn-sm m-2'>Watch</button>
                   <button onClick={() => deletefromwatchlist(movie.id)} className="btn  position-absolute top-2 end-2"
                style={{ zIndex: 10 }}>
                &#10006;
                
              </button>
                   
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     <div className='pagination col-12 d-flex justify-content-center align-items-center my-4'>
        <button className='btn btn-primary  m-2' onClick={()=>paginate(1)}>First</button>
        <button className='btn btn-primary  m-2' disabled={currentPage === 1} onClick={()=>paginate(currentPage-1)}>Previous</button>
        <button className='btn btn-primary  m-2' disabled={currentPage === totalPages} onClick={()=>paginate(currentPage+1)}>Next</button>
        <button className='btn btn-primary m-2' onClick={()=>paginate(totalPages)}>Last</button>

      </div>
      
    </div>
  )
}

export default Savedmovies
