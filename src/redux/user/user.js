import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://avatar-service-test-hwj6miv7nq-uc.a.run.app/";

const initialUser = () => {
  const item = window.localStorage.getItem("userData");
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : {};
};

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
  async (data) => {
    const login = await axios
      .post(baseUrl + "authentication/token", {
        upn: data.username,
        password: data.password,
      })
      .then((response) => {
        console.log("loginResponse ===> ", response.data);
        if (response.data.accessToken && response.data?.status === "Success") {
          localStorage.setItem("userData", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch((err) => {
        console.log("loginError => ", err.response.data);
        return {};
      });
    return login;
  }
);

export const handleSignOut = createAsyncThunk(
  "authentication/handleSignOut",
  async () => localStorage.removeItem("userData")
);

export const deleteAccount = createAsyncThunk(
  "authentication/deleteAccount",
  async (token) => {
    const config = {
      headers: { "Authorization": `Bearer ${token}` }
    }
    axios
      .delete(baseUrl + "users", config)
      .then((res) => {
        console.log("deleteUser => ", res);
        console.log("token => ", token);
        localStorage.removeItem("userData");
      })
      .catch((err) => {console.log("errorDelete => ", err);
      console.log("token => ", token);
    });
  }
);

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    userData: initialUser(),
    response: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleSignUp.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(handleSignIn.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(handleSignOut.fulfilled, (state, action) => {
        state.userData = initialUser();
      });
  },
});

export default authSlice.reducer;
