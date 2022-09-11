import React from 'react'
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, removeTask }) => { // ou ({ tasks })
    return (
        <>
            {tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick} removeTask={removeTask}/>)}
        </>
    )
};

export default Tasks;