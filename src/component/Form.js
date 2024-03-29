import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodos, setEditTodos }) => {

  const updateTodo = (title, id) => {
    const newTodo = todos.map ((todo) => 
    todo.id === id ? {title, id} : todo
    );
  }
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!editTodos) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    }  else {
      updateTodo (input, editTodos.id)
    }

  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter Book name.."
        className="task-input"
        value={input}
        onChange={onInputChange}
        required
      />
      <button className="button-add" type="submit">
        {" "}
        Add
      </button>
    </form>
  );
};

export default Form;
