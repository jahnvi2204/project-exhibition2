import Home from './pages/home.jsx';
import EmployeeLogin from './pages/employeeLogin.jsx';
import EmployeeRegister from './pages/employeeregister.jsx';
import Profile from './pages/profile.jsx';
import Jobs from './pages/jobs.jsx';
import Job from './pages/job.jsx';
import {Routes, Route} from 'react-router-dom';

Jobs
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/employeelogin' element={<EmployeeLogin />} />
      <Route path='/employeeregister' element={<EmployeeRegister />} />
      <Route path='/profile/:username' element={<Profile />} />
      <Route path='/jobs/:username' element={<Jobs />} />
      <Route path='/job/:username/:id' element={<Job />} />
    </Routes>
  )
}

export default App;
