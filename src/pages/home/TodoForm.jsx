import { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";

export default function TodoForm({ addNewItem }) {
  const [text, setText] = useState("");
  const textRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (text && text.trim()) {
      addNewItem(text);

      setText("");

      console.log("todo item is added");
    }
  };

  const handleFocusEvent = () => {
    textRef.current.focus()
  };

  const handleTextChange = (event) => {
    // console.log(event);

    setText(event.target.value);
  };
  // the shortcut is ====>
  // onChange={(event) => setText(event.target.value)}

  return (
    <form onSubmit={submitHandler}>
      <button className="btn btn-danger" onClick={handleFocusEvent}>
        focus on the input
      </button>

      <div className="row align-items-center">
        <div className="col-10">
          <div className="mb-3">
            <label htmlFor="todo-text-input" className="form-label">
              Text
            </label>
            <br />

            {/* {text} */}

            <input
              ref={textRef}
              value={text}
              onChange={handleTextChange}
              type="text"
              className="form-control"
              id="todo-text-input"
            />
          </div>
        </div>

        <div className="col-2">
          <button className="btn btn-primary" type="submit">
            add
          </button>
        </div>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  addNewItem: PropTypes.func.isRequired,
};
