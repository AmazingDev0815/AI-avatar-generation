import { XMarkIcon } from "@heroicons/react/24/outline";

// Rendering individual images
const Image = ({ image, removeImage }) => {
  const handleRemove = () => {
    removeImage(image)
  }
  return (
    <div className="file-item mx-3 my-3 relative">
      <button className="absolute bg-primary-600 text-white p-1 rounded top-2.5 right-2.5" onClick={handleRemove}>
        <XMarkIcon width="12" height="12" />
      </button>
      <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="file-img w-[236px] h-[236px] rounded-xl"
      />
    </div>
  );
};

// ImageList Component//
const ImageGrid = ({ images, remove }) => {
  // render each image by calling Image component
  const renderImage = (image) => {
    const index = (file) => {
      remove(file)
    }
    return <Image image={image} key={`${image.id}-image`} removeImage={index} />;
  };
  // Return the list of files//
  return images.map(renderImage)
};
export default ImageGrid;