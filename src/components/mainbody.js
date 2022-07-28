import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { addnewtask, deleteone, taskcompleted } from "../redux/todostore";
import { MdOutlineDelete } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { CgEnter } from "react-icons/cg";

const Mainbody = () => {
  const state = useSelector((state) => state.todo);
  const [newtodo, setnewtodo] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="main-container">
      <div className="add-task-div">
        <h1>Add New Task</h1>
        <input
          className="task-input"
          value={newtodo}
          onInput={(e) => setnewtodo(e.target.value)}
        />

        <button
          className="add-task-button"
          onClick={() => {
            if (newtodo !== "") {
              dispatch(addnewtask({ statement: newtodo, status: false }));
              setnewtodo("");
            }
          }}
        >
          <CgEnter />
        </button>
      </div>
      <div>
        {state.map((e) => (
          <div className="task" key={e.statement}>
            <p className={e.status ? "completed" : "not-complete"}>
              {e.statement}
            </p>
            <div>
              <button
                className="task-complete-btn btn1"
                onClick={() => {
                  dispatch(taskcompleted(e));
                }}
              >
                <MdDoneOutline />
              </button>
              <button
                className="delete-task-btn btn1"
                onClick={() => {
                  dispatch(deleteone(e));
                  console.log(state);
                }}
              >
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainbody;
