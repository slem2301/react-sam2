import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} key={d.id} mess={d.mess} time={d.time} messCol={d.messCol} imgSrc={d.imgSrc}/> );
    let messagesElements = state.messages.map( m =>  <Message message={m.message} key={m.id}/> );
    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        //let text = newMessageElement.current.value;
        props.updateNewMessageText(body);

    }

    return (
        <div className={classes.dialog_room}>
            <div className={classes.dialogs_list}>
                <div className={classes.scrollbar_wrapper}>

                    {dialogsElements}

                </div>
            </div>
            <div className={classes.messages_col}>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <div className="send-message">
                    <div className="input-group">
                        <textarea onChange={onMessageChange} value={newMessageText}/>
                        <button className="btn btn-default" onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;