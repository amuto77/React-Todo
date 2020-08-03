import React from "react"

const Task = props => {
    return (
        <div 
            onClick={() => props.toggleTask(props.tasks.id)}
            className={`task${props.tasks.completed ? "completed" : ""}`}
        >
            <p>{props.tasks.name}</p>
      </div>
    )
}

export default Task;