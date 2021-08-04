//массив для хранения и вызова данных
let state = {
    profilePage: {
        posts : [
            {id: 1, message: 'Hi, how are you?', likes: '23 likes'},
            {id: 2, message: 'How are you?', likes: '18 likes'},
        ]
    },
    dialogsPage: {
        dialogs : [
            {id: 1, name: 'Линда Лохан', mess: 'Привет, как ты', time: 'минуту назад', messCol: '1', imgSrc: 'https://themified.com/friend-finder/images/users/user-2.jpg'},
            {id: 2, name: 'Джулия Кокс', mess: 'Скоро увидимся', time: '13 минут назад', messCol: '0', imgSrc: 'https://themified.com/friend-finder/images/users/user-10.jpg'},
            {id: 3, name: 'София Ли', mess: 'В порядке Хорошо. Спасибо', time: 'час назад', messCol: '0', imgSrc: 'https://themified.com/friend-finder/images/users/user-3.jpg'},
            {id: 4, name: 'Джон Доу', mess: 'привет кто-нибудь есть', time: 'день назад', messCol: '1', imgSrc: 'https://themified.com/friend-finder/images/users/user-4.jpg'},
            {id: 5, name: 'Анна Янг', mess: 'мне нужно идти', time: '2 дня назад', messCol: '0', imgSrc: 'https://themified.com/friend-finder/images/users/user-5.jpg'},
            {id: 6, name: 'Ричард Белл', mess: 'Привет?', time: '2 дня назад', messCol: '1', imgSrc: 'https://themified.com/friend-finder/images/users/user-6.jpg'},
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 2, message: 'Cool'},
        ]
    },
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likes: '0 likes'
    };
    state.profilePage.posts.push(newPost);
}

export default state;