import React from "react";
import "./TodoList.scss";

const TodoList: React.FC = ({ children }) => (
  <ul className="TodoList">{children}</ul>
);

export default TodoList;
