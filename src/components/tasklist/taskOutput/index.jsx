import React, { useEffect, useState } from "react";
import {
  getAllTasks,
  deleteTask,
  checkTask,
  editTask,
  modifyTask,
} from "../../../services/tasks";

function TaskOutput() {
  const [taskList, setTaskList] = useState([]);
  const [newTaskVal, setNewTaskVal] = useState("");

  useEffect(() => {
    getAllTasks()
      .then((res) => {
        setTaskList(res?.data);
      })
      .catch((err) => console.log("error in getting tasks : ", err));
  }, []);

  function deleteBtnHandler(id) {
    deleteTask(id);
  }

  function cbHandler(id) {
    checkTask(id);
  }

  function editBtnHandler(id) {
    editTask(id);
  }

  function newTaskInputHandler(e) {
    setNewTaskVal(e.target.value);
  }

  function modifyBtnHandler(id) {
    modifyTask(id, newTaskVal);
  }

  return (
    <div>
      {taskList?.map((task) =>
        task.isChecked ? (
          <div
            key={task.id}
            style={{ color: "green", textDecoration: "line-through" }}
          >
            <input
              type="checkbox"
              value={task.isChecked}
              onChange={cbHandler.bind(this, task.id)}
            />
            <span>{task?.task}</span>
            <button onClick={deleteBtnHandler.bind(this, task.id)}>
              Delete
            </button>
          </div>
        ) : task.isEditable ? (
          <div key={task.id}>
            <input placeholder={task.task} onChange={newTaskInputHandler} />
            <button onClick={modifyBtnHandler.bind(this, task.id)}>
              Modify
            </button>
            <button onClick={deleteBtnHandler.bind(this, task.id)}>
              Delete
            </button>
          </div>
        ) : (
          <div key={task.id}>
            <input
              type="checkbox"
              value={task.isChecked}
              onChange={cbHandler.bind(this, task.id)}
            />
            <span>{task?.task}</span>
            <button onClick={editBtnHandler.bind(this, task.id)}>Edit</button>
            <button onClick={deleteBtnHandler.bind(this, task.id)}>
              Delete
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default TaskOutput;
