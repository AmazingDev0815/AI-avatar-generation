import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import MainLayout from "../../layout/mainLayout";

const ImageCrop = () => {
  const [crop, setCrop] = useState();
  const [srcImg, setSrcImg] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImage = async (event) => {
    setSrcImg(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };

  const getCroppedImg = async () => {
    try {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      const base64Image = canvas.toDataURL("image/jpeg", 1);
      setResult(base64Image);
      console.log(result);
    } catch (e) {
      console.log("crop the image");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(result);
  };

  return (
    <MainLayout>
      <div className="h-full flex justify-center items-center">
        <div>
          <input type="file" accept="image/*" onChange={handleImage} />
        </div>
        {srcImg && (
          <div>
            <ReactCrop
              crop={crop}
              onChange={setCrop}
              className="w-40 h-40"
            >
              <img src={srcImg} onLoad={e => setImage(e.currentTarget)} alt="origin"/>
            </ReactCrop>

            <button
              onClick={getCroppedImg}
              className="bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2.5 mt-6 mr-3 text-white text-sm"
            >
              Crop
            </button>
            
          </div>
        )}

        {result && (
          <div>
            <img src={result} alt="Cropped Image" />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ImageCrop;
