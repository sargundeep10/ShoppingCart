
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffee: 0,
  apple: 0 ,
  lays : 0 ,
  juice :0 ,
  silk :0 ,
}

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state, action) => {
      // console.log("===action.payload==", action.payload)
      state[action.payload] += 1;
    },
    decrement: (state, action) => {
      if (state[action.payload] > 0) {
        state[action.payload] -= 1;
      }
    } ,
    reset: () => initialState
  }
})

export const { increment, decrement , reset } = counterSlice.actions;
export default counterSlice.reducer;
