import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";
import MainLayout from "../../layout/mainLayout";
import { getImageCollections } from "../../redux/product/product";
import Created from "../myAvatars/created";
import NotCreated from "../myAvatars/notCreated";
import Waiting from "../myAvatars/waiting";

const MyAvatars = () => {
  const store = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [created, setCreated] = useState(store.products?.items?.length > 0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getImageCollections());
  }, []);

  useEffect(() => {
    setCreated(store.products?.items?.length > 0);
    if (!store.taskState.length) {
      setLoading(false);
    } else if (
      store.taskState
        ?.map((item) => item.status.value)
        .filter((i) => i >= 0 && i < 10).length
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [store]);

  return (
    <MainLayout>
      {store.productLoading ? (
        <div>
          <div className="flex flex-1 justify-center items-center h-screen">
            <MoonLoader
              size={150}
              color="#36d7b7"
              loading={true}
              cssOverride={{}}
              speedMultiplier={1}
            />
          </div>
        </div>
      ) : created ? (
        <Created />
      ) : loading ? (
        <Waiting />
      ) : (
        <NotCreated />
      )}
    </MainLayout>
  );
};

export default MyAvatars;
