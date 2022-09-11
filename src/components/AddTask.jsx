import React, { useState } from 'react';
import Button from './Button'

import './AddTask.css'

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        setInputData(inputValue);
    }

    const handleTaskAdd = () => {
        if(inputData !== '') {
            handleTaskAddition(inputData);
            setInputData('');
        }
    }

    return (
        <div className='add-task-container'>
            <input onChange={handleInputChange} placeholder='Adicionar tarefa'
                value={inputData} type="text" className='add-task-input'
            />
            <Button onClick={handleTaskAdd}/>
        </div>
    )
};

export default AddTask;