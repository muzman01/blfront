import React from 'react'

import Logo from "../img/Logo.png"
import { Link } from "react-router-dom";
export default function NavBar() {
    // if (document.readyState === 'complete'){
    //     function deneme()  {
    //         window.scrollY(function() {
    //             if (window.scrollY > 100) {
    //                 ("#header").addClass("navbar-shadow");
    //             } else {
    //                 ("#header").removeClass("navbar-shadow");
    //             }
    //         });
        
        
        
    //     };
    //     deneme()
    // }
  return (
    <header id="header" className="header">
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid p-0">
            <a className="my-navbar-brand" href="/"><img className="img-fluid" src={Logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse justify-content-center navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Business Overview</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" style={{pointerEvents:'none'}} href="#" id="navbarDropdown" role="button">
                            Estate Info
                        </a>
                        <div className="dropdown-content">
                            <hr className="dropdown-divider" ></hr>
                           
                            <a href="/notice" >Notice</a>
                            <a href="/notice">2nd Poject</a>
                            <a href="/notice">3rd Project</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="defi">Defi</a>
                     
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="partner">Partners</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="trendroyal">Trendroyal</a>
                    </li>
                    <li className="nav-item d-lg-none d-block">
                        <a className="nav-link " href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <a href="#" className="btn btn-outline-contact d-none d-lg-block">Contact</a>
        </div>
    </nav>
</header>
  )
}
