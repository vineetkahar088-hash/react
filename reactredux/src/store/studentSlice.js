import { createSlice } from "@reduxjs/toolkit";

const defaultStudent = {
  name: "vineet kahar",
  roll: "S-101",
  age: 20,
  email: "vineetkahar088@gmail.com",
  qualification: "B.tech",
};

const studentSlice = createSlice({
  name: "student",
  initialState: { data: defaultStudent },
  reducers: {
    updateStudent(state, action) {
      state.data = { ...state.data, ...action.payload };
    },
    resetStudent(state) {
      state.data = defaultStudent;
    },
  },
});

export const { updateStudent, resetStudent } = studentSlice.actions;
export default studentSlice.reducer;
