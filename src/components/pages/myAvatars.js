import MainLayout from "../../layout/mainLayout";

const MyAvatars = () => {
  const loading = true;
  const created = true;
  return (
    <MainLayout>
      {!created ? (
        <div className="flex flex-1 flex-col justify-center items-center mb-40 p-5">
          <img
            src={require("../../assets/img/pensive.gif")}
            alt="Don't have any avatars"
            className="w-32 h-32"
          />
          <h1 className="font-poppinsBold text-4xl md:text-5xl text-gray-900 mt-3 text-center">
            Nothing created yet...
          </h1>
          <div
            className="flex flex-col text-sm md:text-base text-gray-600 mt-6 text-center"
            id="support_text"
          >
            <span>You don’t have any avatars created yet.</span>
            <span>
              Let’s sort that out. Click on the Create button to get started!
            </span>
          </div>
          <button className="bg-primary-600 rounded-lg px-11 py-2.5 mt-6 text-white font-poppinsSemiBold text-sm">
            Create
          </button>
        </div>
      ) : loading ? (
        <div className="flex flex-1 flex-col justify-center items-center mb-40 p-5">
          <img
            src={require("../../assets/img/party.gif")}
            alt="Don't have any avatars"
            className="w-32 h-32"
          />
          <h1 className="font-poppinsBold text-4xl md:text-5xl text-gray-900 mt-3 text-center">
            Just a little longer...
          </h1>
          <div
            className="flex flex-col text-sm md:text-base text-gray-600 mt-6 text-center md:w-2/3 px-5 w-full"
            id="support_text"
          >
            <span>
              Hold tight, your new avatars are being crafted with care by our AI
              wizard. In the meantime, why not grab a cup of coffee or take a
              quick walk? We'll send you a notification as soon as they're ready
              for unveil.
            </span>
          </div>
        </div>
      ) : null}
    </MainLayout>
  );
};

export default MyAvatars;
