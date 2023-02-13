import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../authHeader";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getUserImageCollections = createAsyncThunk(
  "product/getUserImageCollections",
  async (upn) => {
    await axios
      .get(baseUrl + "user-photos" + upn)
      .then((res) => {
        console.log("UserPhotos => ", res);
        return { products: { userPhotos: res.data } };
      })
      .catch((err) => {
        console.log("Error => ", err.response.data);
        return { error: { userPhotos: err.response.data } };
      });
  }
);

export const uploadUserImages = createAsyncThunk(
  "product/uploadUserImages",
  async (imageWithCrop) => {
    let formData = new FormData();
    imageWithCrop.map((item) => formData.append("Files", item.image.file));
    const result = await axios.post(
      "https://avatar-service-test-hwj6miv7nq-uc.a.run.app/user-photos",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          ...authHeader(),
        },
      }
    );

    const commands = result.data.map((item, key) => {
      return {
        id: result.data[key].id,
        unit: imageWithCrop[key].crop.unit,
        width: imageWithCrop[key].crop.width,
        height: imageWithCrop[key].crop.height,
        x: imageWithCrop[key].crop.x,
        y: imageWithCrop[key].crop.y,
      };
    });

    // for update crop path
    const update = await axios
      .put(
        "https://avatar-service-test-hwj6miv7nq-uc.a.run.app/user-photos/crop",
        {
          commands,
        },
        { headers: authHeader() }
      )
      .then(() => {
        return { status: true };
      })
      .catch((err) => {
        console.log(err);
        return {status : false};
      });
    return update;
  }
);

export const clearUploadState = createAsyncThunk("product/clearUploadState", async() => false);

export const generatingProduct = createAsyncThunk("product/generatingAvatars", async({name, gender}) => {
  await axios
    .post(baseUrl + "generating-tasks/create", {name, gender}, {headers: authHeader()})
    .then(res => console.log("res => ", res))
})

export const authSlice = createSlice({
  name: "product",
  initialState: {
    products: {},
    productLoading: false,
    payment: true,
    uploadSuccess: false,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserImageCollections.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.error = action.payload.error;
      })
      .addCase(uploadUserImages.fulfilled, (state, action) => {
        state.uploadSuccess = action.payload.status;
        state.productLoading = false;
      })
      .addCase(uploadUserImages.pending, (state, action) => {
        state.productLoading = true
      })
      .addCase(clearUploadState.fulfilled, (state) => {
        state.uploadSuccess = false
      })
  },
});

export default authSlice.reducer;
