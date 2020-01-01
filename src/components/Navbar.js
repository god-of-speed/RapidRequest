import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import HeaderLogo from "../assets/img/header.png";
import NavbarCss from "../assets/css/navbar.css";
import {Link,NavLink} from "react-router-dom";
import ClearIcon from '@material-ui/icons/Clear';

const Navbar = function(props) {
    return (
        <header id="first-header">
            <nav id="first-header-nav">
                <Link to="/"> <img id="first-header-img" src={HeaderLogo}></img></Link>
                <ul id="first-header-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/make_a_request">Make a request</NavLink></li>
                </ul>
                <div>
                <MenuIcon onClick={props.switchSidebar} style={props.showSidebar == true ? {visibility:"hidden"} : {visibility:'visible'}} id="menu-icon"/>
                <ClearIcon onClick={props.switchSidebar} style={props.showSidebar == false ? {visibility:"hidden"} : {visibility:'visible'}} id="menu-clear-icon" />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;