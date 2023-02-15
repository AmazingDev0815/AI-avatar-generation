import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../layout/mainLayout";
import Created from "../myAvatars/created";
import NotCreated from "../myAvatars/notCreated";
import Waiting from "../myAvatars/waiting";

const MyAvatars = () => {
  const store = useSelector((state) => state.product);
  const [created, setCreated] = useState(store.products?.items?.length > 0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!store.taskState.length) {
      setLoading(false);
    } else if (
      !store.taskState
        ?.map((item) => item.status.value)
        .filter((i) => i === 0)[0]
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <MainLayout>
      {created ? <Created /> : loading ? <Waiting /> : <NotCreated />}
    </MainLayout>
  );
};

export default MyAvatars;
