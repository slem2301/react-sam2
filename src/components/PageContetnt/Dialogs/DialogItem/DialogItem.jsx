import React from 'react';
import classes from "./../Dialogs.module.css";
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

export default DialogItem;