import React from "react";
import "./Avatar.css"

const Avatar = () => {
    return (
        <div className="profile-card">
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user" className="profile-photo"/>
                <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
                <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
        </div>
    )
}
export default Avatar;