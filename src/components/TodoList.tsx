import React from "react";

import "./TodoList.css";
import { Todo } from "../todo.model";

export interface TodoListProps {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={props.onRemoveTodo.bind(null, item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
