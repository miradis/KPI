import React from "react";
import '../styles/Header.css'
import Header_account from "./Header_account.js";

const Header = ()=>{
return(
<header>
    <a href="/">
    <img className='logo' src= 'img/aitu-logo_white.png'></img>
    </a>
    <Header_account></Header_account>
</header>);
}
export default Header;