import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  reducers: {
    changeCount(state) {
      state.count++;
    }
  },
  initialState: {
    count: 0,
    message: "Hello React"
  }
});
export const { changeCount } = counterSlice.actions;
export default counterSlice.reducer;
