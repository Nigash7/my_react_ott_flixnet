import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './pages/signup.js';
import Login from './pages/login.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Change_password from './pages/changepassword.js'
import Home from './pages/home.js';
import Savedmovies from './pages/savedmovies.js';
import Watchhistory from './pages/watchhistory.js';
import Movie_details from './pages/movie_details.js'
import Logout from './pages/logout.js'


import { createRoot } from 'react-dom/client';
import{Router} from 'react-router-dom';


const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/signup', element:<Signup/>},
  {path:'/login', element:<Login/>},
  {path:'/changepassword', element:<Change_password/>},
  {path:'/home' , element:<Home/>},
  {path:'/savedmovies',element:<Savedmovies/>},
  {path:'/watchhistory',element:<Watchhistory/>},
  {path:'/moviedetails/',element:<Movie_details/>},
  {path:'/logout',element:<Logout/>}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
