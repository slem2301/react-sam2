import React from 'react';
import NavbarHeader from "./Navbar-header";
import "./Header.css"

const Header = () => {
    return(
        <header className={'header'}>
            <div className={'container'}>
                <a href="/" className={'navbar-brand'}>
                    <img src="https://themified.com/friend-finder/images/logo.png" alt=""/>
                </a>
            <NavbarHeader />
            </div>
        </header>
    )
}
export default Header;