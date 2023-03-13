import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../authHeader";
import { getUser } from "../user/user";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getImageCollections = createAsyncThunk(
  "product/getImageCollections",
  async () => {
    return await axios
      .get(baseUrl + "image-collections/user", {
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
  async ({token, name}) => {
    await axios.get(baseUrl + `image-collections/download/${token}`, {
      headers: authHeader(),
      params: { token: token },
      responseType: "blob"
    }).then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);
  
      // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', `${name}.zip`); //or any other extension
      document.body.appendChild(link);
      link.click();
  
      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
  }
);

export const uploadUserImages = createAsyncThunk(
  "product/uploadUserImages",
  async ({uploadToken, imageWithCrop}) => {
    const file = imageWithCrop.map((item) => {
      let formData = new FormData();
      formData.append("File", item.image.file);
      const result = axios.post(baseUrl + "files/user-photo", formData, {
        params: {
          token: uploadToken
        },
        headers: {
          "Content-Type": "multipart/form-data",
          ...authHeader(),
        },
      }).then((res) => res.data.id);
      return result
    });
    const ids = await Promise.all(file).then((values) => {
      return values
    });

    const files = imageWithCrop.map((item, key) => {
      return {
        fileId: ids[key],
        unit: item.crop.unit,
        width: item.crop.width,
        height: item.crop.height,
        x: item.crop.x,
        y: item.crop.y,
      };
    });

    // for update crop path
    const update = await axios
      .post(
        baseUrl + "user-photos",
        {
          keepOldPhotos: false,
          files: files,
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

export const getUpoadToken = createAsyncThunk(
  "product/getUploadToken",
  async () => {
    return await axios
      .get(baseUrl + "files/upload-token", {headers: authHeader()})
      .then((res) => res.data)
      .catch((err) => err.response.data);
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
    dispatch(getTaskState());
  }
);

export const deleteAvatars = createAsyncThunk(
  "product/deleteAvatars",
  async (data, { dispatch }) => {
    await axios.delete(baseUrl + "image-collections/all", {
      headers: authHeader(),
    });
    dispatch(getImageCollections());
    dispatch(getUser())
    return { selected: {} };
  }
);

export const deleteCollection = createAsyncThunk(
  "product/deleteCollection",
  async (id, { dispatch }) => {
    await axios.delete(baseUrl + `image-collections/${id}`, {
      headers: authHeader(),
    });
    dispatch(getImageCollections());
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

export const getTaskState = createAsyncThunk("product/getTaskState", async () => {
  return await axios.get(baseUrl + "generating-tasks/my-task", {headers:authHeader()})
})

export const authSlice = createSlice({
  name: "product",
  initialState: {
    products: {},
    selected: {},
    userImages: {},
    productLoading: false,
    selectedLoading: false,
    payment: 0,
    taskState: {},
    uploadSuccess: false,
    uploadToken: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImageCollections.pending, (state) => {
        state.productLoading = true;
      })
      .addCase(getImageCollections.fulfilled, (state, action) => {
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
      .addCase(generatingProduct.pending, (state) => {
        state.productLoading = true
      })
      .addCase(generatingProduct.fulfilled, (state) => {
        state.productLoading = false
      })
      .addCase(getUpoadToken.fulfilled, (state, action) => {
        state.uploadToken = action.payload
      })
      .addCase(uploadUserImages.fulfilled, (state, action) => {
        state.uploadSuccess = action.payload.status;
        state.productLoading = false;
      })
      .addCase(uploadUserImages.pending, (state) => {
        state.productLoading = true;
      })
      .addCase(uploadUserImages.rejected, (state) => {
        state.productLoading = false
      })
      .addCase(clearUploadState.fulfilled, (state) => {
        state.uploadSuccess = false;
      })
      .addCase(getTaskState.fulfilled, (state, action) => {
        state.taskState = action.payload.data;
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
