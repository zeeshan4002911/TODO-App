import React, { useState } from "react";

const Form = ({ addTask }) => {
    const [task, setTask] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        });
        setTask("");
    }
    return (
        <form className="todo" onSubmit={handleSubmit}>
            <div className="wrapper">
                <input type="text" name="input" id="task" className="input" value={task} onInput={(e) => setTask(e.target.value)} required autoFocus maxLength={60} placeholder="Enter Task" />
                <label htmlFor="task" className="label">Enter Task</label>
            </div>
            <button className="btn" aria-label="Add Task" type="submit">ADD</button>
        </form>
    )
}

export default Form;