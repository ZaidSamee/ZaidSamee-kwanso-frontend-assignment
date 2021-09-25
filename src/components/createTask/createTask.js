import PropTypes from "prop-types";
import { useState } from "react";
import Card from "../card/card";
import styles from "./createTask.module.scss";

const CreateTaskForm = ({ id, action, taskListRouter }) => {
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        details: "",
        id: id
    });

    const showMessage = (field) => {
        setError(field);
        setTimeout(() => {
            setError(null);
        }, 5000);
    }
    const changeInputHandler = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const submitHandler = () => {
        if (!formData.name) {
            showMessage("Name field is required");
            return
        } else if (!formData.details) {
            showMessage("Detail field is required");
            return
        } else {
            action(formData);
        }
    }

    return (
        <div className={styles["createTask"]}>
            <Card>
                <h2>Create Task</h2>
                <div className={styles["createTask_content"]}>
                    {error && <div className={styles["createTask_error"]}>{error} </div>}
                    <input className={styles["createTask_input-field"]} type="text" placeholder="Task Name" name="name" value={formData.name} onChange={changeInputHandler} />
                    <textarea className={styles["createTask_input-field"]} type="text" row="7" placeholder="Task details" name="details" value={formData.details} onChange={changeInputHandler} />
                    <button className={styles["createTask_action"]} onClick={submitHandler}>Add</button>
                    <button className={styles["createTask_action"]} onClick={taskListRouter}>Go to Task List</button>
                </div>
            </Card>
        </div>
    )
};
CreateTaskForm.propTypes = {
    id: PropTypes.number,
    action: PropTypes.func,
    taskListRouter: PropTypes.func
};
export default CreateTaskForm;