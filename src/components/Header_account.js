import React from "react";
import '../styles/Header_account.css'

const Header_account = ()=>{
    return(
        <div className="ant-account_info">
            <a href="/">
            <span className="circular_account">
                
                <img src="img/account_icon.png">
                </img>
            </span>
            <span>201419@astanait.edu.kz</span>
            </a>
        </div>

    );
}
export default Header_account;