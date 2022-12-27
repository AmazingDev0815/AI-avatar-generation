import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/auth/forgotPassword";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
