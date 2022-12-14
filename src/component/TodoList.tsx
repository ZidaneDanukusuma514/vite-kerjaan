import React from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const data = useSelector((state: RootState) => state.todos.data);
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      {data.map((e) => (
        <TodoItem key={e.id} data={e} />
      ))}
    </div>
  );
}

export default TodoList;
