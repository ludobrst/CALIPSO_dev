import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ludovic BRISSET" },
  { id: "1", name: "Philippe WATZKY" },
  { id: "2", name: "Jessica SUNTOO" }
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
