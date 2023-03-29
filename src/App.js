import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckEmail from "./components/auth/checkEmail";
import ConfirmReset from "./components/auth/confirmReset";
import ForgotPassword from "./components/auth/forgotPassword";
import Login from "./components/auth/login";
import ResetPassword from "./components/auth/ResetPassword";
import SignUp from "./components/auth/signUp";
import AvatarDetail from "./components/pages/avatarDetail";
import UploadImage from "./components/pages/uploadImage";
import Setting from "./components/pages/setting";
import ImageCrop from "./components/basic/imageCroptest";
import Success from "./components/pages/success";
import MyAvatars from "./components/pages/myAvatars";
import Group from "./components/pages/avatarGroup";
import Contact from "./components/pages/contact";
import Landing from "./components/pages/landing";
import Privacy from "./components/pages/privacy";
import { getUser } from "./redux/user/user";
import { PrivateRoute } from "./components/helpers/privateRoute";
import { PublicRoute } from "./components/helpers/publicRoute";
import { getTaskState } from "./redux/product/product";
import { Payment } from "./components/pages/stripe";
import Terms from "./components/pages/terms";


function App() {
  const dispatch = useDispatch();

  const store = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  useEffect(() => {
    if(store.isAuthenticate) {
      dispatch(getTaskState());
    }
  }, [dispatch, store.isAuthenticate])

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/google-oauth" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
          <Route path="/check-email" element={<PublicRoute><CheckEmail /></PublicRoute>} />
          <Route path="/reset-password/:token" element={<PublicRoute><ResetPassword /></PublicRoute>} />
          <Route path="/confirm-reset" element={<PublicRoute><ConfirmReset /></PublicRoute>} />
          <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
          <Route path="/upload" element={<PrivateRoute><UploadImage /></PrivateRoute>} />
          <Route path="/avatar-detail" element={<PrivateRoute><AvatarDetail /></PrivateRoute>} />
          <Route path="/setting" element={<PrivateRoute><Setting /></PrivateRoute>} />
          <Route path="/image-crop" element={<PrivateRoute><ImageCrop /></PrivateRoute>} />
          <Route path="/success" element={<PrivateRoute><Success /></PrivateRoute>} />
          <Route path="/my-avatars" element={<PrivateRoute><MyAvatars /></PrivateRoute>} />
          <Route path="/my-avatars/:id" element={<PrivateRoute><Group /></PrivateRoute>} />
        </Routes>
    </Router>
  );
}

export default App;
