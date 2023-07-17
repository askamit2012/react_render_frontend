import axios from "axios";

let apiUrl = "https://react-render-backend.onrender.com/";

const getAllTasks = () => {
  return axios.get(apiUrl + "tasks");
};

const addTask = (taskVal) => {
  return axios.post(apiUrl + "tasks", {
    task: taskVal,
  });
};

const deleteTask = (id) => {
  return axios.delete(apiUrl + `tasks/${id}`);
};

const checkTask = (id) => {
  return axios.put(apiUrl + "tasks", {
    type: "check",
    id: id,
  });
};

const editTask = (id) => {
  return axios.put(apiUrl + "tasks", {
    type: "edit",
    id: id,
  });
};

const modifyTask = (id, task) => {
  return axios.put(apiUrl + "tasks", {
    id,
    task,
  });
};

export { getAllTasks, addTask, deleteTask, checkTask, editTask, modifyTask };
