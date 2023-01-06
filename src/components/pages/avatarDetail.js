import { useEffect, useState } from "react";
import Select from "react-select";
import MainLayout from "../../layout/mainLayout";

const genderOptions = [
  {label:'Female', value: 'Female'},
  {label: 'Male', value: 'Male'},
  {label: 'Other', value: 'Other'}
]

const AvatarDetail = () => {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [avatarName, setAvatarName] = useState('');
  const [disable, setDisable] = useState(true);
  console.log(selectedOption)
  useEffect(() => {
    console.log('disable ==> ', selectedOption !== null && avatarName.length > 0)
    setDisable(selectedOption !== null && avatarName.length > 0)
  }, [selectedOption, avatarName])

  return (
    <MainLayout>
      <div className="h-full flex flex-col items-center px-10" id="upload">
        <div className="w-3/4 text-center md:px-16">
          <h1 className="font-poppinsBold text-3xl mt-16">Avatar Details</h1>
          <p className="mt-1 text-gray-600">
            In order to create the best possible avatar for you, we ask that you
            provide a name and gender. By knowing your avatar's gender, we can
            ensure that the generated images are as accurate as possible.
          </p>
        </div>
        <div className="w-1/3 mt-6">
          <form className="flex flex-col items-center">
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
                  className="border border-gray-300 text-base rounded-lg mt-1 block w-full py-2.5 px-3.5"
                  placeholder="Avatar Name"
                  onChange={setAvatarName}
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
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderRadius: '8px',
                      borderColor: '#D0D5DD',
                      paddingBottom: "3px",
                      paddingTop: "3px",
                    }),
                  }}
                />
              </div>
            </div>
            <button
                className="bg-primary-600 rounded-lg px-11 disabled:bg-primary-200 py-2.5 mt-6 text-white font-poppinsBold text-sm"
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
