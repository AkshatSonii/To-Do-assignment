import React, {useState} from "react";

function Note(props) {

   const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">

      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span style={{ fontSize: "12px" }}>Mark as Done</span>
      </label>
      <h1 style={{ textDecoration: checked ? "line-through" : "none", marginTop: "10px" }}>
        {props.title}
      </h1>

      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
