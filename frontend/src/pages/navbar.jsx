import React, {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Routes, Route, redirect} from 'react-router-dom'
import { useNavigate,useParams,Link } from 'react-router-dom';



function Navbar() {
  const navigate = useNavigate();
  var Token = localStorage.getItem('accessToken');
  var userType = localStorage.getItem('userType');
  const [loading, setLoading] = useState("loading");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5555/employeeAuth/protected`, {
          headers: {
              'Authorization': `Bearer ${Token}`
          }
        });
        setUsername(res.data.username);
        
        } catch (error) {
          console.log(error, "try block error");
        }
      }
    setLoading('');
    fetchData();
  }, []);
  
  function handleLogout(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userType');
    navigate('/');
  }; 

    return (
      <>

      { loading != "loading" ? (
        <>
          { Token == null && userType == null ? (
          <>
            <nav className="navbar">
              <Link to={"/"}> <a><i className="fa-sharp fa-solid fa-house"></i> &nbsp; Home</a></Link>
              <Link to={"/employeelogin"}><a><i className="fa-solid fa-user"></i> &nbsp; Employee Login</a></Link>
              <Link to={"/employerlogin"}><a><i className="fa-solid fa-user"></i> &nbsp; Employer Login</a></Link>
            </nav>
          </>
          ) : (
            <>
                { Token != null && userType == "employee" ? (
                  <>
                    <nav className="navbar">
                      <Link to={"/"}> <a><i className="fa-sharp fa-solid fa-house"></i> &nbsp; Home</a></Link>
                      <Link to={`/jobs/${username}`}><a><i className="fa-solid fa-book-open-reader"></i> &nbsp; Jobs</a></Link>
                      <Link to={`/profile/${username}`}><a><i className="fa-solid fa-user"></i> &nbsp; Profile</a></Link>
                      <button onClick={handleLogout} className='none'><a><i className="fa-solid fa-user"></i> &nbsp; Logout</a></button>
                    </nav>
                  </>
                ) : (
                  <> 
                    <nav className="navbar">
                      <Link to={"/"}> <a><i className="fa-sharp fa-solid fa-house"></i> &nbsp; Home</a></Link>
                      <Link to={`/applicants/${username}`}><a><i className="fa-solid fa-user"></i> &nbsp; Applicants</a></Link>
                      <Link to={`/jobpost/${username}`}><a><i className="fa-solid fa-book-open-reader"></i> &nbsp; Job Post</a></Link>
                      <button onClick={handleLogout} className='none'><a><i className="fa-solid fa-user"></i> &nbsp; Logout</a></button>
                    </nav>
                  </>
                )}
            </>
        )}
        </>
      ) : (
        <>
        loading...
        </>
      )}

        
      </>
    );
}

export default Navbar;
