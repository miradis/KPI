import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import '../styles/Sidebar.css'
const Sidebar = ()=>{
  const [selected, setSelected] = useState("");
  const location = useLocation();

  const handleClick = (event) => {
    setSelected(event.target.innerText);
  };
    return(
    <aside className="drawer">
    <a href="/">
    <img className='logo' src= 'img/aitu-logo_white.png'></img>
    </a>
      <ul>
        <li
        style={{
          color: selected === "Dashboard" || location.pathname === "/" ? "blue" : "inherit",
        }}
      ><Link to='/' onClick={handleClick}>Dashboard</Link></li>
        <li
        style={{
          color: selected === "All teacher" || location.pathname === "/teachers" ? "blue" : "inherit",
        }}
      ><Link to='/Teachers' onClick={handleClick}>All teacher</Link></li>
        <li
        style={{
          color: selected === "Events" || location.pathname === "/events" ? "blue" : "inherit",
        }}
      ><Link to='/events' onClick={handleClick}>Events</Link></li>
        <li to='/LogOut'><Link to='/logout'>LogOut</Link></li>
      </ul>
        </aside>
    );
}
export {Sidebar}