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
        <div className="container1">
            <div className="hire">
                <div className="hire-header">
                    Hire
                </div>
                <div className="hire-text">
                    Have job vacancies? Want to hire the perfect candidate for lending a hand towards your dream? Hire Interns & Freshers faster. Post your intern requirements and build your dream team with ease.
                </div>
                <div className="button-container">
                <Link to={'/employerlogin'}><button className="hire-button">Sign up as employer</button></Link>
                </div>
            </div>
            <img src={hire1} className='image1'/>
        </div>
        <div className="container1">
            <img src={hire2} className='image2'/>
            <div className="hire">
                <div className="hire-header">
                    Get Hired
                </div>
                <div className="hire-text">
                    Want to put your potential to work? Find the right job or internshipfor you to shine your skills. Post your job profile and explore the industry through our network. Let the right people know you are open to work.
                </div>
                <div className="button-container">
                    <Link to={'/employeelogin'}><button className="hire-button">Sign up as employee</button></Link>
                </div>
            </div>
        </div>
    </>
    );
}

export default Home;
