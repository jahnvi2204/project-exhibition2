import Home from './pages/home.jsx';
import EmployeeLogin from './pages/employeeLogin.jsx';
import EmployerLogin from './pages/employerLogin.jsx';
import EmployeeRegister from './pages/employeeregister.jsx';
import EmployerRegister from './pages/employerregister.jsx';
import Profile from './pages/profile.jsx';
import JobPost from './pages/jobPost.jsx';
import Jobs from './pages/jobs.jsx';
import Applicants from './pages/applicants.jsx';
import Applicant from './pages/applicant.jsx';
import Job from './pages/job.jsx';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/employeelogin' element={<EmployeeLogin />} />
      <Route path='/employerlogin' element={<EmployerLogin />} />
      <Route path='/employeeregister' element={<EmployeeRegister />} />
      <Route path='/employerregister' element={<EmployerRegister />} />
      <Route path='/profile/:username' element={<Profile />} />
      <Route path='/jobpost/:username' element={<JobPost />} />
      <Route path='/jobs/:username' element={<Jobs />} />
      <Route path='/applicants/:username' element={<Applicants />} />
      <Route path='/applicant/:username' element={<Applicant />} />
      <Route path='/job/:username/:id' element={<Job />} />
    </Routes>
  )
}

export default App;
