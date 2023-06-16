import React from "react";
import logo from "../Assets/img/logo.png"




function Navbar(){
    return(
        <div className="navbar bg-base-100 drop-shadow-lg backdrop-blur-lg		">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href="#gallery" className="text-lg" >Gallery</a></li>
        
        <li><a href="#about" className="text-lg" >About</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-sm "><img src={logo} height="50" width="50" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href="#gallery" className="text-lg" >Gallery</a></li>
        
        <li><a href="#about" className="text-lg" >About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn animate-pulse text-sm">Book Now<img width="30" height="30" src="https://img.icons8.com/3d-fluency/50/camera.png" alt="camera"/></a>
  </div>
</div>
    )
}
export default Navbar