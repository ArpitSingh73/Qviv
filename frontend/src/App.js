import './App.css';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  console.log(
    process.env.REACT_APP_google_api_key,
    process.env.REACT_APP_google_auth_domain,
    process.env.REACT_APP_google_project_id,
    process.env.REACT_APP_google_storage_bucket,
    process.env.REACT_APP_google_message_sender_id,
    process.env.REACT_APP_google_auth_domain,
    process.env.REACT_APP_google_measurement_id
  );

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Profile />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
