import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faSquare } from "@fortawesome/free-regular-svg-icons";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./TodoListItem.scss";

type TodoListItemProps = {
  label: string;
  isDone: boolean;
  onLabelChange: (newLabel: string) => void;
  onToggleDone: (newIsDone: boolean) => void;
  onDelete: () => void;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  label,
  isDone,
  onLabelChange,
  onToggleDone,
  onDelete
}) => {
  return (
    <li className={`TodoListItem ${label.length === 0 ? "empty-label" : ""}`}>
      <div className="TodoListItem__inner">
        <button
          type="button"
          onClick={() => onToggleDone(!isDone)}
          className="TodoListItem__toggle"
        >
          {isDone ? (
            <FontAwesomeIcon icon={faSquareCheck} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
          )}
        </button>
        <input
          type="text"
          value={label}
          onChange={(e) => onLabelChange(e.currentTarget.value)}
          className="TodoListItem__label"
        />
        <button
          type="button"
          onClick={() => onDelete()}
          className="TodoListItem__remove"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;

type TodoListAddItemProps = {
  onClick: () => void;
};

export const TodoListAddItem: React.FC<TodoListAddItemProps> = ({
  onClick
}) => (
  <li className="TodoListItem TodoListItem-add">
    <div className="TodoListItem__inner">
      <button type="button" onClick={onClick} className="TodoListItem__toggle">
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button type="button" onClick={onClick} className="TodoListItem__label">
        Add new item
      </button>
    </div>
  </li>
);
