import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../data/reduxSlice";
import Work from "../WorkList/Work";
import WorkList from "../WorkList/WorkList";
import "./Input.css";

const Input = () => {
  const [todo, setTodo] = useState(" ");

  const dispatch = useDispatch();


  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(
      add({
        item: todo,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <div>
      <form className="input-form" onSubmit={(e) => handelSubmit(e)}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} />
        <button className="btn" type="submit">
          ADD
        </button>
      </form>
     
    </div>
  );
};

export default Input;
