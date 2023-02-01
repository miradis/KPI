import React from "react";
import '../styles/Contacts.css';
import Contacts__box from "./Contacts__box";

const Contacts = ()=>{
    return (<div className="drawer_contact">
        <p className="contact_title">Contacts</p>
        <Contacts__box></Contacts__box>
        <Contacts__box></Contacts__box>
        <Contacts__box></Contacts__box>
        <Contacts__box></Contacts__box>
    </div>);
}
export default Contacts;