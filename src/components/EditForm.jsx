import React, { useState, useEffect } from "react";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
    const [updateTaskName, setUpdateTaskName] = useState(editedTask.name);
    
    useEffect(() => {
        const escapeEditMode = (e) => {
            e.key === "Escape" && closeEditMode();
        }
        window.addEventListener("keydown", escapeEditMode)

        return () => {
            window.removeEventListener("keydown", escapeEditMode)
        }
    }, [closeEditMode]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updateTaskName});
        
    }
    return (
        <div role="dialog" aria-labelledby="editTask" onClick={(e) => e.target === e.currentTarget && closeEditMode()}>
            <form className="todo" onSubmit={handleSubmit}>
                <div className="wrapper">
                    <input type="text" name="input" id="editTask" className="input" value={updateTaskName} onInput={(e) => setUpdateTaskName(e.target.value)} required autoFocus maxLength={60} placeholder="Update Task" />
                    <label htmlFor="editTask" className="label">Enter Task</label>
                </div>
                <button className="btn" aria-label="Add Task" type="submit">ADD</button>
            </form>
        </div>
    )
}

export default EditForm;