import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { depositPayment } from "../../redux/user/user";

export const Payment = () => {
  const store = useSelector((state) => state.auth);
  const queryParameters = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.userData.credit >= 100) {
      navigate("/upload");
    } else {
      let sessionId = queryParameters.get("sessionId");
      if (sessionId) {
        dispatch(depositPayment(sessionId));
      } else {
        window.location = "https://buy.stripe.com/test_8wMg0n0hu4Vv5bOdQR";
      }
    }
  }, []);

  return <div></div>;
};
