const Collection = () => {
  return (
    <div className="flex flex-col w-full px-16 mt-16">
      <h1 className="font-poppinsBold text-4xl md:text-5xl text-gray-900 mt-8" id="name">Gustavo</h1>
      <span className="text-gray-600 text-sm" id="created_date">16.01.2023.</span>
      <div className="flex mt-6" id="image_gallery">
        <img src={require("../../assets/img/demo(1).png")} className="rounded-xl mr-9" />
        <img src={require("../../assets/img/demo(2).png")} className="rounded-xl mr-9" />
        <img src={require("../../assets/img/demo(3).png")} className="rounded-xl mr-9" />
        <img src={require("../../assets/img/demo(4).png")} className="rounded-xl mr-9" />
        <img src={require("../../assets/img/demo(5).png")} className="rounded-xl mr-9" />
        <img src={require("../../assets/img/demo(6).png")} className="rounded-xl mr-9" />
      </div>
    </div>
  );
};

export default Collection;
