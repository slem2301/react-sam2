import React from 'react';
import NavbarHeader from "./NavbarHeader/Navbar-header";
import classes from "./Header.module.css"

const Header = () => {
    return(
        <header className={classes.header}>
            <div className={classes.container}>
                <a href="/" className={classes.navbar_brand}>
                    <img src="https://themified.com/friend-finder/images/logo.png" alt=""/>
                </a>
            <NavbarHeader />
            </div>
        </header>
    )
}
export default Header;