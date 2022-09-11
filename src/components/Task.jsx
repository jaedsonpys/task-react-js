import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'

import './Task.css'

const Task = ({ task, handleTaskClick, removeTask}) => {
    return (
        <div
            style={task.completed ? {borderLeft: 'solid 6px chartreuse', textDecoration: 'line-through'} : {}}
            className='task-container'
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="task-buttons">
                <button className="remove-task" onClick={() => removeTask(task.id)}>
                    <CgClose/>
                </button>
                <button className="details-task" onClick={() => removeTask(task.id)}>
                    <CgInfo/>
                </button>
            </div>
        </div>
    )
}

export default Task;