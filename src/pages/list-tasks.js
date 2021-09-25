import { useHistory } from "react-router-dom";
import TasksList from "../components/tasksList/tasksList";

const ListTasks = () => {
  const history = useHistory();
  const taskList = JSON.parse(localStorage.getItem("taskList"));

  const createTask = () => {
    history.push(`/create-task`);
  };

  const bulkDelete = () => {
    history.push(`/bulk-delete`);
  };

  return (
    <TasksList taskList={taskList} createTask={createTask} bulkDelete={bulkDelete} />
  )
};

export default ListTasks;
