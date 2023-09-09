import { createSlice } from "@reduxjs/toolkit";

// let items = localStorage.getItem("Habits");
const items =
  localStorage.getItem("habits") != null
    ? JSON.parse(localStorage.getItem("habits"))
    : [];

const initialState = {
  habits: items,
};

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push({
        title: action.payload,
        time: new Date().toString().substring(0, 24),
      });

      localStorage.setItem(
        "habits",
        JSON.stringify(state.habits.map((habit) => habit))
      );
    },
    deleteHabit: (state, action) => {
      state.habits.splice(action.payload, 1);

      localStorage.setItem(
        "habits",
        JSON.stringify(state.habits.map((habit) => habit))
      );
    },
  },
});

export const habitReducer = habitSlice.reducer;
console.log(habitReducer);
export const actions = habitSlice.actions;
export const habitSelector = (state) => state.habitReducer.habits;
