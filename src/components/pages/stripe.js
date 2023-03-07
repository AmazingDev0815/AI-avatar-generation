import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { depositPayment } from "../../redux/user/user";

export const Payment = () => {
  const store = useSelector((state) => state.auth);
  const queryParameters = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionId = queryParameters.get("sessionId");

  useEffect(() => {
    if (store.userData.credit >= 100) {
      navigate("/upload");
    } else {
      if (sessionId) {
        dispatch(depositPayment(sessionId));
      } else {
        window.location = process.env.REACT_APP_STRIPE;
      }
    }
  }, [dispatch, sessionId, store.userData.credit, navigate]);

  return <div></div>;
};
