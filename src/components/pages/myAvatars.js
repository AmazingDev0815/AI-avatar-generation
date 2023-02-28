import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";
import MainLayout from "../../layout/mainLayout";
import { getImageCollections, getTaskState } from "../../redux/product/product";
import Created from "../myAvatars/created";
import NotCreated from "../myAvatars/notCreated";

const MyAvatars = () => {
  const store = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [created, setCreated] = useState(store.products?.items?.length > 0);
  const [loading, setLoading] = useState(false);
  const MINUTE_MS = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getTaskState())
    }, MINUTE_MS);
  
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])
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
              color="#7F56D9"
              loading={true}
              cssOverride={{}}
              speedMultiplier={1}
            />
          </div>
        </div>
      ) : (created || loading) ? (
        <Created />
      ) : (
        <NotCreated />
      )}
    </MainLayout>
  );
};

export default MyAvatars;
