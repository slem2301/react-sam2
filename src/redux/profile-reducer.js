const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: '23 likes'},
        {id: 2, message: 'How are you?', likes: '18 likes'},
    ],
    newPostText: 'it-kamasutra',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: '0 likes'
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }; //создаем копию объекта
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;