import React from 'react';
import LeftSidebar from "./Left-sidebar";
import Profile from "./Profile";
import RightSidebar from "./Right-sidebar";
import "./Page-content.css";

const PageContent = () => {
    return(
        <div className={'page-content'}>
            <div className={'container'}>
                <LeftSidebar/>
                <Profile/>
                <RightSidebar/>
            </div>
        </div>
    )
}
export default PageContent;