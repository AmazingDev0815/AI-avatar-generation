// Rendering individual images
const Image = ({ image }) => {
  return (
    <div className="file-item mx-3 my-3">
      <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="file-img w-[236px] h-[236px] rounded-xl"
      />
    </div>
  );
};

// ImageList Component//
const ImageGrid = ({ images }) => {
  // render each image by calling Image component
  const renderImage = (image, index) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };
  // Return the list of files//
  return images.map(renderImage)
};
export default ImageGrid;