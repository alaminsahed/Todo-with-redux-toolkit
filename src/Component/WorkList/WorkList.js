import React from "react";
import "./WorkList.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import {check} from "../../data/reduxSlice";

const WorkList = ({ list }) => {
  // const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    // setChecked(event.target.checked);
    dispatch(check(list.id))
  };
  //   console.log(list.item)
  return (
    <div className="todo-container">
      <Checkbox
        checked={list.done}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      {list.item}
    </div>
  );
};

export default WorkList;
