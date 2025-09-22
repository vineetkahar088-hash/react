import { createSlice } from "@reduxjs/toolkit";

const defaultTeacher = {
  name: "jagmohan rai",
  subject: "full stack",
  age: 27,
  email: "jagmohanrai@gmail.com",
  qualification: "M.tech",
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState: { data: defaultTeacher },
  reducers: {
    updateTeacher(state, action) {
      state.data = { ...state.data, ...action.payload };
    },
    resetTeacher(state) {
      state.data = defaultTeacher;
    },
  },
});

export const { updateTeacher, resetTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
