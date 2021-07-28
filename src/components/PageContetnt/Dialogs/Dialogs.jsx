import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName='active'>
                <div className="contact">
                    <img src={props.imgSrc} alt=""
                         className={`${classes.profile_photo_sm} ${classes.pull_left}`}/>
                    <div className={classes.msg_preview}>
                        <h6>{props.name}</h6>
                        <p>{props.mess}</p>
                        <small>{props.time}</small>
                        <div className={classes.chat_alert}>{props.messCol}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}


const Message = (props) =>{
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
//массив для хранения и вызова данных
    let dialogsData = [
        {id: 1, name: 'Линда Лохан', mess: 'Привет, как ты', time: 'минуту назад', messCol: '1', imgSrc: 'https://themified.com/friend-finder/images/users/user-2.jpg'},
        {id: 2, name: 'Джулия Кокс', mess: 'Скоро увидимся', time: '13 минут назад', messCol: '0', imgSrc: 'https://themified.com/friend-finder/images/users/user-10.jpg'},
        {id: 3, name: 'София Ли', mess: 'В порядке Хорошо. Спасибо', time: 'час назад', messCol: '0', imgSrc: 'https://themified.com/friend-finder/images/users/user-3.jpg'},
        {id: 4, name: 'Джон Доу', mess: 'привет кто-нибудь есть', time: 'день назад', messCol: '1', imgSrc: 'https://themified.com/friend-finder/images/users/user-4.jpg'},
        {id: 5, name: 'Анна Янг', mess: 'мне нужно идти', time: '2 дня назад', messCol: '0', imgSrc: 'https://themified.com/friend-finder/images/users/user-5.jpg'},
        {id: 6, name: 'Ричард Белл', mess: 'Привет?', time: '2 дня назад', messCol: '1', imgSrc: 'https://themified.com/friend-finder/images/users/user-6.jpg'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 2, message: 'Cool'},
    ];

    return (
        <div className={classes.dialog_room}>
            <div className={classes.dialogs_list}>
                <div className={classes.scrollbar_wrapper}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} mess={dialogsData[0].mess} time={dialogsData[0].time} messCol={dialogsData[0].messCol} imgSrc={dialogsData[0].imgSrc}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} mess={dialogsData[1].mess} time={dialogsData[1].time} messCol={dialogsData[1].messCol} imgSrc={dialogsData[1].imgSrc}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} mess={dialogsData[2].mess} time={dialogsData[2].time} messCol={dialogsData[2].messCol} imgSrc={dialogsData[2].imgSrc}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} mess={dialogsData[3].mess} time={dialogsData[3].time} messCol={dialogsData[3].messCol} imgSrc={dialogsData[3].imgSrc}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} mess={dialogsData[4].mess} time={dialogsData[4].time} messCol={dialogsData[4].messCol} imgSrc={dialogsData[4].imgSrc}/>
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} mess={dialogsData[5].mess} time={dialogsData[5].time} messCol={dialogsData[5].messCol} imgSrc={dialogsData[5].imgSrc}/>
                </div>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}
export default Dialogs;