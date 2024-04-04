import React, { useState } from "react";

function CreateArea(props) {
  const [task, setTask] = useState("");

  function submitTask(event) {
    props.onAdd(task);
    setTask("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task"
        />
        
        <button onClick={submitTask}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
