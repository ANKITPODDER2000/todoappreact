import React, { Component } from 'react';
import TodoBox from "./TodoBox";
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
