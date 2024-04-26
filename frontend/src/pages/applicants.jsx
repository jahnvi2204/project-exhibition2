import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate,useParams,Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import ApplicantListing from './applicantListing.jsx'
import "./job_search_styles.css"

function Applicants() {
    let { username } = useParams();
    const [list, setList] = useState([]);
    const [mongoList, setMongoList] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState("loading");
    
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`http://localhost:5555/algo/applicants/${username}`);
                    setMongoList(res.data.data);
                    res.data.data.forEach((employee) => {
                        setList((l) => [...l, {
                            _id: employee._id,
                            username: employee.username,
                            name: employee.name,
                            email: employee.email,
                            phoneNumber: employee.phoneNumber,
                            city: employee.city,
                            field: employee.field,
                            education: employee.education,
                            collegeCGPA: employee.collegeCGPA,
                            _12thPercentage: employee._12thPercentage,
                            workExperience1: employee.workExperience1,
                            workExperienceYears1: employee.workExperienceYears1,
                            workExperience2: employee.workExperience2,
                            workExperienceYears2: employee.workExperienceYears2,
                            projects: employee.projects,
                            skills: employee.skills,
                            portfolioLink: employee.portfolioLink,
                            accomplishments: employee.accomplishments,
                            createdAt: employee.createdAt
                        }]);
                        // setList((l) => [...l, blog.blog]);
                    });
                    setLoading("");
                    console.log(list);
                } catch (error) {
                    console.log(error, "try block error");
                }
            }

            fetchData();
        }, []);

        
    return (
      <>
        <Navbar />
        {list.length > 0 ? (
            <>
            <div className='jobs'>
                <div class="container">
                    {list.map((item, index) => (
                        <ApplicantListing employee={item} index={index} username={username}/>
                    ))}
                </div>
            </div>
            </>
        ) : (
            <div>{loading}</div>
        )}
        
      </>
    );
}

export default Applicants;