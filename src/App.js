import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/home";
import FooterComponent from "./components/Footer";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import MakeARequestPage from "./pages/make_a_request";
import CategoriesPage from "./pages/categories";

class App extends Component {
    constructor(props) {
        super(props);
        this.switchSidebar = this.switchSidebar.bind(this);
    }
    
    state = {
        showSidebar:false
    }

    switchSidebar = function() {
        return this.setState((state,props)=>{
            return {
                showSidebar: !state.showSidebar
            }
        });
    }

    render() {
        return (
        <BrowserRouter>
            <Navbar {...this.state} switchSidebar={this.switchSidebar}/>
            <Sidebar {...this.state} switchSidebar={this.switchSidebar}/>
            <Switch>
                <Route
                exact
                path="/"
                render={props => (
                    <HomePage
                     {...props}
                     {...this.state}
                     switchSidebar={this.switchSidebar}
                    />
                )}
                ></Route>
                <Route
                exact
                path="/about"
                render={props => (
                    <AboutPage
                     {...props}
                     {...this.state}
                     switchSidebar={this.switchSidebar}
                    />
                )}
                ></Route>
                <Route
                exact
                path="/services"
                render={props => (
                    <ServicesPage
                     {...props}
                     {...this.state}
                     switchSidebar={this.switchSidebar}
                    />
                )}
                ></Route>
                <Route
                exact
                path="/make_a_request"
                render={props => (
                    <MakeARequestPage
                     {...props}
                     {...this.state}
                     switchSidebar={this.switchSidebar}
                    />
                )}
                ></Route>
                <Route
                exact
                path="/sub_cat"
                render={props => (
                    <CategoriesPage
                     {...props}
                     {...this.state}
                     switchSidebar={this.switchSidebar}
                    />
                )}
                ></Route>
            </Switch>
            <FooterComponent {...this.state}/>
        </BrowserRouter>
    );
  }
}

export default App;
