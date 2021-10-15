import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map( p =>  <Post message = {p.message} likes={p.likes} key={p.id}/> );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
    )
}
export default MyPosts;