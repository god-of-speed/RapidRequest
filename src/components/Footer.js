import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import CopyrightIcon from "@material-ui/icons/Copyright";
import FooterCss from "../assets/css/footer.css";

const Footer = function(props) {
    return (
        <footer style={props.showSidebar == false ? {display:'block'} : {display:"none"}}>
            <div id="footer-first">
                <div>
                    <ul>
                        <li>
                            <LinkedInIcon/> Connect with us on LinkedIn
                        </li>
                        <li>
                            <TwitterIcon/> Follow us on Twitter
                        </li>
                        <li>
                            <FacebookIcon/> Visit us on Facebook
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <LocationOnIcon/> 10 onasanya Ajuwon Berger
                        </li>
                        <li>
                            <PhoneIcon/> 08147101575
                        </li>
                        <li>
                            <MailIcon/> ebukaubah78@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
            <div id="footer-second">
                &copy; 2020 RapidRequest. All rights reserved.<br></br>
                Site Design by RapidRequest Studio.
            </div>
        </footer>
    );
}

export default Footer;