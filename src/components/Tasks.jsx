import React from 'react'
import Task from './Task';

const Tasks = (props) => { // ou ({ tasks })
    console.log(props);
    console.log(props.tasks)

    return (
        <>
            {props.tasks.map(task => <Task task={task} handleTaskClick={props.handleTaskClick}/>)}
        </>
    )
};

export default Tasks;