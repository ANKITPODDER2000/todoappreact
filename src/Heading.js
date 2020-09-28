import React, { Component } from "react";
import "./Heading.css";

class Heading extends Component{
    render() {
        return (
            <div className="heading">
                <h1>Todo List<b> !</b></h1>
                <p>A simple React Todo List App.</p>
                <hr/>
            </div>
        );
    }
}

export default Heading;