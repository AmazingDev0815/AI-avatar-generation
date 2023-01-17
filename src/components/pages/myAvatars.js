import MainLayout from "../../layout/mainLayout";
import Created from "../myAvatars/created";
import NotCreated from "../myAvatars/notCreated";
import Waiting from "../myAvatars/waiting";

const MyAvatars = () => {
  const loading = false;
  const created = false;
  return (
    <MainLayout>
      {!created ? <NotCreated /> : loading ? <Waiting /> : <Created />}
    </MainLayout>
  );
};

export default MyAvatars;
