import "./App.css";
import {Routes, Route, NavLink} from 'react-router-dom'
import HomePage from "./pages/Home/HomePage";
import Profile from "./pages/Profile/Profile";
import CompleteKyc from "./pages/CompleteKyc/CompleteKyc";
import Quick from "./pages/Quick/Quick";

function App() {
  return (
    <div className="container">
      <div className="white_nav">
      
        <img
          src="https://portal.creditap.in/static/media/logo.60f9d361.svg"
          alt="creditap_logo"
          srcSet=""
        />
        <svg
          className="MuiSvgIcon-root DropDown_user__1Ljbc"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
        </svg>
      </div>
      <div className="red_nav">
        <ul>
          <li>
            <NavLink to="/home" className={({isActive})=>(isActive?"active":"inactive")}>Dashboard</NavLink></li>
          <li><NavLink to='/profile' className={({isActive})=>(isActive?"active":"inactive")}>Profile</NavLink></li>
          <li>Applications</li>
          <li>Blog</li>
        </ul>
      </div>
      <Routes>
        <Route exact path='/home' element={<HomePage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/completeKyc' element={<CompleteKyc/>}/>
        <Route path='/quick' element={<Quick/>}/>
      </Routes>

    </div>
  );
}

export default App;
