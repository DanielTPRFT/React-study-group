import { useState } from "react";
import classes from "./options.module.css";
import { forwardRef } from "react";
import { useRef } from "react";
import { useImperativeHandle } from "react";

export const Options = forwardRef(function Options(
  { onDelete, onTitleChange, products },
  ref
) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
    };
  });

  function handleTitleChange(value, products) {
    onTitleChange(value, products);
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
          ref={inputRef}
        ></input>
      </div>
      <div className={classes.buttonsWrapper}>
        <button onClick={handleDelete} className={classes.deleteButton}>
          Delete
        </button>
        <button
          onClick={() => handleTitleChange(inputValue, products)}
          className={classes.infoButton}
        >
          Change
        </button>
      </div>
    </div>
  );
});
