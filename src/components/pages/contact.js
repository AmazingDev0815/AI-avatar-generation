import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../../layout/mainLayout";
import { contactUs } from "../../redux/user/user";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const SendMessage = (e) => {
    e.preventDefault();
    handleValidate();
  };

  const handleValidate = () => {
    let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    setError({
      email: email.length
        ? emailValid
          ? ""
          : "Please confirm your email"
        : "Please enter your email",
      message: message.length ? "" : "Please leave a message",
      firstName: firstName.length ? "" : "Please enter your firstname",
      lastName: lastName.length ? "" : "Please enter your lastname",
    });
  };

  useEffect(() => {
    if (
      error.email === "" &&
      error.firstName === "" &&
      error.lastName === "" &&
      error.message === ""
    ) {
      const data = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        message: message,
      };
      dispatch(contactUs(data));
      setMessage("");
    }
  }, [error, dispatch, email, firstName, lastName, message]);

  return (
    <MainLayout>
      <div
        className="w-3/4 flex flex-1 flex-col justify-center items-center mb-40 md:px-10"
        id="contact"
      >
        <div className="text-center md:px-4 lg:px-16">
          <h1 className="font-poppinsSemiBold text-4xl sm:text-5xl mt-16">
            Contact Us
          </h1>
          <p className="mt-1 text-sm sm:text-lg text-gray-600">
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>
        <div className="w-full sm:px-10 mt-16">
          <form className="flex flex-col items-center" onSubmit={SendMessage}>
            <div className="flex flex-col sm:flex-row w-full">
              <div className="w-full sm:w-1/2 sm:mr-8">
                <label
                  htmlFor="first_name"
                  className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-gray-300 focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-base rounded-lg mt-1 block w-full py-2.5 px-3.5"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {error.firstName && (
                  <div className="font-poppinsMedium mt-2 text-red-500">
                    {error.firstName}
                  </div>
                )}
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="last_name"
                  className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="border border-gray-300 focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-base rounded-lg mt-1 block w-full py-2.5 px-3.5"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
                {error.lastName && (
                  <div className="font-poppinsMedium mt-2 text-red-500">
                    {error.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full mt-6">
              <label
                htmlFor="email"
                className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="border border-gray-300 focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-base rounded-lg mt-1 block w-full py-2.5 px-3.5"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <div className="font-poppinsMedium mt-2 text-red-500">
                  {error.email}
                </div>
              )}
            </div>
            <div className="w-full mt-6">
              <label
                htmlFor="message"
                className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
              >
                Message
              </label>
              <textarea
                rows={5}
                id="message"
                className="border border-gray-300 focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-base rounded-lg mt-1 block w-full py-2.5 px-3.5 resize-none"
                placeholder="Leave us a message..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              {error.message && (
                <div className="font-poppinsMedium mt-2 text-red-500">
                  {error.message}
                </div>
              )}
            </div>
            <button
              className="bg-primary-600 rounded-lg w-full py-2.5 mt-8 text-white font-poppinsSemiBold text-sm"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
