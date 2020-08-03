import React from 'react';

import Task from './Todo'

const TaskList = props => {
    return (
        <div className="task-list">
        {props.tasks.map(tasks => (
        <Task key={tasks.id} tasks={tasks} toggleTask={props.toggleTask} />
      ))}
      <button className="clear-btn" onClick={props.clearTask}>
        Clear Task
      </button>
    </div>
    )
}

export default TaskList