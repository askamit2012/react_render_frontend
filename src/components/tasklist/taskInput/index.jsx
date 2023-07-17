import React, { useState, useEffect, useRef } from "react";
import { addTask } from "../../../services/tasks";

function TaskInput() {
  const [taskVal, setTaskVal] = useState("");
  const taskInputRef = useRef();

  useEffect(() => {
    taskInputRef.current.focus();
  }, []);

  function inputChangeHandler(e) {
    setTaskVal(e.target.value);
  }

  function addTaskBtnHandler() {
    addTask(taskVal);
    setTaskVal("");
    taskInputRef.current.focus();
  }
  return (
    <div>
      <input ref={taskInputRef} onChange={inputChangeHandler} value={taskVal} />
      <button onClick={addTaskBtnHandler}>Add Task</button>
    </div>
  );
}

export default TaskInput;
