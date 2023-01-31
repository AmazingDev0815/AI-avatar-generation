import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  useEffect(() => {
    document.title = "MAVA: Awesome Avatar Generation";
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-reset" element={<ConfirmReset />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/avatar-detail" element={<AvatarDetail />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/image-crop" element={<ImageCrop />} />
        <Route path="/success" element={<Success />} />
        <Route path="/my-avatars" element={<MyAvatars />} />
        <Route path="/my-avatars/:id" element={<Group />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </Router>
  );
}

export default App;
