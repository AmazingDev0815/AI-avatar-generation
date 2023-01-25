import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import MainLayout from "../../layout/mainLayout";

const genderOptions = [
  { label: "Female", value: "Female" },
  { label: "Male", value: "Male" },
  { label: "Other", value: "Other" },
];

const AvatarDetail = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [avatarName, setAvatarName] = useState("");
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setDisable(!(!!selectedOption?.value && !!avatarName));
  }, [selectedOption, avatarName]);

  const SubmitInfo = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <MainLayout>
      <div
        className="flex flex-1 flex-col justify-center items-center mb-40 md:px-10"
        id="upload"
      >
        <div className="w-3/4 text-center md:px-4 lg:px-16">
          <h1 className="font-poppinsSemiBold text-3xl mt-16">
            Avatar Details
          </h1>
          <p className="mt-1 text-gray-600">
            In order to create the best possible avatar for you, we ask that you
            provide a name and gender. By knowing your avatar's gender, we can
            ensure that the generated images are as accurate as possible.
          </p>
        </div>
        <div className="lg:w-1/3 md:w-2/3 w-full px-10 mt-6">
          <form className="flex flex-col items-center" onSubmit={SubmitInfo}>
            <div className="bg-primary-50 rounded-xl p-3 w-full">
              <div>
                <label
                  htmlFor="avatar_name"
                  className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
                >
                  Whats your Avatar name
                </label>
                <input
                  type="text"
                  id="avatar_name"
                  className="border border-gray-300 focus:shadow-primary focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-base rounded-lg mt-1 block w-full py-2.5 px-3.5"
                  placeholder="Avatar Name"
                  onChange={(e) => setAvatarName(e.target.value)}
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="gender"
                  className="block mb-1.5 text-sm font-poppinsMedium text-gray-900"
                >
                  Select your gender
                </label>
                <Select
                  placeholder="Select gender"
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={genderOptions}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderWidth: state.isFocused ? "2px" : "1px",
                      borderRadius: "8px",
                      borderColor: state.isFocused ? "#7F56D9" : "#D0D5DD",
                      paddingBottom: "3px",
                      paddingTop: "3px",
                      boxShadow: state.isFocused
                        ? "0px 0px 6px #7F56D9"
                        : "none",
                      "&:hover": {
                        border: baseStyles.border,
                      },
                    }),
                  }}
                />
              </div>
            </div>
            <button
              className="bg-primary-600 rounded-lg px-11 disabled:bg-primary-200 py-2.5 mt-6 text-white font-poppinsSemiBold text-sm"
              type="submit"
              disabled={disable}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default AvatarDetail;
