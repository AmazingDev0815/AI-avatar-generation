import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../authHeader";
import { getUser } from "../user/user";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getUserImageCollections = createAsyncThunk(
  "product/getUserImageCollections",
  async () => {
    return await axios
      .get(baseUrl + "image-collections", {
        headers: authHeader(),
        params: {
          FilterByUser: true,
          Page: 1,
          PageSize: 100,
        },
      })
      .then((res) => {
        return { products: res.data };
      })
      .catch((err) => {
        console.log("Error => ", err.response.data);
        return { error: { userPhotos: err.response.data } };
      });
  }
);

export const getImageCollection = createAsyncThunk(
  "product/getImageCollection",
  async (id) => {
    return await axios
      .get(baseUrl + `image-collections/${id}`, { headers: authHeader() })
      .then((res) => {
        return { selected: res.data };
      })
      .catch((err) => {
        return { error: { userPhotos: err.response.data } };
      });
  }
);

export const getUserImages = createAsyncThunk(
  "product/getUserImages",
  async (upn) => {
    return await axios.get(baseUrl + `user-photos/${upn}`, {
      headers: authHeader(),
      params: { upn },
    });
  }
);

export const downloadCollection = createAsyncThunk(
  "product/downloadCollection",
  async (id) => {
    await axios.get(baseUrl + `image-collections/${id}/download`, {
      headers: authHeader(),
      params: { id: id },
    });
  }
);

export const uploadUserImages = createAsyncThunk(
  "product/uploadUserImages",
  async (imageWithCrop) => {
    let formData = new FormData();
    imageWithCrop.map((item) => formData.append("Files", item.image.file));
    const result = await axios.post(baseUrl + "user-photos", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...authHeader(),
      },
    });

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
        baseUrl + "user-photos/crop",
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
        return { status: false };
      });
    return update;
  }
);

export const clearUploadState = createAsyncThunk(
  "product/clearUploadState",
  async () => false
);

export const generatingProduct = createAsyncThunk(
  "product/generatingAvatars",
  async ({ name, gender }, { dispatch }) => {
    await axios
      .post(
        baseUrl + "generating-tasks/create",
        { name, gender },
        { headers: authHeader() }
      )
      .then((res) => console.log("res => ", res));
    dispatch(getUser());
  }
);

export const deleteAvatars = createAsyncThunk(
  "product/deleteAvatars",
  async (data, { dispatch }) => {
    await axios.delete(baseUrl + "image-collections/all", {
      headers: authHeader(),
    });
    dispatch(getUserImageCollections());
    return { selected: {} };
  }
);

export const deleteCollection = createAsyncThunk(
  "product/deleteCollection",
  async (id, { dispatch }) => {
    await axios.delete(baseUrl + `image-collections/${id}`, {
      headers: authHeader(),
    });
    dispatch(getUserImageCollections());
    return { selected: {} };
  }
);

export const getCurrentAvailableCount = createAsyncThunk(
  "product/getCurrentAvailableCount",
  async () => {
    return axios.get(baseUrl + "gpu-instances/available-count", {
      headers: authHeader(),
    });
  }
);

export const authSlice = createSlice({
  name: "product",
  initialState: {
    products: {},
    selected: {},
    userImages: {},
    productLoading: false,
    selectedLoading: false,
    payment: 0,
    uploadSuccess: false,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserImageCollections.pending, (state) => {
        state.productLoading = true;
      })
      .addCase(getUserImageCollections.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.error = action.payload.error;
        state.productLoading = false;
      })
      .addCase(getImageCollection.fulfilled, (state, action) => {
        state.selected = action.payload.selected;
        state.selectedLoading = false;
      })
      .addCase(getImageCollection.pending, (state) => {
        state.selectedLoading = true;
      })
      .addCase(getUserImages.fulfilled, (state, action) => {
        state.userImages = action.payload.data;
      })
      .addCase(uploadUserImages.fulfilled, (state, action) => {
        state.uploadSuccess = action.payload.status;
        state.productLoading = false;
      })
      .addCase(uploadUserImages.pending, (state) => {
        state.productLoading = true;
      })
      .addCase(clearUploadState.fulfilled, (state) => {
        state.uploadSuccess = false;
      })
      .addCase(getCurrentAvailableCount.fulfilled, (state, action) => {
        state.payment = action.payload.data;
      })
      .addCase(deleteCollection.fulfilled, (state, action) => {
        state.selected = action.payload.selected;
      })
      .addCase(deleteAvatars.fulfilled, (state, action) => {
        state.selected = action.payload.selected;
      });
  },
});

export default authSlice.reducer;
