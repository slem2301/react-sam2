import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    //массив для хранения и вызова данных
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: '23 likes'},
                {id: 2, message: 'How are you?', likes: '18 likes'},
            ],
            newPostText: 'it-kamasutra',
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Линда Лохан',
                    mess: 'Привет, как ты',
                    time: 'минуту назад',
                    messCol: '1',
                    imgSrc: 'https://themified.com/friend-finder/images/users/user-2.jpg'
                },
                {
                    id: 2,
                    name: 'Джулия Кокс',
                    mess: 'Скоро увидимся',
                    time: '13 минут назад',
                    messCol: '0',
                    imgSrc: 'https://themified.com/friend-finder/images/users/user-10.jpg'
                },
                {
                    id: 3,
                    name: 'София Ли',
                    mess: 'В порядке Хорошо. Спасибо',
                    time: 'час назад',
                    messCol: '0',
                    imgSrc: 'https://themified.com/friend-finder/images/users/user-3.jpg'
                },
                {
                    id: 4,
                    name: 'Джон Доу',
                    mess: 'привет кто-нибудь есть',
                    time: 'день назад',
                    messCol: '1',
                    imgSrc: 'https://themified.com/friend-finder/images/users/user-4.jpg'
                },
                {
                    id: 5,
                    name: 'Анна Янг',
                    mess: 'мне нужно идти',
                    time: '2 дня назад',
                    messCol: '0',
                    imgSrc: 'https://themified.com/friend-finder/images/users/user-5.jpg'
                },
                {
                    id: 6,
                    name: 'Ричард Белл',
                    mess: 'Привет?',
                    time: '2 дня назад',
                    messCol: '1',
                    imgSrc: 'https://themified.com/friend-finder/images/users/user-6.jpg'
                },
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Cool'},
            ],
            newMessageText: ''
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


// export const subscribe = (observer) => {
//     this._callSubscriber = observer; //наблюдатель
// }

export default store;

window.state = store;