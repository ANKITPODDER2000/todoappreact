import React, { Component } from "react";
import "./AddTodoItem.css";
import { v4 as uuidv4 } from 'uuid';

class AddTodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            task : evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        let todo = {
            task: this.state.task,
            done: false,
            id: uuidv4(),
            neededit: false 
        }
        this.setState({ task: "" });
        this.props.addTodo(todo);
    }
    render() {
        return (
            <form className="addItem" onSubmit={this.handleSubmit}>
                <input
                    placeholder="Add New Todo!"
                    name="task"
                    className="inputfield"
                    id="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button disabled={this.state.task.length===0}>
                    <i className="far fa-edit"></i>
                </button>
            </form>
        )
    }
}

export default AddTodoItem;
