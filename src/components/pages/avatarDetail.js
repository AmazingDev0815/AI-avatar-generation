import MainLayout from "../../layout/mainLayout";

const AvatarDetail = () => {
  return (
    <MainLayout>
      <div className="h-full flex flex-col items-center px-10" id="upload">
        <div className="w-3/4 text-center px-16">
          <h1 className="font-poppinsBold text-3xl mt-16">Avatar Details</h1>
          <p className="mt-1 text-gray-600">
            In order to create the best possible avatar for you, we ask that you
            provide a name and gender. By knowing your avatar's gender, we can
            ensure that the generated images are as accurate as possible.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AvatarDetail;
