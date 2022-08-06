import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { addnewtask, deleteone, taskcompleted } from "../redux/todostore";
import { MdOutlineDelete } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { CgEnter } from "react-icons/cg";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../fireabse";

const Mainbody = () => {
  const [todos, settodos] = useState([]);
  const [newtodo, setnewtodo] = useState("");
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  //  fucntion to fetch data from db
  async function fetchData() {
    const querySnapshot = await getDocs(collection(firestore, "todo"));
    const todostemp = [];
    querySnapshot.forEach((doc) => {
      todos.push(doc.data());
    });
    settodos(todostemp);
  }

  // running it on useffect so it runs on start of mounting
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (newtodo !== "") {
      dispatch(addnewtask({ statement: newtodo, status: false }));
    }

    try {
      const docRef = await addDoc(collection(firestore, "todo"), {
        statement: newtodo,
        status: false,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setnewtodo("");
  };
  console.log(todos);
  return (
    <div className="main-container">
      <div className="add-task-div">
        <h1>Add New Task</h1>
        <input
          className="task-input"
          value={newtodo}
          onInput={(e) => {
            setnewtodo(e.target.value);
          }}
        />

        <button className="add-task-button" onClick={() => handleSubmit()}>
          <CgEnter />
        </button>
      </div>
      <div>
        {todos.map((e) => (
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
                  // console.log(state);
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
