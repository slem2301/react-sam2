import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import PageContent from "./components/PageContetnt/Page-content";


const App = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <PageContent posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>
        </div>
    );
}

export default App;
