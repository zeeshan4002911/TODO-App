import React, { useState } from "react";
import styles from "../styles/TaskItem.module.css";

const TaskItem = ({task, deleteTask, toggleTask, enterEditMode}) => {
    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckbox = (e) => {
        setIsChecked(!isChecked);
        toggleTask(task.id)
    }

    return (
        <li className={styles.task}>
            <div className={styles["task-group"]}>
                <input type="checkbox" checked={task.checked} className={styles.checkbox} name={task.name} id={task.id} value={isChecked} onChange={handleCheckbox} />
                <label htmlFor={task.id} className={styles.label}>
                    {task.name}
                </label>
            </div>
            <div className={styles["task-group"]}>
                <button className="btn" aria-label={`Update ${task.name} Task`} onClick={() => enterEditMode(task)}>EDIT</button>
                <button className={`btn ${styles.delete}`} aria-label={`Delete ${task.name} Task`} onClick={() => deleteTask(task.id)} >DELETE</button>
            </div>
        </li>
    )
}

export default TaskItem;