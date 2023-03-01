import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import Collection from "../basic/collection";

const Created = () => {
  const store = useSelector((state) => state.product);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
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
    <div className="flex flex-1 w-full flex-col justify-center items-center mb-40 p-5">
      <div
        className="font-poppinsBold text-4xl md:text-5xl text-gray-900 mt-3 text-center"
        id="title"
      >
        Your Created Avatars
      </div>
      <div
        className="flex flex-col text-sm md:text-base text-gray-600 mt-6 text-center md:w-2/3 px-3 md:px-5 w-full"
        id="support_text"
      >
        Here you can view all of the avatars our AI engine has created for you.
        Browse through your previous creations and select the one that best
        represents you. You can also download or delete any of the avatars from
        this page. Enjoy!
      </div>
      {store.products.items.map((item, key) => (
        <Collection key={key} id={item.id} />
      ))}
      {loading &&
        store.taskState
          ?.filter(
            (item) => item?.status.value >= 0 && item?.status.value < 10 && item
          )
          .map((task, index) => (
            <div key={index} className="flex flex-col w-full px-8 md:px-16 py-8 mt-16 shadow-xl rounded-3xl">
              <h1
                className="font-poppinsBold text-3xl text-gray-900 mt-8"
                id="name"
              >
                {task.name}
              </h1>
              <span className="text-gray-600 text-sm" id="created_date">
                <Moment format="DD.MM.YYYY.">{task.createdDate}</Moment>
              </span>
              <div className="flex flex-col self-center mt-6 w-2/3" id="content">
                <h1 className="text-3xl text-gray-900 text-center font-poppinsSemiBold">Just a little longer...</h1>
                <p className="text-gray-600 text-center mt-5">Hold tight, your new avatars are being crafted with care by our AI wizard. In the meantime, why not grab a cup of coffee or take a quick walk. We'll send you an email as soon as they're ready for unveil.</p>
              </div>
              <div className="flex justify-center mt-10">
                <button
                  className="bg-primary-600 rounded-lg px-11 py-2.5 text-white font-poppinsSemiBold text-sm disabled:bg-primary-200"
                  disabled={loading}
                >
                  View Collection
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Created;
