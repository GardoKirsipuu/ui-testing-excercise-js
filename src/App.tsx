import React from "react";
import Decoration from "./_components/Decoration";
import Logo from "./_components/logo/Logo";
import TodoList from "./_components/list/TodoList";
import TodoListItem, {
  TodoListAddItem
} from "./_components/list-item/TodoListItem";
import "./styles.scss";
import { useTodoService } from "./todo/Todo.service";

const App: React.FC = () => {
  const { items, addItem, editItem, deleteItem } = useTodoService();

  return (
    <>
      <div className="decorations">
        <Decoration />
        <Decoration />
      </div>
      <div className="wrapper">
        <Logo />
        <TodoList>
          {items.map((item) => (
            <TodoListItem
              key={item.id}
              label={item.label}
              isDone={item.isDone}
              onLabelChange={(label) => editItem(item.id, { label })}
              onToggleDone={(isDone) => editItem(item.id, { isDone })}
              onDelete={() => deleteItem(item.id)}
            />
          ))}
          <TodoListAddItem onClick={addItem} />
        </TodoList>
      </div>
    </>
  );
};

export default App;
