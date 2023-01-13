import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

// Rendering individual images
const Image = ({ image, removeImage }) => {
  const [crop, setCrop] = useState();
  const handleRemove = () => {
    removeImage(image);
  };
  return (
    <div className="file-item mx-3 my-3 relative">
      <button
        className="absolute bg-primary-600 text-white p-1 z-10 rounded top-2.5 right-2.5"
        onClick={handleRemove}
      >
        <XMarkIcon width="12" height="12"/>
      </button>
      <ReactCrop
        crop={crop}
        onChange={setCrop}
      >
        <img
          alt={`img - ${image.id}`}
          src={image.src}
          className="file-img w-32 h-32 md:w-40 md:h-40 lg:w-[236px] lg:h-[236px] rounded-xl"
        />
      </ReactCrop>
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
      <Image image={image} key={`${image.id}-image`} removeImage={index} />
    );
  };
  // Return the list of files//
  return images.map(renderImage);
};
export default ImageGrid;
