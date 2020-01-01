import React,{Component} from "react";
import RequestCss from "../assets/css/request.css";

class MakeARequest extends Component{
    componentWillMount(){
        if(this.props.showSidebar == true) {
            this.props.switchSidebar();
        }
    }

    sendInfo = function(e) {
        e.preventDefault();
        var form = new FormData(e.target);
        console.log('dddd');
    }

    render(){
        return (
            <div id="container" style={this.props.showSidebar == false ? {display:'flex'} : {display:"none"}}>
                <h1>Make a request</h1>
                        <div className="rule">
                            <div className="main"></div>
                        </div>
                <form id="request-form" onSubmit={this.sendInfo}>
                    <input name="name" type="text" placeholder="Name"/>
                    <input name="email" type="email" placeholder="Email"/>
                    <textarea name="decription" placeholder="Describe your project..."></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default MakeARequest;