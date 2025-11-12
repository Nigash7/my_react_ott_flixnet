import React, { useEffect } from 'react'
import Navbar from  './navbar.js'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

  // { title: "Movie 1", image: "https://picsum.photos/id/64/200/300" , date:"12-08-2023" },
  // { title: "Movie 2", image: "https://picsum.photos/id/91/200/300" , date:"15-08-2023" },
  // { title: "Movie 3", image: "https://picsum.photos/id/152/200/300" , date:"20-08-2023" },
  // { title: "Movie 4", image: "https://picsum.photos/id/175/200/300" , date:"25-08-2023" },
  // { title: "Movie 5", image: "https://picsum.photos/id/167/200/300",  date:"30-08-2023"  },
  // { title: "Movie 6", image: "https://picsum.photos/id/189/200/300" , date:"23-09-2024" } ]


function Watchhistory() {
   const [movies , setMovies] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(2);
    const navigate=useNavigate();
  
 
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/history/',{headers:{ Authorization: `Token ${localStorage.getItem('token')}` }}).then((response)=>{
      console.log("watch history fetched",response.data);
       setMovies(response.data.sort((a, b) => b.id - a.id));
         
      // setMovies(response.data);
    }).catch((error)=>{
      console.log("Error:",error.response ? error.response.data : error.message );
    });
    // ------------------------------------------------------------------

    
    // --------------------------------------------------------------------
    // Fetch watch history data from API if needed
  }, []);
   const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost); 
  const totalPages = Math.ceil(movies.length / postPerPage);


  // ----------------------------------------------------------
  const Gotodetails=(movieid) =>{
     
          
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
        const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // ------------------------------------------------------------
  return (
    <div>
      <Navbar/>
        <h2>history</h2>
         <div className="container mt-4 mb-4">
            
      <div className="row g-3">
      
        { currentPosts.map((movie, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3"
           >
            <div className="card bg-dark text-white border-0 shadow-sm" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <img
                src={ `http://127.0.0.1:8000${movie.thumbnail}`}
                className="card-img"
                alt={movie.title}
              />
              <div className="card-img-overlay d-flex align-items-end p-2 " >
                <h6 className="card-title bg-black bg-opacity-50 w-100 text-center rounded" style={{backgroundColor:' rgba(0, 0, 0, 0.411'}}>
                  {movie.title}<br></br>
                  <h4>{movie.date}</h4>
                  <button  onClick={()=> Gotodetails(movie.id)} className='btn btn-danger btn-sm m-2'>Watch</button>
                  
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

export default Watchhistory
