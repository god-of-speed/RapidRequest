import React,{Component} from "react";
import QueryString from "query-string";
import Sub4 from "../assets/img/sub4.png";
import Sub5 from "../assets/img/sub5.png";
import Sub9 from "../assets/img/sub9.png";
import Sub10 from "../assets/img/sub10.png";
import Sub11 from "../assets/img/sub11.png";
import Sub12 from "../assets/img/sub12.png";
import Sub3 from "../assets/img/sub3.png";
import Sub1 from "../assets/img/sub1.png";
import Sub2 from "../assets/img/sub2.png";
import Sub6 from "../assets/img/sub6.png";
import Sub7 from "../assets/img/sub7.png";
import Sub8 from "../assets/img/sub8.png";
import Sub13 from "../assets/img/sub13.png";
import Sub14 from "../assets/img/sub14.png";
import {Link} from "react-router-dom";
import MakeARequest from "./make_a_request";
import HomeCss from "../assets/css/home.css";

class Categories extends Component{
    componentWillMount(){
        if(this.props.showSidebar == true) {
            this.props.switchSidebar();
        }
    }
    render(){
        var selectedCat = QueryString.parse(this.props.location.search);
        selectedCat = selectedCat.selectedCat;
        
        if(selectedCat == 'writing') {
            return (
                <div id="container" style={this.props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
                    <div id="services">
                        <div id="services-main">
                            <div className="services-types">
                                <img src={Sub4} width="260" height="200"></img>
                                <p>lets proofread your paper publications for you.</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                            <div className="services-types">
                                <img src={Sub5} width="260" height="200"></img>
                                <p>Need more bloggers for your website?</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            );
        }
        if(selectedCat == 'social_media'){
            return (
                <div id="container" style={this.props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
                    <div id="services">
                        <div id="services-main">
                            <div className="services-types">
                                <img src={Sub9} width="260" height="200"></img>
                                <p>Rank first in search engine search.</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                            <div className="services-types">
                                <img src={Sub10} width="260" height="200"></img>
                                <p>Managing lots of content can be a pain lets help you</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                            <div className="services-types">
                                <img src={Sub11} width="260" height="200"></img>
                                <p>Make people aware of your contents</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                            <div className="services-types">
                                <img src={Sub12} width="260" height="200"></img>
                                <p>Advertise your products</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            );
        }
        if(selectedCat == 'design') {
            return (
                <div id="container" style={this.props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
                    <div id="services">
                        <div id="services-main">
                            <div className="services-types">
                                <img src={Sub3} width="260" height="200"></img>
                                <p>Let's create awesome looking graphics for you.</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            );
        }
        if(selectedCat == 'production') {
            return (
                <div id="container" style={this.props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
                    <div id="services">
                        <div id="services-main">
                            <div className="services-types">
                                <img src={Sub1} width="260" height="200"></img>
                                <p>Improve your brand with a white board video.</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                            <div className="services-types">
                                <img src={Sub2} width="260" height="200"></img>
                                <p>Let's make that photo awesome.</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            );
        }
        if(selectedCat == 'webdev') {
            return (
                <div id="container" style={this.props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
                    <div id="services">
                        <div id="services-main">
                            <div className="services-types">
                                <img src={Sub6} width="260" height="200"></img>
                                <p>Attract more customers by creating a web presence with us.</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                            <div className="services-types">
                                <img src={Sub7} width="260" height="200"></img>
                                <p>Let's build a mobile app for your brand.</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                            <div className="services-types">
                                <img src={Sub8} width="260" height="200"></img>
                                <p>Need a software to make day-to-day activities easy?</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            );
        }
        if(selectedCat == 'more') {
            return (
                <div id="container" style={this.props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
                    <div id="services">
                        <div id="services-main">
                            <div className="services-types">
                                <img src={Sub13} width="260" height="200"></img>
                                <p>Let's trade and make profit for you.</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                            <div className="services-types">
                                <img src={Sub14} width="260" height="200"></img>
                                <p>We can create illustrations for your content.</p>
                                <Link to="/make_a_request">Make a request</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            );
        }
    }
}

export default Categories;