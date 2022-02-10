import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getParagraphAsync= createAsyncThunk('paragraphSlice/getParagraphAsync', async ({paras,textForm})=>{
    const res = await axios.get(`https://baconipsum.com/api/?type=all-meat&paras= ${paras}&format=${textForm}`);
    return res.data;
    });

export const ParagraphSlice = createSlice({
  name: "ParagraphSlice",
  initialState: {
    items:[]
  },
  reducers: {
  },
  extraReducers: {
      [getParagraphAsync.fulfilled]:(state,action)=>{
        state.items= action.payload;
      }
  }
  
});
export default ParagraphSlice.reducer;

