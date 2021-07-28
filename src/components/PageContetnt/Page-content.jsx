import React from 'react';
import LeftSidebar from "./LeftSidebar/Left-sidebar";
import Profile from "./Profile/Profile";
import RightSidebar from "./Right sidebar/Right-sidebar";
import classes from "./Page-content.module.css";
import Dialogs from "./Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";


const PageContent = () => {
    return (
        <BrowserRouter>
            <div className={classes.page_content}>
                <div className={classes.container}>
                    <LeftSidebar/>
                    <div className={classes.content}>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                    <RightSidebar/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default PageContent;