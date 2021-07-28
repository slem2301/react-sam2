import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likes: '23 likes'},
        {id: 2, message: 'How are you?', likes: '18 likes'},
    ];

    return (
        <div>
            My posts
            <div>
                <textarea name=""></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message = {postData[0].message} likes={postData[0].likes}/>
                <Post message = {postData[1].message} likes={postData[1].likes}/>
            </div>
        </div>
    )
}
export default MyPosts;