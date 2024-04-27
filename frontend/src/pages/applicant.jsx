import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate,useParams,Link } from 'react-router-dom';
import Navbar from './navbar.jsx';


function Applicant() {
    let { username} = useParams();
    const [employee, setEmployee] = useState(0);
    const [mongoList, setMongoList] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState("loading");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5555/profile/${username}`);
                setEmployee(res.data.profile);
                setLoading("");
                console.log("employee:", employee);
            } catch (error) {
                console.log(error, "try block error");
            }
        }

        fetchData();
    }, []);


    return (
      <>
        <Navbar />
        
        {employee != 0 ? (
            <>
            <div className='job'>
                <div class="container">
                <h1>{employee.name}</h1>
                <h2>City: {employee.city ? employee.city : "NA"}</h2>
                <h3>Work Experience1 : {employee.workExperience1 ? employee.workExperience1 : "NA"}</h3>
                <h3>Work Experience1 Years : {employee.workExperienceYears1 ? employee.workExperienceYears1 : "NA"}</h3>
                <h3>Work Experience2 : {employee.workExperience2 ? employee.workExperience2 : "NA"}</h3>
                <h3>Work Experience2 Years : {employee.workExperienceYears2 ? employee.workExperienceYears2 : "NA"}</h3>
                <h3>Education : {employee.education ? employee.education : "NA"}</h3>
                <h3>College CGPA : {employee.collegeCGPA ? employee.collegeCGPA : "NA"}</h3>
                <h3>12th Percentage : {employee._12thPercentage ? employee._12thPercentage : "NA"}</h3>
                <h3>Projects : {employee.projects ? employee.projects : "NA"}</h3>
                <h3>Skills : {employee.skills ? employee.skills : "NA"}</h3>
                <h3>Portfolio Link : {employee.portfolioLink ? employee.portfolioLink : "NA"}</h3>
                <h3>Accomplishments : {employee.accomplishments ? employee.accomplishments : "NA"}</h3>
                <h1>Contact Info</h1>
                <h3>E-Mail : {employee.email && employee.email !== "" ? employee.email : "NA"}</h3>
                <h3>Phone Number : {employee.phoneNumber && employee.phoneNumber !== "" ? employee.phoneNumber : "NA"}</h3>
                </div>
            </div>
            </>
        ) : (
            <div>{loading}</div>
        )}
      </>
    );
}

export default Applicant;
