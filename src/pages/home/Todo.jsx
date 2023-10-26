import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

export default function Todo() {
  const [items, setItems] = useState([{ id: 1, text: "Learn React" }]);

  const addNewItem = (newItem) => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        text: newItem,
      },
    ]);
  };

  return (
    <section className="container">
        <Button variant="contained">Hello world</Button>

        <Pagination count={100} color="primary" />
        
        <br />


      todo list here
      <hr />
      <TodoForm addNewItem={addNewItem} />
      <hr />
      <TodoList items={items} />


      {/* {
        [
            <div key={1}>2</div>,
            <div key={3}>3</div>,
        ]
      } */}
    </section>
  );
}
