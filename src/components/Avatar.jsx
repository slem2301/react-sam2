import React from "react";
import classes from "./Avatar.module.css"

const Avatar = () => {
    return (
        <div className={classes.profile_card}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user" className={classes.profile_photo}/>
                <h5><a href="timeline.html">Sarah Cruiz</a></h5>
                <a href="#"><i></i> 1,299 followers</a>
        </div>
    )
}
export default Avatar;