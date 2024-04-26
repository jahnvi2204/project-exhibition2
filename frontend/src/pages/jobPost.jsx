import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './navbar.jsx';
import './profile-styles.css';

function JobPost() {
    let { username } = useParams();
    const [invalid, setInvalid] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [employerUsername, setEmployerUsername] = useState(username);
    const [companyName, setCompanyName] = useState('');
    const [city, setCity] = useState('');
    const [salary, setSalary] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [applyTill, setApplyTill] = useState('');
    const [additionalInfoFromEmployer, setAdditionalInfoFromEmployer] = useState('');
    const [skills, setSkills] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await axios.post(`http://localhost:5555/job/`, {
                jobPosition,
                employerUsername,
                companyName,
                city,
                salary,
                workExperience,
                startDate,
                endDate,
                applyTill,
                additionalInfoFromEmployer,
                skills
            });
            navigate('/');
        } catch (error) {
            if (error.response) {
                setInvalid(error.response.data.message);
            }
            console.error(error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="profile">
                    <div className="profile-header">Job Post</div>
                    {/* Dropdown */}
                    <div className="profile-input">
                        <select className='dropbtn' value={jobPosition} onChange={(e) => setJobPosition(e.target.value)}>
                            <option value="">Select Field</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Data Analyst">Data Analyst</option>
                            <option value="Marketing Manager">Marketing Manager</option>
                            <option value="Web Developer">Web Developer</option>
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="Project Manager">Project Manager</option>
                            <option value="Sales Representative">Sales Representative</option>
                            <option value="Administrative Assistant">Administrative Assistant</option>
                            <option value="Business Analyst">Business Analyst</option>
                            <option value="Executive Assistant">Executive Assistant</option>
                            <option value="Marketing Coordinator">Marketing Coordinator</option>
                            <option value="Operations Coordinator">Operations Coordinator</option>
                            <option value="IT Support Specialist">IT Support Specialist</option>
                            <option value="Orthopaedic Surgeon">Orthopaedic Surgeon</option>
                            <option value="Product Manager">Product Manager</option>
                            <option value="Field Sales Executive">Field Sales Executive</option>
                            <option value="Chartered Accountant">Chartered Accountant</option>
                        </select>
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input type="number" placeholder="Enter Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input type="number" placeholder="Enter Work Experience" value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        Start Date:
                        <input type="date" placeholder="Enter Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        Apply Till:
                        <input type="date" placeholder="Enter Apply Till" value={applyTill} onChange={(e) => setApplyTill(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <textarea placeholder="Enter Additional Info From Employer" value={additionalInfoFromEmployer} onChange={(e) => setAdditionalInfoFromEmployer(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
                    </div>
                    <div className="profile-button">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                    <span className='invalid'>{invalid}</span>
                </div>
            </div>
        </>
    );
}

export default JobPost;
