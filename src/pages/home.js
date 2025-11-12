import React, { useEffect, useState } from 'react';
import Carosuel from './carosuel';
import './css/home.css';
import Navbar from './navbar.js';
import Home_movies from './home_movies.js';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);           // All movies
  const [filteredMovies, setFilteredMovies] = useState([]); // Filtered list for search
  const [search, setSearch] = useState('');           // Search input value
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);
  const [loading,setLoading] = useState(true)


  // ✅ Fetch movie data
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/login';
    } else {
      axios
        .get('http://127.0.0.1:8000/api/movies/')
        .then((response) => {
          const sortedMovies = response.data.sort((a, b) => b.id - a.id);
          setMovies(sortedMovies);
          setFilteredMovies(sortedMovies); 
          setLoading(false)// Initially show all
        })
        .catch((error) => {
          setError('Error fetching movie data');
          console.error(error);
        });
    }
  }, []);


  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filteredMovies.slice(indexOfFirstPost, indexOfLastPost); 
  const totalPages = Math.ceil(filteredMovies.length / postPerPage);

  // ✅ Handle search (filter movies by title)
  const handleSearch = (e) => {
    e.preventDefault();
    const result = movies.filter((m) =>
      m.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(result);
  };

  // ✅ Handle refresh (reset list)
  const handleRefresh = () => {
    setFilteredMovies(movies);
    setSearch('');
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if(loading) return <p>loading.....</p>;
  return (
    <div >
      <Navbar />
      <Carosuel />

      {/* 🔍 Search Bar */}
      <form
        className="d-flex justify-content-center m-3"
        role="search"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary mx-2" type="submit">
          Search
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </form>

      {/* 🎬 Movie Section */}
      <h2 className="p-3 text-center">🎬 Recommended Movies</h2>

      <div className="row justify-content-center">
        {error && <p className="text-danger text-center">{error}</p>}
        {filteredMovies.length > 0 ? (
          currentPosts.map((movie) => (
            <Home_movies
              key={movie.id}
              thumbnail={movie.thumbnail}
              title={movie.title}
              description={movie.description}
              movieid={movie.id}
            />
          ))
        ) : (
          <p className="text-center text-muted">No movies found.</p>
        )}
      </div>
      <div className='pagination col-12 d-flex justify-content-center align-items-center my-4'>
        <button className='btn btn-primary  m-2' onClick={()=>paginate(1)}>First</button>
        <button className='btn btn-primary  m-2' disabled={currentPage === 1} onClick={()=>paginate(currentPage-1)}>Previous</button>
        <button className='btn btn-primary  m-2' disabled={currentPage === totalPages} onClick={()=>paginate(currentPage+1)}>Next</button>
        <button className='btn btn-primary m-2' onClick={()=>paginate(totalPages)}>Last</button>

      </div>
    </div>
  );
}

export default Home;
