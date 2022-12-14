import React from "react";
import TodoList from "./TodoList";
import TodoGroup from "./TodoGroup";
function SectionTodo() {
  return (
    <div>
      <TodoGroup>
        <TodoList />
      </TodoGroup>
    </div>
  );
}

export default SectionTodo;
