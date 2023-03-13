import cuid from "cuid";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import MainLayout from "../../layout/mainLayout";
import { getUpoadToken, uploadUserImages } from "../../redux/product/product";
import Dropzone from "../basic/dropZone";
import ImageGrid from "../basic/imageGrid";
import { LocalImg } from "../basic/imgProvider";
import PreviewModal from "../basic/uploadModal";
import Resizer from "react-image-file-resizer";

const UploadImage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productStore = useSelector((state) => state.product);

  const [images, setImages] = useState([]);
  const [imageWithCrop, setImageWithCrop] = useState([]);

  const newImages = [...imageWithCrop];

  const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.map(async (file, key) => {
        if (imageWithCrop.length + key <= 19) {
          const reader = new FileReader();
          const image = await resizeFile(file);
          reader.onload = function (e) {
            setImages((prevState) => [
              ...prevState,
              { id: cuid(), src: e.target.result, file: image },
            ]);
          };
          reader.readAsDataURL(image);
          return image;
        }
        return null
      });
    },
    [imageWithCrop]
  );

  const onSubmit = async () => {
    dispatch(uploadUserImages({uploadToken: productStore.uploadToken?.token, imageWithCrop}));
  };

  useEffect(() => {
    dispatch(getUpoadToken());
  }, [dispatch])

  useEffect(() => {
    if (images.length > 20) {
      setImages([...images.slice(0, 20)]);
    }
  }, [images]);

  useEffect(() => {
    if (productStore.uploadSuccess) {
      navigate("/avatar-detail");
    }
  }, [productStore, navigate]);

  const remove = (file) => {
    const newFiles = [...images];
    newFiles.splice(newFiles.indexOf(file), 1);
    newImages.splice(
      newImages.findIndex((item) => item.id === file.id),
      1
    );
    setImages(newFiles);
    setImageWithCrop(newImages);
  };

  const crops = (crop) => {
    if (newImages.filter((item) => item.id === crop.id).length > 0) {
      // crop changed
      newImages.splice(
        newImages.findIndex((item) => item.id === crop.id),
        1
      );
      newImages.push(crop);
    } else {
      // add new crop
      newImages.push(crop);
    }

    setImageWithCrop(newImages);
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
        <p className="mt-1 text-gray-600 text-center">
          Upload 20 photos close up profile pictures of you or your loved one
          and we will generate a new set of avatars.
        </p>
        <p className="text-gray-600 text-center">
          You will receive images with our premade custom styles.
        </p>
        {productStore.productLoading ? (
          <MoonLoader
            className="mt-40"
            size={150}
            color="#7F56D9"
            loading={true}
            cssOverride={{}}
            speedMultiplier={1}
          />
        ) : (
          <div className="flex flex-col justify-center items-center">
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
            {
              images.length > 0 ? (
                <div className="h-[200px]">
                  {(images.length <= 20 && images.length >= 10) && (
                    <button
                      className="bg-primary-600 rounded-lg px-11 py-2.5 mt-6 text-white font-poppinsSemiBold text-sm"
                      onClick={onSubmit}
                    >
                      Next
                    </button>
                  )}
                </div>
              ) : (
                <div className="mt-6 mb-20 text-center" id="examples">
                  <span className="font-poppinsSemiBold text-3xl">
                    Examples:{" "}
                  </span>
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
              )
            }
          </div>
        )}
      </div>
      <PreviewModal />
    </MainLayout>
  );
};

export default UploadImage;
