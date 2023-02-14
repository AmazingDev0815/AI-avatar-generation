import { useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../layout/mainLayout";
import Created from "../myAvatars/created";
import NotCreated from "../myAvatars/notCreated";
import Waiting from "../myAvatars/waiting";

const MyAvatars = () => {
  const store = useSelector(state => state.product);
  const [created, setCreated] = useState(store.products?.items?.length > 0);
  const loading = false;
  return (
    <MainLayout>
      {created ? <Created /> : loading ? <Waiting /> : <NotCreated />}
    </MainLayout>
  );
};

export default MyAvatars;
