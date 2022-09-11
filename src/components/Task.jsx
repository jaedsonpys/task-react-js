import React from 'react';
import './Task.css'

const Task = (props) => {
    return (
        <div onClick={() => props.handleTaskClick(props.task.id)}
            style={props.task.completed ? {borderLeft: 'solid 6px chartreuse', textDecoration: 'line-through'} : {}}
            className='task-container'
        >
            {props.task.title}
        </div>
    )
}

export default Task;