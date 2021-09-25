import CreateTaskForm from "../components/createTask/createTask";

import { useHistory } from "react-router-dom";

const CreateTask = () => {
  const history = useHistory();
  const id = JSON.parse(localStorage.getItem("id"))
  const taskList = JSON.parse(localStorage.getItem("taskList"))
  
  const taskListRouter = () => {
    history.push(`/list-tasks`);
  };

  const createTaskAction = (formData) => {
    let x = taskList;
    x.push(formData);
    localStorage.setItem("taskList", JSON.stringify(x));
    taskListRouter();
  };
  return (
    <CreateTaskForm id={id} action={createTaskAction} taskListRouter={taskListRouter} />
  )
};

export default CreateTask;
