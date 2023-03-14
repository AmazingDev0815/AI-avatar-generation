import { useEffect, useMemo, useState } from "react";
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
  const taskLength = useMemo(
    () =>
      store.taskState
        ?.map((item) => item?.status.value)
        .filter((i) => i >= 0 && i < 10).length,
    [store.taskState]
  );
  const MINUTE_MS = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getTaskState());
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getImageCollections());
  }, [dispatch, taskLength]);

  useEffect(() => {
    setCreated(store.products?.items?.length > 0);
    if (!store.taskState.length) {
      setLoading(false);
    } else if (
      taskLength
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [store, taskLength]);

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
      ) : created || loading ? (
        <Created />
      ) : (
        <NotCreated />
      )}
    </MainLayout>
  );
};

export default MyAvatars;
