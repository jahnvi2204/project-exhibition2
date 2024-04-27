import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate,useParams,Link } from 'react-router-dom';
import "./job_search_styles.css"


function ApplicantListing(props) {

    return (
      <>
        <div className="job-listing">
          <div className="header">
            <h2>{props.employee.name}</h2>
            <h3>{props.employee.email}</h3>
            <p><i className="fa-sharp fa-solid fa-location-dot"></i> {props.employee.city}</p>
          </div>
          <div className="details"></div>
          <div className="actions">
            <h3>Total Work Experience: {props.employee.workExperienceYears1 + props.employee.workExperienceYears2} years</h3>
            <h3>Education: {props.employee.education}</h3>
            <h3>College GPA: {props.employee.collegeCGPA}</h3>
            <a href={`/applicant/${props.employee.username}`}>View details</a>
          </div>
        </div>
      </>
    );
}

export default ApplicantListing;
