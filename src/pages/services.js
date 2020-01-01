import React from "react";
import HomeCss from "../assets/css/home.css";
import Cat1 from "../assets/img/cat1.jpg";
import Cat2 from "../assets/img/cat2.jpg";
import Cat3 from "../assets/img/cat3.jpg";
import Cat4 from "../assets/img/cat4.jpg";
import Cat5 from "../assets/img/cat5.jpg";
import Cat6 from "../assets/img/cat6.jpg";
import {Link} from "react-router-dom";

const Services = function(props) {
    if(props.showSidebar == true) {
        props.switchSidebar();
    }
    return(
        <div id="container" style={props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
                            <div id="services">
                        <h1>Our services</h1>
                        <div class="rule">
                            <div class="main"></div>
                        </div>
                        <p>We render pretty well every type of creative, 
                            production, remote and marketing profession out there.Check out the list…</p>
                        <div id="services-main">
                            <div class="services-types">
                                <img src={Cat1} width="260" height="200"></img>
                                <p>lets create and design great wrorks for you.
                                    <br></br>
                                    #Graphic design
                                    <br></br>
                                    #InfoGraphics design
                                </p>
                                <Link to="/sub_cat?selectedCat=design">Be more specific</Link>
                            </div>
                            <div class="services-types">
                                <img src={Cat2} width="260" height="200"></img>
                                <p>Need to create a wares for advertisement or social media.
                                    <br></br>
                                    #Photo re-touch
                                    <br></br>
                                    #white board video creation
                                </p>
                                <Link to="/sub_cat?selectedCat=production">Be more specific</Link>
                            </div>
                            <div class="services-types">
                                <img src={Cat3} width="260" height="200"></img>
                                <p>Contents can be a little difficult to create, but we can help you.
                                    <br></br>
                                    #copywriters #proofreaders
                                    <br></br>
                                    #online contents
                                    <br></br> 
                                    #business contents
                                    <br></br>
                                    #Bloggers #editors
                                </p>
                                <Link to="/sub_cat?selectedCat=writing">Be more specific</Link>
                            </div>
                            <div class="services-types">
                                <img src={Cat4} width="260" height="200"></img>
                                <p>Lets bring you online with our web skills.App
                                    <br></br>
                                    #web development from scratch
                                    <br></br>
                                    #web development using CMS
                                    <br></br>
                                    #Responsive design
                                    <br></br>
                                    #App development
                                    <br></br>
                                    #Software development 
                                </p>
                                <Link to="/sub_cat?selectedCat=webdev">Be more specific</Link>
                            </div>
                            <div class="services-types">
                                <img src={Cat5} width="260" height="200"></img>
                                <p>let's help you boost your online presence.
                                    <br></br>
                                    #SEO experts
                                    <br></br>
                                    #Content management
                                    <br></br>
                                    #Content marketing
                                    <br></br>
                                    #Digital marketing
                                </p>
                                <Link to="/sub_cat?selectedCat=social_media">Be more specific</Link>
                            </div>
                            <div class="services-types">
                                <img src={Cat6} width="260" height="200"></img>
                                <p>Other services we provide include
                                    <br></br>
                                    #Animation
                                    <br></br>
                                    #illustration
                                    <br></br>
                                    #FOREX trading
                                </p>
                                <Link to="/sub_cat?selectedCat=more">Be more specific</Link>
                            </div>
                        </div>
                        <p>
                        If you don’t see what you need listed here, just ask!
                        </p>
                        <Link class="make-request">Make a request</Link>
                </div>
        </div>
    );
}

export default Services;