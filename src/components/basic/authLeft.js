const LeftSide = () => {
  return (
    <div className="relative overflow-hidden py-10 md:flex flex-col w-1/2 bg-gradient-to-tr from-primary-900 to-primary-700 i justify-center hidden">
    <div className="ml-16 mb-8">
      <h1 className="text-white font-bold text-6xl font-poppinsBold ">
        Mava
      </h1>
      <p className="text-white mt-1 text-xl">Avatars made fun!</p>
    </div>
    <div className="image-group flex-col w-[200%]">
      <div className="flex">
        <div className="mr-6 ">
          <img alt="gallery" src={require('../../assets/img/1.png')} />
        </div>
        <div className="mr-6 ">
          <img alt="gallery" src={require('../../assets/img/2.png')} />
        </div>
        <div className="mr-6 ">
          <img alt="gallery" src={require('../../assets/img/3.png')} />
        </div>
        <div className="mr-6 ">
          <img alt="gallery" src={require('../../assets/img/11.png')} />
        </div>
        <div className="mr-6 ">
          <img alt="gallery" src={require('../../assets/img/12.png')} />
        </div>
        <div className="mr-6 ">
          <img alt="gallery" src={require('../../assets/img/4.png')} />
        </div>
      </div>
      <div className='flex mt-6'>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/5.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/6.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/7.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/8.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/2.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/3.png')} />
        </div>
        <div className="mr-6 ">
          <img alt="gallery" src={require('../../assets/img/9.png')} />
        </div>
      </div>
      <div className="flex mt-6">
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/10.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/11.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/12.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/3.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/7.png')} />
        </div>
        <div className="mr-6">
          <img alt="gallery" src={require('../../assets/img/13.png')} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeftSide;