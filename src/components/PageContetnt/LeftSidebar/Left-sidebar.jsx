import React from "react";
import Avatar from "./Avatar/Avatar";
import classes from "./Left-sidebar.module.css"
import {NavLink} from "react-router-dom";

const LeftSidebar = () => {
    return (
        <div className={classes.left_sidebar}>
            <Avatar/>
            <div className={classes.nav_news_feed}>
                <div className={classes.item}>
                    <NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/dialogs'} activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/news'} activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/settings'} activeClassName={classes.active}>Settings</NavLink>
                </div>
            </div>
        </div>
    )
}
export default LeftSidebar;