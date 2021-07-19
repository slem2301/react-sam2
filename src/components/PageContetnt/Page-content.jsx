import React from 'react';
import LeftSidebar from "../LeftSidebar/Left-sidebar";
import Profile from "../Profile/Profile";
import RightSidebar from "../Right sidebar/Right-sidebar";
import classes from "./Page-content.module.css";

const PageContent = () => {
    return(
        <div className={classes.page_content}>
            <div className={classes.container}>
                <LeftSidebar/>
                <Profile/>
                <RightSidebar/>
            </div>
        </div>
    )
}
export default PageContent;