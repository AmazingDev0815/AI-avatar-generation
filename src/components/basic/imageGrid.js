import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

// Rendering individual images
const Imagetag = ({ image, removeImage }) => {
  const [crop, setCrop] = useState();

  const [disableCrop, setDisableCrop] = useState(false);
  const [imgWidth, setImgWidth] = useState(176);
  const [imgHeight, setImgHeight] = useState(176);

  const img = new Image();
  img.src = image.src;
  img.onload = function () {
    setImgWidth(img.naturalWidth);
    setImgHeight(img.naturalHeight);
    setDisableCrop(imgWidth === imgHeight);
  };

  const handleRemove = () => {
    removeImage(image);
  };
  return (
    <div className="file-item mx-3 my-3 relative">
      <button
        className="absolute bg-primary-600 text-white p-1 z-10 rounded top-2.5 right-2.5"
        onClick={handleRemove}
      >
        <XMarkIcon width="12" height="12" />
      </button>
      <div className="w-32 h-32 md:w-40 md:h-40 lg:w-[236px] lg:h-[236px] flex justify-center items-center">
        <ReactCrop
          crop={crop}
          onChange={setCrop}
          aspect={1}
          locked={disableCrop}
        >
          <img
            alt={`img - ${image.id}`}
            src={image.src}
            className={`file-img rounded-xl ${
              imgHeight > imgWidth
                ? "w-auto h-32 md:w-auto md:h-40 lg:w-auto lg:h-[236px]"
                : "w-32 h-auto md:w-40 md:h-auto lg:w-[236px] lg:h-auto"
            }`}
          />
        </ReactCrop>
      </div>
    </div>
  );
};

// ImageList Component//
const ImageGrid = ({ images, remove }) => {
  // render each image by calling Image component
  const renderImage = (image) => {
    const index = (file) => {
      remove(file);
    };
    return (
      <Imagetag image={image} key={`${image.id}-image`} removeImage={index} />
    );
  };
  // Return the list of files//
  return images.map(renderImage);
};
export default ImageGrid;
