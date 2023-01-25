import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";

const Payment = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const country = countryList().getData();
  const navigate = useNavigate();
  const payClick = (e) => {
    e.preventDefault();
    navigate("/upload");
  };
  return (
    <div className="h-full md:h-screen flex px-10 py-[100px] md:px-10 md:py-[100px] lg:p-[100px] flex-col md:flex-row justify-center items-center font-poppinsRegular">
      <div
        className="h-full w-full flex flex-col justify-between md:w-1/2 md:pl-5 md:pr-10 lg:pr-[110px]"
        id="productList"
      >
        <div>
          <Link
            to="/"
            className="text-sm font-poppinsSemiBold flex items-center"
          >
            <ArrowLeftIcon className="w-4 align-middle mr-2" />
            <div className="bg-primary-600 text-primary-200 h-8 w-8 rounded-full justify-center items-center flex mr-2">
              M
            </div>
            <span>Mava</span>
          </Link>
          <div className="mt-10 ml-11">
            <span className="text-gray-600">Pay Mava</span>
            <h1 className="text-gray-900 mt-2 text-4xl font-poppinsSemiBold">
              $ 10.00
            </h1>
          </div>
          <div className="mt-8 md:ml-11 flex flex-col w-full">
            <div id="avatar" className="flex">
              <div id="avatarModels" className="flex w-12 h-12">
                <img
                  alt="avatarModel"
                  className="w-6 h-12"
                  src={require("../../assets/img/price1.png")}
                />
                <img
                  alt="avatarModel"
                  className="w-6 h-12"
                  src={require("../../assets/img/price2.png")}
                />
              </div>
              <div className="pl-3.5 flex flex-col flex-1">
                <span className="text-sm text-gray-900 font-poppinsMedium mb-0.5">
                  Avatar Model
                </span>
                <span className="text-xs text-gray-600 font-poppinsMedium">
                  Mava.fun - Create a one-of-a-kind AI art portrait of yourself
                  or a loved one. Perfect for social media profile pictures,
                  gifts, or just for fun. Purchase includes 50 Basic Pack
                  images. Simply upload a portrait and let our AI algorithms do
                  the rest.
                </span>
              </div>
              <div className="text-sm text-gray-900 pl-6">$10.00</div>
            </div>
            <div id="totalPrice" className="mt-6 pl-[62px]">
              <div className="flex justify-between text-sm text-gray-900 border-t border-gray-400">
                <span>Total due</span>
                <span>$10.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20 md:ml-11 hidden md:flex font-poppinsMedium text-xs text-gray-500">
          <div className="flex items-center">
            <span className="mr-1.5">Powered by</span>
            <a href="#" className="mr-5">
              <svg
                width="34"
                height="14"
                viewBox="0 0 34 14"
                fill="currentColor"
              >
                <g clipPath="url(#clip0_6163_405563)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.0448 7.23345C34.0448 4.84094 32.8721 2.95312 30.6308 2.95312C28.3801 2.95312 27.0183 4.84094 27.0183 7.21476C27.0183 10.0278 28.6259 11.4483 30.9334 11.4483C32.0588 11.4483 32.9099 11.1959 33.553 10.8408V8.97169C32.9099 9.28949 32.1723 9.4857 31.2361 9.4857C30.3187 9.4857 29.5054 9.16797 29.4014 8.06519H34.0259C34.0259 7.94367 34.0448 7.45773 34.0448 7.23345ZM29.373 6.34558C29.373 5.28953 30.0255 4.85029 30.6213 4.85029C31.1982 4.85029 31.8129 5.28953 31.8129 6.34558H29.373Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.368 2.95312C22.4412 2.95312 21.8455 3.38302 21.5145 3.68208L21.3916 3.10265H19.311V13.9997L21.6752 13.5043L21.6847 10.8595C22.0252 11.1025 22.5264 11.4483 23.3586 11.4483C25.0514 11.4483 26.5928 10.1025 26.5928 7.14C26.5834 4.42973 25.023 2.95312 23.368 2.95312ZM22.8006 9.39225C22.2427 9.39225 21.9117 9.19597 21.6847 8.953L21.6752 5.48579C21.9211 5.21477 22.2616 5.02786 22.8006 5.02786C23.6612 5.02786 24.257 5.98111 24.257 7.20538C24.257 8.45768 23.6707 9.39225 22.8006 9.39225Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0576 2.40183L18.4313 1.89716V0L16.0576 0.495319V2.40183Z"
                  />
                  <path d="M18.4313 3.11182H16.0576V11.2892H18.4313V3.11182Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5138 3.80356L13.3625 3.11198H11.3198V11.2894H13.684V5.74745C14.242 5.02783 15.1877 5.15868 15.4809 5.26148V3.11198C15.1782 2.99984 14.0718 2.79423 13.5138 3.80356Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.78548 1.08423L6.47796 1.5702L6.46851 9.05602C6.46851 10.4392 7.5182 11.4579 8.91787 11.4579C9.69328 11.4579 10.2607 11.3177 10.5728 11.1495V9.2523C10.2702 9.37382 8.77599 9.80369 8.77599 8.42056V5.10285H10.5728V3.11223H8.77599L8.78548 1.08423Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.39259 5.4858C2.39259 5.12131 2.69522 4.98113 3.19642 4.98113C3.91515 4.98113 4.82301 5.19608 5.54174 5.57924V3.38302C4.75681 3.07462 3.98135 2.95312 3.19642 2.95312C1.27668 2.95312 0 3.94376 0 5.59794C0 8.17733 3.59362 7.76615 3.59362 8.87824C3.59362 9.30818 3.21534 9.44832 2.68576 9.44832C1.90083 9.44832 0.898407 9.13059 0.104026 8.70072V10.925C0.983514 11.2988 1.87246 11.4577 2.68576 11.4577C4.65279 11.4577 6.00512 10.495 6.00512 8.82217C5.99567 6.03718 2.39259 6.53251 2.39259 5.4858Z"
                  />
                </g>
              </svg>
            </a>
            <div className="h-5 w-[1px] bg-gray-400 mr-5"></div>
            <a href="#" className="mr-[18px]">
              Terms
            </a>
            <a href="#" className="mr-[18px]">
              Privacy
            </a>
          </div>
        </div>
      </div>
      <div
        className="h-full w-full md:w-1/2 md:pl-10 lg:pl-[110px] pt-20 md:pt-0 flex flex-col items-center md:items-start"
        id="payForm"
      >
        <h1 className="text-gray-900 text-xl font-poppinsSemiBold">
          Pay with card
        </h1>
        <form
          onSubmit={payClick}
          className="flex justify-center flex-col items-center"
        >
          <div className="mt-8 w-5/6 md:w-full">
            <label
              htmlFor="email"
              className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`border text-base rounded-lg focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none block w-full py-2.5 px-3.5 shadow-md ${
                error.email
                  ? "text-red-500 border-red-500"
                  : "border-gray-300 text-gray-500"
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && (
              <div className="font-poppinsMedium mt-2 text-red-500">
                {error.email}
              </div>
            )}
          </div>
          <div className="mt-8 w-5/6 md:w-full">
            <label
              htmlFor="email"
              className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
            >
              Card Information
            </label>
            <input
              type="text"
              id="email"
              className={`border text-base rounded-t-lg focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none block w-full py-2.5 px-3.5 ${
                error.email
                  ? "text-red-500 border-red-500"
                  : "border-gray-300 text-gray-500"
              }`}
              placeholder="1234 1234 1234 1234"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex">
              <input
                type="text"
                id="email"
                className={`border text-base rounded-bl-lg focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none block w-1/2 py-2.5 px-3.5 shadow-md ${
                  error.email
                    ? "text-red-500 border-red-500"
                    : "border-gray-300 text-gray-500"
                }`}
                placeholder="MM / YY"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                id="email"
                className={`border text-base rounded-br-lg focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none block w-1/2 py-2.5 px-3.5 shadow-md ${
                  error.email
                    ? "text-red-500 border-red-500"
                    : "border-gray-300 text-gray-500"
                }`}
                placeholder="CVC"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-8 w-5/6 md:w-full">
            <label
              htmlFor="email"
              className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
            >
              Name on card
            </label>
            <input
              type="text"
              id="email"
              className={`border text-base rounded-lg focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none block w-full py-2.5 px-3.5 shadow-md ${
                error.email
                  ? "text-red-500 border-red-500"
                  : "border-gray-300 text-gray-500"
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && (
              <div className="font-poppinsMedium mt-2 text-red-500">
                {error.email}
              </div>
            )}
          </div>
          <div className="mt-8 w-5/6 md:w-full">
            <label
              htmlFor="email"
              className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
            >
              Country or region
            </label>
            <Select
              isSearchable={true}
              options={country}
              // value={this.state.value}
              // onChange={this.changeHandler}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  paddingBottom: "3px",
                  paddingTop: "3px",
                }),
              }}
            />
            <input
              type="text"
              id="email"
              className={`border text-base rounded-b-lg leading-[22px] focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none block w-full py-[9px] px-3 shadow-md ${
                error.email
                  ? "text-red-500 border-red-500"
                  : "border-gray-300 text-gray-500"
              }`}
              placeholder="Zip"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && (
              <div className="font-poppinsMedium mt-2 text-red-500">
                {error.email}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="block w-5/6 md:w-full bg-primary-600 hover:bg-primary-700 mt-8 py-2 rounded text-white font-poppinsRegular mb-2"
          >
            Pay $10.00
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
