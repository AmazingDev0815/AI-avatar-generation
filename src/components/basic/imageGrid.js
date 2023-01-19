import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

// Rendering individual images
const Imagetag = ({ image, removeImage }) => {
  const [crop, setCrop] = useState({});
  const [disableCrop, setDisableCrop] = useState(false);
  const [imgWidth, setImgWidth] = useState(176);
  const [imgHeight, setImgHeight] = useState(176);

  const onImageLoad = (e) => {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
    setImgWidth(width);
    setImgHeight(height);
    setDisableCrop(width === height);
    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 100,
        },
        1 / 1,
        width,
        height
      ),
      width,
      height
    );

    setCrop(crop);
  };

  const onCropChange = (crop, percentCrop) => setCrop(percentCrop);

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
      {disableCrop ? (
        <img
          alt={`img - ${image.id}`}
          src={image.src}
          className="file-img rounded-xl w-auto h-32 md:w-auto md:h-40 lg:w-auto lg:h-[236px]"
          onLoad={onImageLoad}
        />
      ) : (
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-[236px] lg:h-[236px] flex justify-center items-center">
          <ReactCrop
            crop={crop}
            onChange={onCropChange}
            aspect={1}
            locked
          >
            <img
              alt={`img - ${image.id}`}
              src={image.src}
              className={`file-img rounded-xl ${
                imgHeight > imgWidth
                  ? "w-auto h-32 md:w-auto md:h-40 lg:w-auto lg:h-[236px]"
                  : "w-32 h-auto md:w-40 md:h-auto lg:w-[236px] lg:h-auto"
              }`}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        </div>
      )}
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
