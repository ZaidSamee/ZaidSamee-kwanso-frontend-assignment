import PropTypes from "prop-types";
import { useState } from "react";
import Card from "../card/card";
import styles from "./deleteTasks.module.scss";

const DeleteTasks = ({ taskList, deleteTaskAction, taskListRouter }) => {

    const [checkedState, setCheckedState] = useState(taskList);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => {
            if (index === position) {
                item.checked = !item.checked;
            }
            return item
        }
        );
        setCheckedState(updatedCheckedState);
    };

    const submitHandler = () => {
        deleteTaskAction(checkedState);
    };
    return (
        <div className={styles["deleteTasks"]}>
            <Card minWidth="500px">
                <h2>Delete Task</h2>
                <div className={styles["deleteTasks_content"]}>
                    {checkedState.map(({ name, checked }, index) => {
                        return (
                            <Card key={index}>
                                <div className={styles["deleteTasks_list-item"]}>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checked}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            </Card>
                        );
                    })}

                </div>
                {taskList.length > 0 && <button className={styles["deleteTasks_action"]} onClick={submitHandler}>Delete</button>}
                <button className={styles["deleteTasks_action"]} onClick={taskListRouter}>Go to Task List</button>

            </Card>
        </div >
    )
};
DeleteTasks.propTypes = {
    taskList: PropTypes.array,
    deleteTaskAction: PropTypes.func,
    taskListRouter: PropTypes.func,
};
export default DeleteTasks;