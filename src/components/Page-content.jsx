import React from 'react';
import LeftSidebar from "./Left-sidebar";
import Profile from "./Profile";
import RightSidebar from "./Right-sidebar";
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