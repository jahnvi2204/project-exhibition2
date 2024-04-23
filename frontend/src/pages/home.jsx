import React, {useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {Routes, Route, redirect} from 'react-router-dom';
import { useNavigate,useParams,Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import './home_styles.css';
import hire1 from '../assets/hire1.jpeg';
import hire2 from '../assets/hire2.png';

function Home() {
    
  
    return (
      <>
      <Navbar />
        <header>
        <h1>
            Navigating Careers, Anchoring Success
        </h1>
        <h2>
            Welcome to Hire Harbor
        </h2>
        </header>

        <div className="container">
            <div className="hire">
                <div className="hire-header">
                    Hire
                </div>
                <div className="hire-text">
                    Have job vacancies? Want to hire the perfect candidate for lending a hand towards your dream? Hire Interns & Freshers faster. Post your intern requirements and build your dream team with ease.
                </div>
                <div className="button-container">
                    <a href="login.html"><button className="hire-button">Sign up as employer</button></a>
                </div>
            </div>
            <img src={hire1}/>
        </div>
        
        <div class="container">
            <img src={hire2}/>
            <div class="hire">
                <div class="hire-header">
                    Get Hired
                </div>
                <div class="hire-text">
                    Want to put your potential to work? Find the right job or internshipfor you to shine your skills. Post your job profile and explore the industry through our network. Let the right people know you are open to work.
                </div>
                <div class="button-container">
                    <Link to={'/employeelogin'}><button class="hire-button">Sign up as employee</button></Link>
                    {/* <a href="login.html"></a> */}
                </div>
            </div>
        </div>
      </>
    );
}

export default Home;
