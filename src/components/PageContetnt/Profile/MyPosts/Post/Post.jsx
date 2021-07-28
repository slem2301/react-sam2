import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/600x380" alt=""/>
            {props.message}
            <div className={classes.col_likes}>
                {props.likes}
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;