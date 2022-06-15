import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users:[],
  editUser:{},
  pageNumber: 1,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
      
  }
})