import { useState } from "react";
import classes from "./options.module.css";

export function Options({ onDelete, onTitleChange }) {
  const [inputValue, setInputValue] = useState("");

  function handleTitleChange(value) {
    onTitleChange(value);
  }

  function handleDelete() {
    onDelete();
  }

  return (
    <div className={classes.wrapper}>
      <div>
        Change title:{" "}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
      <div className={classes.buttonsWrapper}>
        <button onClick={handleDelete} className={classes.deleteButton}>
          Delete
        </button>
        <button
          onClick={() => handleTitleChange(inputValue)}
          className={classes.infoButton}
        >
          Change
        </button>
      </div>
    </div>
  );
}
