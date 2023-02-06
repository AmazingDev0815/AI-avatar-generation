import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import CheckEmail from "./components/auth/checkEmail";
import ConfirmReset from "./components/auth/confirmReset";
import ForgotPassword from "./components/auth/forgotPassword";
import Login from "./components/auth/login";
import ResetPassword from "./components/auth/ResetPassword";
import SignUp from "./components/auth/signUp";
import Home from "./components/pages/home";
import Payment from "./components/pages/payment";
import AvatarDetail from "./components/pages/avatarDetail";
import UploadImage from "./components/pages/uploadImage";
import Setting from "./components/pages/setting";
import ImageCrop from "./components/basic/imageCroptest";
import Success from "./components/pages/success";
import MyAvatars from "./components/pages/myAvatars";
import Carousel from "./components/basic/carousel";
import Group from "./components/pages/avatarGroup";
import { useEffect } from "react";
import { getUser } from "./redux/user/user";
import { PrivateRoute } from "./components/helpers/privateRoute";
import { PublicRoute } from "./components/helpers/publicRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
          <Route path="/check-email" element={<PublicRoute><CheckEmail /></PublicRoute>} />
          <Route path="/reset-password" element={<PublicRoute><ResetPassword /></PublicRoute>} />
          <Route path="/confirm-reset" element={<PublicRoute><ConfirmReset /></PublicRoute>} />
          <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
          <Route path="/upload" element={<PrivateRoute><UploadImage /></PrivateRoute>} />
          <Route path="/avatar-detail" element={<PrivateRoute><AvatarDetail /></PrivateRoute>} />
          <Route path="/setting" element={<PrivateRoute><Setting /></PrivateRoute>} />
          <Route path="/image-crop" element={<PrivateRoute><ImageCrop /></PrivateRoute>} />
          <Route path="/success" element={<PrivateRoute><Success /></PrivateRoute>} />
          <Route path="/my-avatars" element={<PrivateRoute><MyAvatars /></PrivateRoute>} />
          <Route path="/my-avatars/:id" element={<PrivateRoute><Group /></PrivateRoute>} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
    </Router>
  );
}

export default App;
