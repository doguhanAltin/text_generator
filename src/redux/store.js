import { configureStore } from "@reduxjs/toolkit";
import ParagraphSlice from "./ParagraphSlice";
export const store = configureStore({
    reducer:{
        paragraph:ParagraphSlice
    }
});