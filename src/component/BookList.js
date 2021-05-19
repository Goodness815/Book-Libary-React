import React from "react";

const BookList = ({ todos, setTodos, setEditTodos }) => {

    
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
     
    const handleEdit = ({id}) => {
      const findTodo = todos.find((todo) => todo.id === id);
      setEditTodos (findTodo)
    }

  return (

    <div className="book-item-case">
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(e) => e.preventDefault}
          />
          <div>

              <button className="button-edit task-button" onClick={() => handleEdit(todo)} >
                  <i className="fa fa-edit"></i>
              </button>
              <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                  <i className="fa fa-trash"></i>
              </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default BookList;
