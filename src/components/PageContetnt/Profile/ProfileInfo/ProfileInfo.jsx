import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return(
        <div>
            <div className={classes.topImgProfile}>
                <img src="https://img.wallpapersafari.com/desktop/1440/900/65/34/Pnc1Je.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;