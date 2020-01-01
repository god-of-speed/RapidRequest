import React, {Component} from "react";
import OneImg from "../assets/img/one.png";
import TwoImg from "../assets/img/two.png";
import ThreeImg from "../assets/img/three.png";
import FourImg from "../assets/img/four.png";
import FiveImg from "../assets/img/five.png";
import SixImg from "../assets/img/six.png";
import OnesImg from "../assets/img/ones.png";
import TwosImg from "../assets/img/twos.png";
import ThreesImg from "../assets/img/threes.png";
import FoursImg from "../assets/img/fours.png";
import FivesImg from "../assets/img/fives.png";
import SixsImg from "../assets/img/sixs.png";
import HomeCss from "../assets/css/home.css"; 
import AboutImg from "../assets/img/about.png";
import Cat1 from "../assets/img/cat1.jpg";
import Cat2 from "../assets/img/cat2.jpg";
import Cat3 from "../assets/img/cat3.jpg";
import Cat4 from "../assets/img/cat4.jpg";
import Cat5 from "../assets/img/cat5.jpg";
import Cat6 from "../assets/img/cat6.jpg";
import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.imgFlipper = this.imgFlipper.bind(this);
        this.sImgFlipper = this.sImgFlipper.bind(this);
    }

    state = {
        imgs:[SixImg,OneImg,FourImg,FiveImg,TwoImg,ThreeImg],
        sImgs:[SixsImg,OnesImg,FoursImg,FivesImg,TwosImg,ThreesImg],
        s:0,
        i:0,
        img:OneImg,
        sImg:OnesImg
    }
    componentWillMount() {
        if(this.props.showSidebar == true) {
            this.props.switchSidebar();
        }
        setInterval(this.imgFlipper,7000);
        setInterval(this.sImgFlipper,7000);
    }

    imgFlipper(){
        return this.setState((state,props)=>{
            if(state.i == 5) {
                return {
                    i:0,
                    img:state.imgs[0]
                }
            }else{
                return {
                    i:state.i + 1,
                    img:state.imgs[state.i + 1]
                }
            }
        });
    }

    sImgFlipper(){
        return this.setState((state,props)=>{
            if(state.s == 5) {
                return {
                    s:0,
                    sImg:state.sImgs[0]
                }
            }else{
                return {
                    s:state.s + 1,
                    sImg:state.sImgs[state.s + 1]
                }
            }
        });
    }

    render() {
        return(
            <div id="container" style={this.props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
                <img id="desktop-img" src={this.state.img}></img>
                <img id="mobile-img" src={this.state.sImg}></img>
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
                <div id="services">
                        <h1>Our services</h1>
                        <div className="rule">
                            <div className="main"></div>
                        </div>
                        <p>We render pretty well every type of creative, 
                            production, remote and marketing profession out there.Check out the list…</p>
                        <div id="services-main">
                            <div className="services-types">
                                <img src={Cat1} width="260" height="200"></img>
                                <p>lets create and design great wrorks for you.
                                    <br></br>
                                    #Graphic design
                                    <br></br>
                                    #InfoGraphics design
                                </p>
                                <Link to="/sub_cat?selectedCat=design">Be more specific</Link>
                            </div>
                            <div className="services-types">
                                <img src={Cat2} width="260" height="200"></img>
                                <p>Need to create a wares for advertisement or social media.
                                    <br></br>
                                    #Photo re-touch
                                    <br></br>
                                    #white board video creation
                                </p>
                                <Link to="/sub_cat?selectedCat=production">Be more specific</Link>
                            </div>
                            <div className="services-types">
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
                            <div className="services-types">
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
                            <div className="services-types">
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
                            <div className="services-types">
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
                        <Link to="/make_a_request" className="make-request">Make a request</Link>
                </div>
                <div id="why-us">
                    <h1>Why hire us</h1>
                    <div className="rule">
                        <div className="main"></div>
                    </div>
                    <p>
                    We do things on a personal level. 
                    There is so much more to finding that perfect client fit than just matching search terms and phrases. 
                    Our entire business is based on people, and the personal relationships we’ve developed 
                    with our clients have been the key to our success.
                    <br></br>
                    We talk the talk. With years of experience within the creative and 
                    marketing fields, you know when you call us you will be speaking to 
                    folks who actually understand your needs. 
                    Don’t call an agency with inexperienced account people 
                    who will send you a financial writer when you asked for a copywriter.
                    <br></br>
                    Sure, we’re not the biggest placement agency in town, 
                    but that’s a good thing. We’re flexible, friendly and engaging. 
                    We’re nicer. We treat you with the respect you deserve. 
                    We work as a team. We’re 100% Nigerian owned and operated. 
                    We present you offers at the best rates,
                    </p>
                    {/* <Link class="make-request">Make a request</Link> */}
                </div>
            </div>
        );
    }
}

export default Home;