import React from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {
    const navigate=useNavigate();

    function handlelogout(){

        localStorage.removeItem("token");
        navigate("/login")

    }

  return (
    <div>
      <button className='btn btn-primary' onClick={handlelogout}>logout</button>
    </div>
  )
}

export default Logout
