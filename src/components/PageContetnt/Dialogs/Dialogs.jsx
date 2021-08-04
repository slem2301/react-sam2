import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} mess={d.mess} time={d.time} messCol={d.messCol} imgSrc={d.imgSrc}/> );
    let messagesElements = props.messages.map( m =>  <Message message={m.message}/> );

    return (
        <div className={classes.dialog_room}>
            <div className={classes.dialogs_list}>
                <div className={classes.scrollbar_wrapper}>

                    {dialogsElements}

                </div>
            </div>
            <div className={classes.messages}>

                {messagesElements}

            </div>
        </div>
    )
}
export default Dialogs;