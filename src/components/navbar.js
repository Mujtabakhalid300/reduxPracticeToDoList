import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearlist } from "../redux/todostore";
import { TbSum } from "react-icons/tb";
import { MdPending } from "react-icons/md";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);
  return (
    <>
      <div className="navbar-div">
        <div>
          <TbSum />
          <div>{state.length}</div>
          <MdPending />
          <div>{state.filter((e) => e.status === true).length}</div>
        </div>
        <button
          onClick={() => {
            dispatch(clearlist());
          }}
          className="btn1"
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default Navbar;
