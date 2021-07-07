import './App.css';
import React from "react";
import Header from "./components/Header";
import PageContent from "./components/Page-content";

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <PageContent/>
        </div>
    );
}

export default App;
