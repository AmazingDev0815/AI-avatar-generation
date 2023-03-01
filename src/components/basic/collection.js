import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";
import { LocalImg } from "./imgProvider";
import { useDispatch, useSelector } from "react-redux";
import { getImageCollection } from "../../redux/product/product";

const Collection = ({id}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector(state => state.product.products);

  const collection = store.items.filter(item => item.id === id)[0];
  const goToCollection = () => {
    dispatch(getImageCollection(id));
    navigate(`/my-avatars/${id}`);
  };
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 6,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full px-8 md:px-16 py-8 mt-16 shadow-xl rounded-3xl">
      <h1
        className="font-poppinsBold text-3xl text-gray-900 mt-8"
        id="name"
      >
        {collection.name}
      </h1>
      <span className="text-gray-600 text-sm" id="created_date">
        <Moment format="DD.MM.YYYY.">{collection.createdDate}</Moment> 
      </span>
      <div className="flex mt-6 w-full" id="image_gallery">
        <Slider {...settings}>
          {collection.images.map((item, key) => <img key={key} alt="demo" src={item.url?.url} className="rounded-xl mr-9" />)}
          {/* <img alt="demo" src={LocalImg.demo_1} className="rounded-xl mr-9" />
          <img alt="demo" src={LocalImg.demo_2} className="rounded-xl mr-9" />
          <img alt="demo" src={LocalImg.demo_3} className="rounded-xl mr-9" />
          <img alt="demo" src={LocalImg.demo_4} className="rounded-xl mr-9" />
          <img alt="demo" src={LocalImg.demo_5} className="rounded-xl mr-9" />
          <img alt="demo" src={LocalImg.demo_6} className="rounded-xl mr-9" /> */}
        </Slider>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-primary-600 rounded-lg px-11 py-2.5 mt-6 text-white font-poppinsSemiBold text-sm"
          onClick={goToCollection}
        >
          View Collection
        </button>
      </div>
    </div>
  );
};

export default Collection;
