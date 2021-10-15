import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import PageContent from "./components/PageContetnt/Page-content";


const App = (props) => {

    return (
            <div className={'app-wrapper'}>
                <Header/>
                <PageContent/>
            </div>
    );
}

export default App;
