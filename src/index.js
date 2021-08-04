import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//массив для хранения и вызова данных
let dialogs = [
    {id: 1, name: 'Линда Лохан', mess: 'Привет, как ты', time: 'минуту назад', messCol: '1', imgSrc: 'https://themified.com/friend-finder/images/users/user-2.jpg'},
    {id: 2, name: 'Джулия Кокс', mess: 'Скоро увидимся', time: '13 минут назад', messCol: '0', imgSrc: 'https://themified.com/friend-finder/images/users/user-10.jpg'},
    {id: 3, name: 'София Ли', mess: 'В порядке Хорошо. Спасибо', time: 'час назад', messCol: '0', imgSrc: 'https://themified.com/friend-finder/images/users/user-3.jpg'},
    {id: 4, name: 'Джон Доу', mess: 'привет кто-нибудь есть', time: 'день назад', messCol: '1', imgSrc: 'https://themified.com/friend-finder/images/users/user-4.jpg'},
    {id: 5, name: 'Анна Янг', mess: 'мне нужно идти', time: '2 дня назад', messCol: '0', imgSrc: 'https://themified.com/friend-finder/images/users/user-5.jpg'},
    {id: 6, name: 'Ричард Белл', mess: 'Привет?', time: '2 дня назад', messCol: '1', imgSrc: 'https://themified.com/friend-finder/images/users/user-6.jpg'},
];
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 2, message: 'Cool'},
];

let posts = [
    {id: 1, message: 'Hi, how are you?', likes: '23 likes'},
    {id: 2, message: 'How are you?', likes: '18 likes'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
