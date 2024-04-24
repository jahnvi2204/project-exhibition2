import React, {useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {Routes, Route, redirect} from 'react-router-dom';
import { useNavigate,useParams,Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import './profile-styles.css';

function Profile() {
    const [invalid, setInvalid] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [selectedField, setSelectedField] = useState('');
    const [education, setEducation] = useState('');
    const [collegeCGPA, setCollegeCGPA] = useState('');
    const [twelfthPercentage, setTwelfthPercentage] = useState('');
    const [workExp1, setWorkExp1] = useState('');
    const [workExpYears1, setWorkExpYears1] = useState('');
    const [workExp2, setWorkExp2] = useState('');
    const [workExpYears2, setWorkExpYears2] = useState('');
    const [projects, setProjects] = useState('');
    const [skills, setSkills] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [accomplishments, setAccomplishments] = useState('');
    let { username } = useParams();

    const navigate = useNavigate();

    const handleSubmit = async() => {
        await axios
        .post(`http://localhost:5555/profile`, {"profile":{
            'username': username,
            'name': name,
            'phoneNumber': phoneNo,
            'city': city,
            'field': selectedField,
            'education': education,
            'collegeCGPA': collegeCGPA,
            '_12thPercentage': twelfthPercentage,
            'workExperience1': workExp1,
            'workExperienceYears1': workExpYears1,
            'workExperience2': workExp2,
            'workExperienceYears2': workExpYears2,
            'projects': projects,
            'skills': skills,
            'portfolioLink': portfolioLink,
            'accomplishments': accomplishments}
        })
        .then((res) => {
            navigate('/');
            console.log(res);
            setInvalid("");
        })
        .catch((error) => {
            if(error.response){
                setInvalid(error.response.data.message);
            }
            
            console.log(error.message);
        })
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="profile">
                    <div className="profile-header">Profile</div>
                    <div className="profile-input">
                        <input placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Phone No." value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    {/* Dropdown */}
                    <div className="profile-input">
                        <select className='dropbtn' value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
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
                        <input placeholder="Enter Education" value={education} onChange={(e) => setEducation(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter College CGPA" value={collegeCGPA} onChange={(e) => setCollegeCGPA(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter 12th percentage" value={twelfthPercentage} onChange={(e) => setTwelfthPercentage(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Work Experience1(leave blank if none)" value={workExp1} onChange={(e) => setWorkExp1(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Work Experience Years1(leave blank if none)" value={workExpYears1} onChange={(e) => setWorkExpYears1(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Work Experience2(leave blank if none)" value={workExp2} onChange={(e) => setWorkExp2(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Work Experience Years2(leave blank if none)" value={workExpYears2} onChange={(e) => setWorkExpYears2(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Academics/ Personal Projects " value={projects} onChange={(e) => setProjects(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Portfolio link(github/linkedIn if no separate portfolio website)" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)} />
                    </div>
                    <div className="profile-input">
                        <input placeholder="Enter Accomplishments" value={accomplishments} onChange={(e) => setAccomplishments(e.target.value)} />
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

export default Profile;