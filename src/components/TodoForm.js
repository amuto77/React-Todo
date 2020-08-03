import React from "react";

class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskText: ""
        };
    };
    
    handleChanges = e => {
        this.setState({
            taskText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskText);
        this.setState({
            taskText: ""
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="task"
                value={this.state.taskText}
                onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
} export default ListForm