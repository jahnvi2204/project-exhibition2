import Home from './pages/home.jsx';
import EmployeeLogin from './pages/employeeLogin.jsx';
import EmployeeRegister from './pages/employeeregister.jsx';
import Profile from './pages/profile.jsx';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/employeelogin' element={<EmployeeLogin />} />
      <Route path='/employeeregister' element={<EmployeeRegister />} />
      <Route path='/profile/:username' element={<Profile />} />
    </Routes>
  )
}

export default App;
