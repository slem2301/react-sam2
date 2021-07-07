import React from "react";
import Avatar from "./Avatar";

const LeftSidebar = () => {
    return (
        <div className={'left-sidebar'}>
            <Avatar/>
            <div className={'nav-news-feed'}>
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