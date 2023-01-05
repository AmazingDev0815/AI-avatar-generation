import cuid from "cuid";
import { useCallback, useState } from "react";
import MainLayout from "../../layout/mainLayout";
import Dropzone from "../basic/dropZone";
import ImageGrid from "../basic/imageGrid";

const UploadImage = () => {

  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <MainLayout>
      <div className="h-full flex flex-col items-center" id="upload">
        <h1 className="font-poppinsBold text-3xl mt-16">Upload Your Images</h1>
        <p className="mt-1 text-gray-600">Upload 20 photos close up profile pictures of you or your loved one and we will generate a new set of avatars.</p> 
        <p className="text-gray-600">You will receive images with our premade custom styles.</p>
        <div className="mt-6 text-primary-400 text-lg rounded-xl bg-primary-50 px-3 py-2" id="uploaded_number">
          <span className="font-poppinsBold text-primary-600 text-3xl">0</span> / 20
        </div>
        <div className="my-6" id="upload_image">
           <main className="App">
            <h1 className="text-center">Drag and Drop Test</h1>
            <Dropzone onDrop={onDrop} accept={"image/*"} />
            <ImageGrid images={images} />
          </main>
        </div>
        <ul className="flex flex-col text-center mt-6 " id="description">
            <span><span className="text-primary-600 font-poppinsBold mr-2">●</span>Make sure only one person is in the frame</span>
            <span><span className="text-primary-600 font-poppinsBold mr-2">●</span>Use only close-up face images</span>
            <span><span className="text-primary-600 font-poppinsBold mr-2">●</span>Avoid pics with sunglasses</span>
        </ul>
        <div className="mt-6 mb-20" id="examples">
          <span className="font-poppinsBold text-3xl">Examples: </span>
          <div className="mt-6 flex" id="upload_example_group">
            <div className="mr-6 ">
              <img alt="example" src={require('../../assets/img/upload(1).png')} />
            </div>
            <div className="mr-6 ">
              <img alt="example" src={require('../../assets/img/upload(2).png')} />
            </div>
            <div className="mr-6 ">
              <img alt="example" src={require('../../assets/img/upload(3).png')} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default UploadImage;