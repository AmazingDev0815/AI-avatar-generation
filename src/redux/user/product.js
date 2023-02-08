import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../authHeader";

const baseUrl = process.env.REACT_APP_BASE_URL;
const prefixUri = process.env.REACT_APP_PREFIX_URI;

export const getUserImageCollections = createAsyncThunk("product/getUserImageCollections", async(upn) => {
  await axios.get(baseUrl + "user-photos" + upn)
    .then(res => {
      console.log("UserPhotos => ", res);
      return {products: {userPhotos: res.data}}
    })
    .catch(err => {
      console.log("Error => ", err.response.data)
      return {error: {userPhotos: err.response.data}}
    })
})

export const authSlice = createSlice({
  name: "product",
  initialState: {
    products: {},
    isLoading: true,
    payment: true,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserImageCollections.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.error = action.payload.error;
      })
  },
});

export default authSlice.reducer;
