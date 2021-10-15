import React from 'react';
import Dialogs from "../Dialogs";
import {addMessageCreator, updateNewMessageCreator} from "../../../../redux/dialogs-reducer";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//
//
//     return <StoreContext.Consumer>
//         { store => {
//                 let state = store.getState().dialogsPage;
//                 let onSendMessage = () => {
//                     store.dispatch(addMessageCreator());
//                 }
//                 let onMessageChange = (body) => {
//                     store.dispatch(updateNewMessageCreator(body));
//                 }
//                 return <Dialogs updateNewMessageText={onMessageChange} sendMessage={onSendMessage}
//                                 dialogsPage={state}/>
//             }
//         }
//         </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageCreator(body));
        },
        sendMessage: () => {
            dispatch(addMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;