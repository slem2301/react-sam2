import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={classes.content}>
            <div>
                <img src="https://img.wallpapersafari.com/desktop/1440/900/65/34/Pnc1Je.jpg" alt=""/>
            </div>
            <div>
                ava+description
                <MyPosts />
            </div>
        </div>
    )
}
export default Profile;