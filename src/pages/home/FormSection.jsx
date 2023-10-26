import { useState, useEffect } from "react";

const FormSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("message here");
  const [todos, setTodos] = useState([]);

  const [count, setCount] = useState(0);

  //   component is created and deleted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));

    console.log(todos);

    console.log("after component in dom");

    const scroll = () => {
      console.log("scroll");
    };

    window.addEventListener("scroll", scroll);

    // on delete
    return () => {
      // clean function
      console.log("clean function");

      window.removeEventListener("scroll", scroll);
    };
  }, []);

  //   component is updated
  useEffect(() => {
    console.log("after component updated", count);
  }, [count, isActive]);

  const changeActive = () => {
    setMessage("active state is changed");
    setIsActive(!isActive);
  };

  return (
    <div>
      {message}
      <br />
      {isActive ? "active" : "not active"}

      <hr />

      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <div>{todo.completed ? "completed" : "not completed"}</div>
          <hr />
        </div>
      ))}

      <hr />

      <br />
      <div className="container d-flex mt-4">
        <button onClick={() => setCount(count + 1)} className="btn btn-primary">
          +
        </button>
        <div className="mx-4">{count}</div>
        <button onClick={() => setCount(count - 1)} className="btn btn-primary">
          -
        </button>
      </div>

      <br />
      <button onClick={() => changeActive()} className="btn btn-danger">
        change active
      </button>

      <h1>Form Section</h1>
    </div>
  );
};

export default FormSection;
