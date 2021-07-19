import React from "react";
import Avatar from "../Avatar/Avatar";
import classes from "./Left-sidebar.module.css"

const LeftSidebar = () => {
    return (
        <div className={classes.left_sidebar}>
            <Avatar/>
            <div className={classes.nav_news_feed}>
                <div>
                    <a href={'#'}>My Newsfeed</a>
                </div>
                <div>
                    <a href={'#'}>People Nearby</a>
                </div>
                <div>
                    <a href={'#'}>Friends</a>
                </div>
                <div>
                    <a href={'#'}>Messages</a>
                </div>
                <div>
                    <a href={'#'}>Images</a>
                </div>
                <div>
                    <a href={'#'}>Videos</a>
                </div>
            </div>
        </div>
    )
}
export default LeftSidebar;