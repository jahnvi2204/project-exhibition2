import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate,useParams,Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import JobListing from './jobListing.jsx'
import "./job_search_styles.css"

function Jobs() {
    let { username } = useParams();
    const [list, setList] = useState([]);
    const [mongoList, setMongoList] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState("loading");
    
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`http://localhost:5555/algo/jobs/${username}`);
                    setMongoList(res.data.data);
                    res.data.data.forEach((job) => {
                        setList((l) => [...l, {
                            _id: job._id,
                            jobPosition: job.jobPosition,                             
                            companyName: job.companyName, 
                            city: job.city,
                            salary: job.salary,                            
                            workExperience: job.workExperience, 
                            startDate: job.startDate, 
                            capplyTillity: job.applyTill, 
                            additionalInfoFromEmployer: job.additionalInfoFromEmployer,
                            createdAt: job.createdAt
                        }]);
                        // setList((l) => [...l, blog.blog]);
                    });
                    setLoading("");
                    console.log(list[0].companyName);
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
                        <JobListing job={item} index={index} username={username}/>
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

export default Jobs;
