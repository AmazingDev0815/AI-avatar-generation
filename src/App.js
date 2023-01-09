import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  useEffect(() => {
    document.title = "MAVA: Awesome Avatar Generation";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-reset" element={<ConfirmReset />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/avatar-detail" element={<AvatarDetail />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
