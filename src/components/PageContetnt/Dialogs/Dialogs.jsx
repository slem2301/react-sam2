import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} mess={d.mess} time={d.time} messCol={d.messCol} imgSrc={d.imgSrc}/> );
    let messagesElements = props.state.messages.map( m =>  <Message message={m.message}/> );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                        <textarea ref={newMessageElement}></textarea>
                        <button className="btn btn-default" onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;