import React from 'react'
import './navbar.css'
import { FaPeriscope } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><FaPeriscope/>  DriveX</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <div className="navbartext">
        <li>DriveX for learner</li>
      <li> DriveX for instructor</li>
      </div>
    </div>
  </div>
</nav>
    </>

    
  )
}

export default Navbar