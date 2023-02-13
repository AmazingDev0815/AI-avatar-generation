import cuid from "cuid";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layout/mainLayout";
import Dropzone from "../basic/dropZone";
import ImageGrid from "../basic/imageGrid";
import { LocalImg } from "../basic/imgProvider";

const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [imageWithCrop, setImageWithCrop] = useState([]);

  const navigate = useNavigate();
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result, crop: {} },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  // to limit image number

  useEffect(() => {
    if (images.length > 20) {
      setImages([...images.slice(0, 20)]);
    }
  }, [images]);

  const handleClick = () => {
    navigate("/avatar-detail");
  };

  const remove = (file) => {
    const newFiles = [...images];
    const newFilesWithCrop = [...imageWithCrop];
    newFiles.splice(newFiles.indexOf(file), 1);
    newFilesWithCrop.splice(newFilesWithCrop.findIndex(item => item.id === file.id), 1);
    setImages(newFiles);
    setImageWithCrop(newFilesWithCrop);
  };

  const crops = (crop) => {
    const newImages = [...imageWithCrop];
    if(newImages.filter(item => item.id === crop.id).length > 0) {
      // crop changed
      newImages.splice(newImages.findIndex(item => item.id === crop.id), 1);
      newImages.push(crop);
    } else {
      // add new crop
      newImages.push(crop);
    }

    setImageWithCrop(newImages);
    console.log("newImages", newImages);
  };

  return (
    <MainLayout>
      <div
        className="flex flex-col flex-1 justify-center items-center px-10"
        id="upload"
      >
        <h1 className="font-poppinsSemiBold text-3xl mt-16">
          Upload Your Images
        </h1>
        <p className="mt-1 text-gray-600">
          Upload 20 photos close up profile pictures of you or your loved one
          and we will generate a new set of avatars.
        </p>
        <p className="text-gray-600">
          You will receive images with our premade custom styles.
        </p>
        <div
          className="mt-6 text-primary-400 text-lg rounded-xl bg-primary-50 px-3 py-2"
          id="uploaded_number"
        >
          <span className="font-poppinsSemiBold text-primary-600 text-3xl">
            {images.length}
          </span>{" "}
          / 20
        </div>
        <div
          className="my-6 flex flex-wrap justify-center items-center"
          id="upload_image"
        >
          <ImageGrid images={images} remove={remove} crops={crops} />
          {images.length < 20 ? (
            <Dropzone onDrop={onDrop} accept={"image/*"} state={1} />
          ) : null}
        </div>
        <ul className="flex flex-col text-center mt-6 " id="description">
          <span>
            <span className="text-primary-600 font-poppinsSemiBold mr-2">
              ●
            </span>
            Make sure only one person is in the frame
          </span>
          <span>
            <span className="text-primary-600 font-poppinsSemiBold mr-2">
              ●
            </span>
            Use only close-up face images
          </span>
          <span>
            <span className="text-primary-600 font-poppinsSemiBold mr-2">
              ●
            </span>
            Avoid pics with sunglasses
          </span>
        </ul>
        {images.length > 0 ? (
          <div className="h-[200px]">
            {images.length === 20 && (
              <button
                className="bg-primary-600 rounded-lg px-11 py-2.5 mt-6 text-white font-poppinsSemiBold text-sm"
                onClick={handleClick}
              >
                Next
              </button>
            )}
          </div>
        ) : (
          <div className="mt-6 mb-20 text-center" id="examples">
            <span className="font-poppinsSemiBold text-3xl">Examples: </span>
            <div className="mt-6 flex" id="upload_example_group">
              <div className="mr-6 ">
                <img alt="example" src={LocalImg.upload_1} />
              </div>
              <div className="mr-6 ">
                <img alt="example" src={LocalImg.upload_2} />
              </div>
              <div className="mr-6 ">
                <img alt="example" src={LocalImg.upload_3} />
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default UploadImage;
