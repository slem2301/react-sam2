import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map( p =>  <Post message = {p.message} likes={p.likes}/> );

    return (
        <div>
            My posts
            <div>
                <textarea name=""></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
    )
}
export default MyPosts;