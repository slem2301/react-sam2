import React from 'react';
import LeftSidebar from "./LeftSidebar/Left-sidebar";
import Profile from "./Profile/Profile";
import RightSidebar from "./Right sidebar/Right-sidebar";
import classes from "./Page-content.module.css";
import Dialogs from "./Dialogs/Dialogs";
import {  Route } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/Message/DialogsContainer";


const PageContent = (props) => {
    return (
            <div className={classes.page_content}>
                <div className={classes.container}>
                    <LeftSidebar/>
                    <div className={classes.content}>
                        {/*<Route path='/profile' component={Profile}/>*/}
                        {/*<Route path='/dialogs' component={Dialogs}/>*/}
                        {/*<Route path='/news' component={News}/>*/}
                        {/*<Route path='/music' component={Music}/>*/}
                        {/*<Route path='/settings' component={Settings}/>*/}

                        <Route path='/profile' render={ () => <Profile/> }/>
                        <Route path='/dialogs' render={ () => <DialogsContainer/> }/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                    <RightSidebar/>
                </div>
            </div>
    )
}
export default PageContent;