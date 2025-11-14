// import React, { use, useEffect } from 'react'
import "./css/home_movies.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home_movies({ thumbnail, title, description, movieid }) {
  const navigate = useNavigate();

  const Gotodetails = () => {
    axios
      .post(
        `http://127.0.0.1:8000/api/history/${movieid}/`,
        {},
        { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }
      )
      .then((response) => {
        console.log("history updated", response.data);
        if (response.data.message === "Movie added to history") {
          axios
            .get(`http://127.0.0.1:8000/api/movies/${movieid}/`, {
              headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              console.log("movie details fetched", res.data);
              const moviev = res.data;

              navigate(`/moviedetails/`, { state: { moviev } });
            })
            .catch((error) => {
              console.log(
                "Error:",
                error.response ? error.response.data : error.message
              );
            });
        } else {
          navigate(`/home`);
        }
      })
      .catch((error) => {
        console.log(
          "Error:",
          error.response ? error.response.data : error.message
        );
      });
  };

  const addtowatch = (movieid) => {
    alert(`movie with id ${movieid} added to watch later`);
    const token = localStorage.getItem("token");
    axios
      .post(
        `http://127.0.0.1:8000/api/watchlist/${movieid}/`,
        {},
        { headers: { Authorization: `Token ${token}` } }
      )
      .then((response) => {
        console.log("added successfully", response.data);

        const massage = response.data.message;
        alert(massage);
      })
      .catch((error) => {
        console.log(
          "Error:",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
        <div className="col d-flex justify-content-center">
          <div className="movie-card card h-100">
            <img src={`http://127.0.0.1:8000${thumbnail}`} alt={title} />

            <div className="card-body">
              <h6 className="card-title text-center">{title}</h6>

              <button
                className="btn watch-btn"
                onClick={() => Gotodetails(movieid)}
              >
                Watch
              </button>

              <button
                className="btn add-btn"
                onClick={() => addtowatch(movieid)}
              >
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_movies;
