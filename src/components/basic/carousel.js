import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div>
          <img
            src={require("../../assets/img/demo(1).png")}
            alt="Credit to Joshua Earle on Unsplash"
          />
        </div>
        <div>
          <img
            src={require("../../assets/img/demo(2).png")}
            alt="Credit to Alisa Anton on Unsplash"
          />
        </div>
        <div>
          <img
            src={require("../../assets/img/demo(3).png")}
            alt="Credit to Igor Ovsyannykov on Unsplash"
          />
        </div>
        <div>
          <img
            src={require("../../assets/img/demo(4).png")}
            alt="Credit to Pierre Châtel-Innocenti on Unsplash"
          />
        </div>
        <div>
          <img
            src={require("../../assets/img/demo(5).png")}
            alt="Credit to Richard Nolan on Unsplash"
          />
        </div>
        <div>
          <img
            src={require("../../assets/img/demo(6).png")}
            alt="Credit to Cristina Gottardi on Unsplash"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
