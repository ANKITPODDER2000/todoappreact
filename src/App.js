import React, { Component } from 'react';
// import component
import TodoBox from "./TodoBox";
// import css
import './App.css';

class App extends Component{
    render() {
        return (
            <div className="app">
                <TodoBox />
            </div>
        )
    }
}

export default App;
