import React from "react";
import { useSelector } from "react-redux";

import WorkList from "./WorkList";
import "./Work.css";

const Work = () => {
  const work = useSelector((state) => state.todos.todoList);

  return (
    <div class="list-container">
     <h3>Todo List</h3>
      {work.map((todo) => (
        <WorkList key={todo.id} list={todo}></WorkList>
      ))}
    </div>
  );
};

export default Work;
