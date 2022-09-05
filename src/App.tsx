import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ListTodo from "./components/ListTodo";
import { TodoModel } from "./components/model";
function App() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    // const value = (e.target as HTMLInputElement).value;
    if (input) {
      setTodos([...todos, { todo: input, id: Date.now(), isDone: false }]);
      console.log(todos, "todos");
      console.log(input, "input");
      setInput("");
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "wheat",
        alignItems: "center",
        backgroundColor: "#16213E",
      }}
    >
      <InputField input={input} addTodo={addTodo} setInput={setInput} />
      <ListTodo input={input} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
