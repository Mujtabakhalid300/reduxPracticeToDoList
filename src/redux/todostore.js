import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: [
    // { statement: "hello my name is joseph mourinheo", status: true },
    // { statement: "hello my name is mujtaba khalid", status: false },
    // { statement: "hello my name is irtaza khalid", status: true },
    // { statement: "hello my name is savez mirza", status: false },
  ],
  reducers: {
    addnewtask: (state, action) => {
      return [...state, action.payload];
    },
    taskcompleted: (state, action) => {
      return state.map((e) =>
        e.statement === action.payload.statement
          ? {
              ...e,
              status: !e.status,
            }
          : e
      );
    },
    deleteone: (state, action) => {
      return state.filter((e) => e.statement !== action.payload.statement);
    },
    clearlist: (state) => {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteone, taskcompleted, addnewtask, clearlist } =
  counterSlice.actions;

export default counterSlice.reducer;
