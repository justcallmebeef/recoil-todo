import { useRecoilValue } from "recoil";

import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilters } from "../Filter/TodoListFilters";
import { filteredTodoListState } from "../Filter/filteredTodoListState";
import { TodoListStats } from "../Stats/TodoListStats";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
