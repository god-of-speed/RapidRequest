import React from "react";
import HomeCss from "../assets/css/home.css"; 
import AboutImg from "../assets/img/about.png";

const About = function(props){
    if(props.showSidebar == true) {
        props.switchSidebar();
    }
    return(
        <div id="container" style={props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
            <div id="about">
                        <h1>What we do</h1>
                        <div id="rule">
                            <div id="main"></div>
                        </div>
                        <div id="about-main">
                            <img src={AboutImg} id="about-img"></img>
                            <p>
                                RapidRequest provides special services and talent you need ASAP!.
                                For short or long term assignments we deliver top-notch products to our clients. 
                                We’ve been providing our special services to
                                corporations, design studios and small businesses across the Africa.
                            </p>
                        </div>
                </div>
        </div>
    );
}

export default About;