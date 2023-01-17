import MainLayout from "../../layout/mainLayout";
import NotCreated from "../myAvatars/notCreated";
import Waiting from "../myAvatars/waiting";

const MyAvatars = () => {
  const loading = true;
  const created = true;
  return (
    <MainLayout>
      {!created ? (
        <NotCreated />
      ) : loading ? (
       <Waiting />
      ) : null}
    </MainLayout>
  );
};

export default MyAvatars;
