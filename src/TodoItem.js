import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            task : this.props.prop.task
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSwap   = this.handleSwap.bind(this);
        this.edit         = this.edit.bind(this);
        this.delete       = this.delete.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.changeTask(this.props.prop.id , this.state.task);
    }
    handleChange(evt) {
        this.setState({
            task: evt.target.value
        });
    }
    edit() {
        this.props.neededit(this.props.prop.id);
    }
    delete() {
        this.props.deleteTodo(this.props.prop.id);
    }
    handleSwap() {
        this.props.swapDone(this.props.prop.id);
    }
    render() {
        return (
            <div className="todoitem">
                {this.props.prop.neededit
                    ? 
                    <div className="innertodoitem">
                        <form onSubmit={this.handleSubmit}>
                            <input
                                name="task"
                                id="task"
                                value={this.state.task}
                                onChange = {this.handleChange}
                            />
                            <button>
                                <i className="far fa-edit"></i>
                            </button>
                        </form>
                    </div>
                    :
                    <div className="innertodoitem">
                        {
                            this.props.prop.done ?
                                <p className="done" onClick={this.handleSwap}>{this.props.prop.task}</p> :
                                <p onClick={this.handleSwap}>{this.props.prop.task}</p>
                        }
                        <i className="fas fa-pen" onClick={this.edit}></i>
                        <i className="fas fa-trash-alt" onClick={this.delete}></i>
                    </div>
                }
                
                
            </div>
        )
    }
}

export default TodoItem;