import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'

import './App.css'

const App = () => {
	// STATES, quando alterados, recarregam
	// o componente onde a variável está.

	// let message = 'Hello world!';

	const [tasks, setTasks] = useState([]);

	const handleTaskAddition = (taskTitle) => {
		const newTask = [...tasks, {
			title: taskTitle,
			completed: false,
			id: uuidv4()
		}]

		setTasks(newTask);
	};

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if(task.id === taskId) {
				return {...task, completed: !task.completed}
			}

			return task;
		})

		setTasks(newTasks);
	}

	const removeTask = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId)

		setTasks(newTasks);
	}

	return(
		<div className='container'>
			<div className="header">
					<h1>Tarefas</h1>
			</div>

			<AddTasks handleTaskAddition={handleTaskAddition}/>
			<Tasks tasks={tasks} handleTaskClick={handleTaskClick} removeTask={removeTask}/> {/* importando componente e passando props */}
		</div>
	)
};

// sempre exportar o App
export default App;