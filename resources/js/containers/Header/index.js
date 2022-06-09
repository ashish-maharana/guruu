import React from 'react';
import Navbar from "../Navbar";
import {Link} from "react-router-dom";


const Header = () => {
    return(
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <Link to="/"><img alt="Guruu" src='images/guruu.png' /></Link>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;
