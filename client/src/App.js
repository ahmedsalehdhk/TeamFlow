import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages & components
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Tasks from './pages/Tasks'
import Messages from './pages/Messages'
import Calendar from './pages/Calendar'
import Settings from './pages/Settings'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
          <Route exact path='/dashboard/projects' element={<Projects />}></Route>
          <Route exact path='/dashboard/tasks' element={<Tasks />}></Route>
          <Route exact path='/dashboard/messages' element={<Messages />}></Route>
          <Route exact path='/dashboard/calendar' element={<Calendar />}></Route>
          <Route exact path='/dashboard/settings' element={<Settings />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
