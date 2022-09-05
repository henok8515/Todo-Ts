import React, { useState } from "react";
import { TodoModel } from "./model";

import Todo from "./Todo";
interface Props {
  todos: TodoModel[];
  input: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
const ListTodo = ({ todos, setTodos, input }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {todos.map((todo) => (
        <Todo todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default ListTodo;
