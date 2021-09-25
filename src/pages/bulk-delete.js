import { useHistory } from "react-router-dom";
import DeleteTasks from "../components/deleteTasks/deleteTasks";

const BulkDelete = () => {
  const history = useHistory();
  const taskList = JSON.parse(localStorage.getItem("taskList"));

  const taskListRouter = () => {
    history.push(`/list-tasks`);
  };

  const deleteTaskAction = (formData) => {
    let latest = [];
    formData.forEach(task => {
      if (task.checked !== true) {
        latest.push(task);
      }
    });
    localStorage.setItem("taskList", JSON.stringify(latest));
    taskListRouter();
  };
  return (
    <DeleteTasks taskList={taskList} deleteTaskAction={deleteTaskAction} taskListRouter={taskListRouter} />
  )
};

export default BulkDelete;
