import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate,useParams,Link } from 'react-router-dom';



function Navbar() {
    
  
    return (
      <>
        <nav className="navbar">
            <Link to={"/"}> <a><i className="fa-sharp fa-solid fa-house"></i> &nbsp; Home</a></Link>
            <a href="job_search.html"
                ><i className="fa-solid fa-book-open-reader"></i> &nbsp; Jobs</a>
            <Link to={"/employeelogin"}><a><i className="fa-solid fa-user"></i> &nbsp; Login</a></Link>
        </nav>
      </>
    );
}

export default Navbar;
