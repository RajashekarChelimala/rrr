import React from "react";
import NavBar from "./NavBar";

import "./MainNavigation.css";

import logo from "../assets/images/logo.png";

const MainNavigation = props => {
    return (
        <React.Fragment>
            <img src={logo} className="logo"/>
            <NavBar/>
        </React.Fragment>
    );
}

export default MainNavigation;