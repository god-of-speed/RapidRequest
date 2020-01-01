import React from "react";
import {NavLink} from "react-router-dom";
import SidebarCss from "../assets/css/sidebar.css";

const Sidebar = function(props) {
    return (
        <div id="container" style={props.showSidebar == true ? {display:'flex'} : {display:"none"}}>
            <ul id="sidebar">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/make_a_request">Make a request</NavLink></li>
            </ul>
        </div>
    );
}

export default Sidebar;