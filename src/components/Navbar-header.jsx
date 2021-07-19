import React from "react";
import "./Navbar-header.css"

const NavbarHeader = () => {
    return(
        <nav className={'nav'}>
            <div>
                <a href={'#'}>Home</a>
            </div>
            <div>
                <a href={'#'}>Newsfeed</a>
            </div>
            <div>
                <a href={'#'}>Timeline</a>
            </div>
            <div>
                <a href={'#'}>All pages</a>
            </div>
            <div>
                <a href={'#'}>Contact</a>
            </div>
        </nav>
    )
}
export default NavbarHeader;