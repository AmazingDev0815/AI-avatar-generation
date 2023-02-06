import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../authHeader";

const baseUrl = "https://avatar-service-test-hwj6miv7nq-uc.a.run.app/";

export const getUser = createAsyncThunk("authentication/getUser", async () => {
  const item = window.localStorage.getItem("userData");
  const authData = item ? JSON.parse(item) : {};
  const upn = window.localStorage.getItem("upn")
    ? JSON.parse(window.localStorage.getItem("upn"))
    : {};
  const userData =
    Object.keys(authData).length && Object.keys(upn)
      ? await axios
          .get(baseUrl + upn, {
            headers: { Authorization: `Bearer ${authData.accessToken}` },
          })
          .then((res) => {
            return { userData: res.data, isAuthenticate: true };
          })
          .catch((err) => {
            console.log("getUserError => ", err);
            return { userData: {}, isAuthenticate: false };
          })
      : { userData: {}, isAuthenticate: false };
  return userData;
});

export const handleSignUp = createAsyncThunk(
  "authentication/handleSignUp",
  async (data) => {
    const signUp = await axios
      .post(baseUrl + "users/register", {
        upn: data.upn,
        password: data.password,
        confirmPassword: data.confirmPassword,
        name: data.username,
        email: data.email,
        gender: 0,
      })
      .then((response) => {
        console.log("SignUp ===> ", response);
        return response.data;
      })
      .catch((err) => {
        console.log("signUpError => ", err);
        return err.response.data;
      });
    return signUp;
  }
);

export const handleSignIn = createAsyncThunk(
  "authentication/handleSignIn",
  async (data, { dispatch }) => {
    const login = await axios
      .post(baseUrl + "authentication/token", {
        upn: data.username,
        password: data.password,
      })
      .then((response) => {
        console.log("loginResponse ===> ", response.data);
        if (response.data.accessToken) {
          localStorage.setItem("userData", JSON.stringify(response.data));
          localStorage.setItem("upn", JSON.stringify(data.username));
        }
        return { response: response.data, error: {} };
      })
      .catch((err) => {
        console.log("loginError => ", err.response.data);
        return { response: {}, error: err.response.data };
      });
    dispatch(getUser());
    return login;
  }
);

export const handleSignOut = createAsyncThunk(
  "authentication/handleSignOut",
  async (data, { dispatch }) => {
    localStorage.removeItem("userData");
    localStorage.removeItem("upn");
    dispatch(getUser());
  }
);

export const deleteAccount = createAsyncThunk(
  "authentication/deleteAccount",
  async (data, { dispatch }) => {
    await axios
      .delete(baseUrl + "users", { headers: authHeader() })
      .then((res) => {
        localStorage.removeItem("userData");
        localStorage.removeItem("upn");
      })
      .catch((err) => {
        console.log("errorDelete => ", err);
      });
    dispatch(getUser());
  }
);

export const requestResetPassword = createAsyncThunk(
  "authentication/requestResetPassword",
  async (email) => {
    const request = await axios
      .post(baseUrl + "users/request-reset-password", {
        email: email,
        prefixUri: "http://localhost:3000/reset-password/",
      })
      .then((response) => {
        return { isLoading: false, error: {}, response: { success: true } };
      })
      .catch((err) => {
        console.log("err => ", err);
        return {
          isLoading: false,
          error: err.response.data,
          response: { success: false },
        };
      });
    return request;
  }
);

export const clearState = createAsyncThunk(
  "authentication/clearState",
  async () => {
    return {
      userData: {},
      response: {},
      isAuthenticate: false,
      isLoading: true,
      error: {},
      success: false,
    };
  }
);

export const resetPassword = createAsyncThunk(
  "authentication/resetPassword",
  async (data) => {
    const reset = await axios
      .post(baseUrl + "users/reset-password", {
        token: data.token,
        newPassword: data.password,
        confirmNewPassword: data.confirm,
      })
      .then((res) => {
        return { isLoading: false, error: {}, success: true };
      })
      .catch((err) => {
        console.log("err => ", err);
        return { isLoading: false, error: err.response.data, success: false };
      });
    return reset;
  }
);

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    userData: {},
    response: {},
    isAuthenticate: false,
    isLoading: true,
    error: {},
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleSignUp.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(handleSignIn.fulfilled, (state, action) => {
        state.response = action.payload.response;
        state.error = action.payload.error;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userData = action.payload.userData;
        state.isAuthenticate = action.payload.isAuthenticate;
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestResetPassword.fulfilled, (state, action) => {
        state.isLoading = action.payload.isLoading;
        state.error = action.payload.error;
        state.response = action.payload.response;
      })
      .addCase(requestResetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = action.payload.isLoading;
        state.error = action.payload.error;
        state.success = action.payload.success;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearState.fulfilled, (state, action) => {
        state.isAuthenticate = action.payload.isAuthenticate;
        state.userData = action.payload.userData;
        state.response = action.payload.response;
        state.error = action.payload.error;
        state.success = action.payload.success;
      });
  },
});

export default authSlice.reducer;
