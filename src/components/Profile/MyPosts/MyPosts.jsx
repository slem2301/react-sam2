import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name=""></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message = 'Hi, how are you?' likes='23 likes'/>
                <Post message = "It's my first post" likes='18 likes'/>
            </div>
        </div>
    )
}
export default MyPosts;