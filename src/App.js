import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import EditForm from "./components/EditForm";
import TaskList from './components/TaskList';
import useLocalStorage from "./hooks/useLocalStorage";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
    const [tasks, setTasks] = useLocalStorage("Todo-tasks", []);
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [previousFocus, setPreviousFocus] = useState(null);

    const addTask = (task) => {
        setTasks(prevState => [...prevState, task]);
    }

    const deleteTask = (id) => {
        setTasks(prevState => prevState.filter(task => task.id !== id))
    }

    const toggleTask = (id) => {
        setTasks(prevState => prevState.map((task) => task.id === id ? {...task, checked: !task.checked} : task))
    }

    const updateTask = (task) => {
        setTasks(prevState => prevState.map((t) => t.id === task.id ? {...t, name: task.name} : t))
        
        closeEditMode();
    }

    const closeEditMode = () => {
        setIsEditing(false);
        previousFocus.focus();
    }

    const enterEditMode = (task) => {
        setEditedTask(task);
        setIsEditing(true);
        setPreviousFocus(document.activeElement);
    }

    return (
        <div className="container">
            <header>
                <h1>TODO List</h1>
            </header>
            { isEditing && < EditForm editedTask={editedTask} updateTask={updateTask} closeEditMode={closeEditMode}/>}
            < Form addTask={addTask} />
            {tasks && < TaskList tasks= {tasks} deleteTask={deleteTask} toggleTask={toggleTask} enterEditMode={enterEditMode}/>}

            < ThemeSwitcher />
        </div>
    )
}
export default App;