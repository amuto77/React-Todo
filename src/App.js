import React from 'react';

import TaskList from "./components/TodoList"

import ListForm from "./components/TodoForm"

import './components/Todo.css'

const tasks = [

  {
    name: 'Make Bed',
    id: 123,
    completed: false
  },
  
  {
    name: 'Make Coffee',
    id: 124,
    completed: false
  },

  {
    name: 'Eat Breakfast',
    id: 1235,
    completed: false

  },


  {
      name: 'Prepare for Lecture',
      id: 1246,
      completed: false
  },

  {
      name: 'Survive Lecture',
      id: 1237,
      completed: false
  },

  {
      name: 'Complete Assignment',
      id: 1248,
      completed: false

  }


];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
      super();
      this.state = {
        tasks: tasks,
      };
  }
  toggleTask = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }



  clearTask = className => {
    this.setState({
      tasks: this.state.tasks.filter(completedtask =>{
        if(completedtask.className === "completed") {
          return {
            name: "",
            id: "",
            completed: true
          }
        }
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 onClick={() => this.setState({})}>Welcome to your Todo App!</h1>
          <ListForm addTask={this.addTask} />
        </div>
        <TaskList
          toggleTask={this.toggleTask}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
