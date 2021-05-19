import React, { useState } from "react";
import Header from "./component/Header";
import Form from "./component/Form";
import BookList from "./component/BookList";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodos, setEditTodos] = useState (null);

  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodos={editTodos}
              setEditTodos ={setEditTodos}
            />
          </div>

          <div>
            <BookList todos={todos} setTodos={setTodos} setEditTodos ={setEditTodos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
