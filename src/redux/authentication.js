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
      .post(baseUrl + "admin/users", {
        upn: data.upn,
        password: data.password,
        confirmPassword: data.confirmPassword,
        name: data.username,
        email: data.email,
      })
      .then((response) => {
        console.log("SignUp ===> ", response);
        return response.data;
      })
      .catch((err) => console.log("signUpError => ", err));
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
        console.log("loginResponse ===> ", response);
        if (response.data.accessToken) {
          localStorage.setItem("userData", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch((err) => {
        console.log("loginError => ", err);
        return {};
      });
    return login;
  }
);

export const handleSignOut = createAsyncThunk(
  "authentication/handleSignOut",
  async () => localStorage.removeItem("userData")
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
