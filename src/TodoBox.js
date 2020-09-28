import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import Heading from "./Heading";
import AddTodoItem from "./AddTodoItem";
import { v4 as uuidv4 } from 'uuid';

class TodoBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {task : 'Read Compiler design' , done : false ,neededit :false ,id:uuidv4() }
            ]
            
        }
        this.addTodo     = this.addTodo.bind(this);
        this.deleteTodo  = this.deleteTodo.bind(this);
        this.swapDone    = this.swapDone.bind(this);
        this.neededit    = this.neededit.bind(this);
        this.changeTask  = this.changeTask.bind(this);
    }
    addTodo(todo) {
        this.setState({
            items: [...this.state.items , todo]
        })
    }
    swapDone(id) {
        this.setState({
            items: this.state.items.map(a => {
                if (a.id === id)
                    return {...a , done : !a.done};
                return a;
            })
        })
    }
    deleteTodo(id) {
        this.setState({
            items: this.state.items.filter(a => a.id !== id)
        });
    }
    neededit(id) {
        this.setState({
            items: this.state.items.map(a => {
                if (a.id === id)
                    return { ...a, neededit: true };
                return { ...a, neededit: false };
            })
        })
    }
    changeTask(id , task) {
        console.log(id)
        this.setState({
            items: this.state.items.map(a => {
                if (a.id === id)
                    return { ...a, task : task , neededit : false }
                return a;
            })
        })
    }
    render() {
        return (
            <div style={{paddingBottom:"40px"}} className="todobox" key={uuidv4()}>
                <Heading />
                {this.state.items.map(task =>
                    <TodoItem
                        key={task.id}
                        prop={task}
                        deleteTodo={this.deleteTodo}
                        swapDone={this.swapDone}
                        neededit={this.neededit}
                        changeTask = {this.changeTask}
                    />)
                }
                <AddTodoItem
                    addTodo={this.addTodo}
                />
            </div>
        )
    }
}

export default TodoBox;