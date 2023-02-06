import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://avatar-service-test-hwj6miv7nq-uc.a.run.app/";

export const getUser = createAsyncThunk("authentication/getUser", async () => {
  const item = window.localStorage.getItem("userData");
  const authData = item ? JSON.parse(item) : {};
  const upn = window.localStorage.getItem("upn") ? JSON.parse(window.localStorage.getItem("upn")) : {};
  const userData = await axios
    .get(baseUrl + upn, { headers: {"Authorization": `Bearer ${authData.accessToken}`}})
    .then(res => {
      return {userData:res.data, isAuthenticate: true}
    })
    .catch(err => {
      console.log("getUserError => ", err);
      return {userData: {}, isAuthenticate:false}
    }) 
  return userData;
})

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
  async (data, {dispatch}) => {
    const login = await axios
      .post(baseUrl + "authentication/token", {
        upn: data.username,
        password: data.password,
      })
      .then((response) => {
        console.log("loginResponse ===> ", response.data);
        if (response.data.accessToken && response.data?.status === "Success") {
          localStorage.setItem("userData", JSON.stringify(response.data));
          localStorage.setItem("upn", JSON.stringify(data.username));
        }
        return response.data;
      })
      .catch((err) => {
        console.log("loginError => ", err.response.data);
        return {};
      });
      dispatch(getUser());
    return login;
  }
);

export const handleSignOut = createAsyncThunk(
  "authentication/handleSignOut",
  async (data,{dispatch}) => {localStorage.removeItem("userData");
  localStorage.removeItem('upn');
  dispatch(getUser());
}
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
    userData: {},
    response: {},
    isAuthenticate: false,
    isLoading: true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleSignUp.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(handleSignIn.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(handleSignOut.fulfilled, (state, action) => {
        // state.response = initialUser();
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userData = action.payload.userData;
        state.isAuthenticate = action.payload.isAuthenticate;
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
  },
});

export default authSlice.reducer;
