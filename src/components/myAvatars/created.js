import Collection from "../basic/collection";

const Created = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center mb-40 p-5">
      <div
        className="font-poppinsBold text-4xl md:text-5xl text-gray-900 mt-3 text-center"
        id="title"
      >
        Your Created Avatars
      </div>
      <div
        className="flex flex-col text-sm md:text-base text-gray-600 mt-6 text-center md:w-2/3 px-5 w-full"
        id="support_text"
      >
        Here you can view all of the avatars our AI engine has created for you.
        Browse through your previous creations and select the one that best
        represents you. You can also download or delete any of the avatars from
        this page. Enjoy!
      </div>
      <Collection />
    </div>
  );
};

export default Created;
