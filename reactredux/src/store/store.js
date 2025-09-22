import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "./teacherSlice";
import studentReducer from "./studentSlice";

const store = configureStore({
  reducer: {
    teacher: teacherReducer,
    student: studentReducer,
  },
});

export default store;
