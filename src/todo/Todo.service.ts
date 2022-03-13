import { useCallback, useState } from "react";
import { TodoItem } from "./types";
import { injectableHook } from "../_common/inject";

type TodoServiceData = {
  items: TodoItem[];
  addItem: () => void;
  editItem: (id: number, newItem: Partial<TodoItem>) => void;
  deleteItem: (id: number) => void;
};

const TodoService = (): TodoServiceData => {
  const [items, setItems] = useState<TodoItem[]>([]);

  const addItem = useCallback(
    () =>
      setItems((prevItems) => {
        const lastItem = prevItems[prevItems.length - 1];

        if (lastItem && lastItem.label.length === 0) {
          return prevItems;
        }

        return [...prevItems, { id: Date.now(), label: "", isDone: false }];
      }),
    []
  );

  const editItem = useCallback(
    (id: number, newItem: Partial<TodoItem>) =>
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id !== id ? item : { ...item, ...newItem }
        )
      ),
    []
  );

  const deleteItem = useCallback(
    (id: number) =>
      setItems((prevItems) => prevItems.filter((item) => item.id !== id)),
    []
  );

  return { items, addItem, editItem, deleteItem };
};

export const useTodoService = injectableHook(TodoService);
