import PropTypes from "prop-types";
import Card from "../card/card";
import styles from "./tasksList.module.scss";

const TasksList = ({ taskList, createTask, bulkDelete }) => {

    return (
        <div className={styles["tasksList"]}>
            <h2>Task List</h2>

            <div className={styles["tasksList_content"]}>
                <div className={styles["tasksList_header"]} >
                    <button className={styles["tasksList_action"]} onClick={createTask}>Create Task</button>
                    <button className={styles["tasksList_action"]} onClick={bulkDelete}>Delete Task</button>
                </div>
                {taskList.length > 0 && Object.keys(taskList).map((item, index) =>
                    <Card key={index} title={taskList[item].name} details={taskList[item].details}></Card>
                )}
                {taskList.length === 0 && <h2>No Record found</h2>}
            </div>

        </div >
    )
};
TasksList.propTypes = {
    taskList: PropTypes.array,
    createTask: PropTypes.func,
    bulkDelete: PropTypes.func,
};
export default TasksList;