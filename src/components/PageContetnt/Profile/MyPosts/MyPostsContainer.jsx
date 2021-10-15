import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
// const MyPostsContainer = (props) => {
//
//     return  <StoreContext.Consumer>
//             { store => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostCreator());
//                 }
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextCreator(text);
//                     store.dispatch(action);
//                 }
//                 return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                                 posts={state.profilePage.posts}
//                                 newPostText={state.profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;