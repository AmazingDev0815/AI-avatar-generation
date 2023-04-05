import { Dialog, Transition } from "@headlessui/react";
import { ArrowDownTrayIcon, ArrowLeftIcon, ArrowRightIcon, ShareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FacebookShareButton, LinkedinShareButton, PinterestShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { useImageDialogContext } from "../../hooks/imageDialogContext";
import axios from "axios";
import authHeader from "../../redux/authHeader"

export default function ImageModal() {
  const {props, setProps} = useImageDialogContext();
  const productStore = useSelector(state => state.product);
  const groupLength = productStore.selected?.groups?.filter(group => group.name === props.name)[0]?.images.length;
  const [shareOpen, setShareOpen] = useState(false);
  const [currentId, setCurrentId] = useState(productStore.selected?.groups?.filter(group => group.name === props.name)[0]?.images[props.index].id)
  const [imageUrl, setImageUrl] = useState(productStore.selected?.groups?.filter(group => group.name === props.name)[0]?.images[props.index].url);
  const [shareURI, setShareURI] = useState(null);
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    setImageUrl(productStore.selected?.groups?.filter(group => group.name === props.name)[0]?.images[props.index].url);
    setCurrentId(productStore.selected?.groups?.filter(group => group.name === props.name)[0]?.images[props.index].id);
  }, [props])

  useEffect( () => {
    if(imageUrl?.url) {
      getBase64()
    }
  }, [imageUrl?.url])
  
  const getBase64 = async () => {
    await axios.get(baseURL + `images/${currentId}/high-quality`, {
      headers: authHeader()
    })
    .then(res => setShareURI(res.data.base64))
    .catch(err => console.error(err))
  }

  const closeModal = () => {
    setProps({...props, open: false});
    setShareOpen(false)
  };

  const nextImage = () => {
    setProps({...props, index: ((props.index + 1) >= groupLength ? 0 : (props.index + 1))})
    setShareOpen(false)
  }

  const previousImage = () => {
    setProps({...props, index: ((props.index - 1) < 0 ? groupLength - 1 : (props.index - 1))})
    setShareOpen(false)
  }
  
  const download = () => {
    axios.get(baseURL + `images/${currentId}/download`, {
      headers: authHeader(),
      params: {id: currentId},
      responseType: "blob"
    }).then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', `${productStore.selected.name}.png`); //or any other extension
      document.body.appendChild(link);
      link.click();
  
      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    })
  };

  const downloadHD = () => {
    axios.get(baseURL + `images/${currentId}/download-high-quality`, {
      headers: authHeader(),
      params: {id: currentId},
      responseType: "blob"
    }).then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', `${productStore.selected.name}.png`); //or any other extension
      document.body.appendChild(link);
      link.click();
  
      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    })
  }

  return (
    <Transition appear show={props.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start mt-[10vh] justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm md:max-w-lg xl:max-w-2xl transform overflow-hidden rounded-xl bg-white px-2 pt-2 pb-6 text-left align-middle shadow-xl transition-all">
                  <button className="right-6 top-6 fixed p-1.5 bg-black bg-opacity-60 rounded" onClick={closeModal}>
                    <XMarkIcon className="w-6 h-6 text-white hover:text-primary-600" />
                  </button>
                  <button className="right-6 top-[45%] fixed p-1.5 bg-black bg-opacity-60 rounded-full" onClick={nextImage}>
                    <ArrowRightIcon className="w-4 h-4 text-white hover:text-primary-600" />
                  </button>
                  <button className="left-6 top-[45%] fixed p-1.5 bg-black bg-opacity-60 rounded-full" onClick={previousImage}>
                    <ArrowLeftIcon className="w-4 h-4 text-white hover:text-primary-600" />
                  </button>
                  {shareOpen && <div className="bottom-28 left-[10%] fixed w-4/5 bg-white rounded-xl p-6 gap-6 flex justify-between">
                      <TwitterShareButton url={`data:image/jpeg;base64,${shareURI}`}>
                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg"  className="text-primary-600 hover:text-primary-700">
                          <path d="M10.0669 26C22.1394 26 28.7444 15.9956 28.7444 7.32248C28.7444 7.04123 28.7381 6.75373 28.7256 6.47248C30.0105 5.54328 31.1193 4.39234 32 3.07373C30.8034 3.60613 29.5329 3.95384 28.2319 4.10498C29.6017 3.28388 30.6274 1.99396 31.1187 0.474356C29.8301 1.23808 28.4208 1.77682 26.9513 2.06748C25.9611 1.01541 24.652 0.318822 23.2262 0.0854013C21.8005 -0.148019 20.3376 0.0947339 19.0637 0.776129C17.7897 1.45752 16.7757 2.53961 16.1785 3.85508C15.5812 5.17056 15.4339 6.64615 15.7594 8.05373C13.15 7.92279 10.5972 7.24494 8.26664 6.06413C5.93604 4.88332 3.87959 3.22592 2.23062 1.19936C1.39253 2.64432 1.13608 4.35419 1.51337 5.98145C1.89067 7.60872 2.87342 9.03126 4.26188 9.95998C3.2195 9.92689 2.19997 9.64624 1.2875 9.14123V9.22248C1.28657 10.7389 1.8108 12.2088 2.77108 13.3824C3.73136 14.5559 5.06843 15.3607 6.555 15.66C5.58941 15.9242 4.57598 15.9627 3.59313 15.7725C4.01261 17.0766 4.82876 18.2172 5.92769 19.0351C7.02662 19.853 8.35349 20.3075 9.72313 20.335C7.3979 22.1615 4.52557 23.1522 1.56875 23.1475C1.04438 23.1467 0.520532 23.1145 0 23.0512C3.00381 24.9783 6.49804 26.0018 10.0669 26Z" fill="currentColor"/>
                        </svg>
                      </TwitterShareButton>
                      <TelegramShareButton url={`data:image/jpeg;base64,${shareURI}`}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-primary-700">
                          <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="currentColor"/>
                        </svg>
                      </TelegramShareButton>
                      <LinkedinShareButton url={`data:image/jpeg;base64,${shareURI}`}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-primary-700">
                          <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="currentColor"/>
                        </svg>
                      </LinkedinShareButton>
                      <FacebookShareButton url={`data:image/jpeg;base64,${shareURI}`}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-primary-700">
                          <circle cx="16" cy="16" r="14" fill="currentColor"/>
                          <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"/>
                        </svg>
                      </FacebookShareButton>
                      <PinterestShareButton url={`data:image/jpeg;base64,${shareURI}`} media={`data:image/jpeg;base64,${shareURI}`}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-primary-700">
                          <path d="M12 0C5.37188 0 0 5.37188 0 12C0 17.0859 3.16406 21.4266 7.62656 23.175C7.52344 22.2234 7.425 20.7703 7.66875 19.7344C7.88906 18.7969 9.075 13.7719 9.075 13.7719C9.075 13.7719 8.71406 13.0547 8.71406 11.9906C8.71406 10.3219 9.67969 9.075 10.8844 9.075C11.9062 9.075 12.4031 9.84375 12.4031 10.7672C12.4031 11.7984 11.7469 13.3359 11.4094 14.7609C11.1281 15.9562 12.0094 16.9313 13.1859 16.9313C15.3187 16.9313 16.9594 14.6812 16.9594 11.4375C16.9594 8.56406 14.8969 6.55313 11.9484 6.55313C8.53594 6.55313 6.52969 9.1125 6.52969 11.7609C6.52969 12.7922 6.92812 13.8984 7.425 14.4984C7.52344 14.6156 7.5375 14.7234 7.50937 14.8406C7.42031 15.2203 7.21406 16.0359 7.17656 16.2C7.125 16.4203 7.00313 16.4672 6.77344 16.3594C5.27344 15.6609 4.33594 13.4719 4.33594 11.7094C4.33594 7.92188 7.0875 4.44844 12.2625 4.44844C16.425 4.44844 19.6594 7.41563 19.6594 11.3813C19.6594 15.5156 17.0531 18.8438 13.4344 18.8438C12.2203 18.8438 11.0766 18.2109 10.6828 17.4656C10.6828 17.4656 10.0828 19.7578 9.9375 20.3203C9.66562 21.3609 8.93437 22.6688 8.44687 23.4656C9.57187 23.8125 10.7625 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0Z" fill="currentColor"/>
                        </svg>
                      </PinterestShareButton>
                      <RedditShareButton url={`data:image/jpeg;base64,${shareURI}`}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-primary-700">
                          <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="currentColor"/>
                          <path d="M26.667 16C26.667 14.7088 25.619 13.6609 24.3278 13.6609C23.6916 13.6609 23.1302 13.9041 22.7185 14.3158C21.1278 13.1743 18.9196 12.4258 16.4869 12.3322L17.5535 7.33572L21.0155 8.06555C21.053 8.94508 21.7828 9.65619 22.681 9.65619C23.598 9.65619 24.3465 8.90765 24.3465 7.99069C24.3465 7.07374 23.598 6.3252 22.681 6.3252C22.0261 6.3252 21.4647 6.69946 21.2027 7.26087L17.329 6.43748C17.2167 6.41876 17.1044 6.43748 17.0109 6.49362C16.9173 6.54976 16.8612 6.64332 16.8237 6.75561L15.6448 12.3322C13.1559 12.4071 10.929 13.1369 9.31963 14.3158C8.90794 13.9229 8.32782 13.6609 7.71028 13.6609C6.41905 13.6609 5.37109 14.7088 5.37109 16C5.37109 16.9544 5.9325 17.7591 6.75589 18.1334C6.71846 18.3579 6.69975 18.6012 6.69975 18.8445C6.69975 22.4375 10.8728 25.3381 16.0378 25.3381C21.2027 25.3381 25.3758 22.4375 25.3758 18.8445C25.3758 18.6012 25.3571 18.3767 25.3196 18.1521C26.0869 17.7778 26.667 16.9544 26.667 16ZM10.667 17.6655C10.667 16.7486 11.4155 16 12.3325 16C13.2495 16 13.998 16.7486 13.998 17.6655C13.998 18.5825 13.2495 19.331 12.3325 19.331C11.4155 19.331 10.667 18.5825 10.667 17.6655ZM19.9676 22.0632C18.8261 23.2047 16.6553 23.2796 16.019 23.2796C15.3828 23.2796 13.1933 23.186 12.0705 22.0632C11.9021 21.8948 11.9021 21.6141 12.0705 21.4457C12.2389 21.2772 12.5196 21.2772 12.6881 21.4457C13.3992 22.1568 14.9337 22.4188 16.0378 22.4188C17.1419 22.4188 18.6576 22.1568 19.3875 21.4457C19.5559 21.2772 19.8366 21.2772 20.005 21.4457C20.136 21.6328 20.136 21.8948 19.9676 22.0632ZM19.6682 19.331C18.7512 19.331 18.0027 18.5825 18.0027 17.6655C18.0027 16.7486 18.7512 16 19.6682 16C20.5851 16 21.3337 16.7486 21.3337 17.6655C21.3337 18.5825 20.5851 19.331 19.6682 19.331Z" fill="white"/>
                        </svg>
                      </RedditShareButton>
                      <WhatsappShareButton url={`data:image/jpeg;base64,${shareURI}`}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-primary-700">
                          <path d="M15.0004 0.280273C6.88389 0.280273 0.280368 6.88379 0.280368 15.0003C0.280368 17.5347 0.935088 20.0268 2.17669 22.2259L0.304048 28.9075C0.242608 29.127 0.302128 29.3625 0.460848 29.5257C0.583088 29.6518 0.749488 29.7203 0.920368 29.7203C0.971568 29.7203 1.02341 29.7139 1.07397 29.7017L8.04741 27.9744C10.1767 29.1174 12.5748 29.7203 15.0004 29.7203C23.1168 29.7203 29.7204 23.1168 29.7204 15.0003C29.7204 6.88379 23.1168 0.280273 15.0004 0.280273ZM22.4052 20.1945C22.0903 21.0662 20.5799 21.8617 19.8541 21.9686C19.2026 22.064 18.3783 22.1049 17.4733 21.8208C16.9248 21.648 16.2208 21.4188 15.3191 21.0342C11.5284 19.4176 9.05285 15.6486 8.86341 15.3996C8.67461 15.1507 7.32037 13.3766 7.32037 11.5404C7.32037 9.70427 8.29637 8.80123 8.64325 8.42747C8.99013 8.05371 9.39909 7.96027 9.65125 7.96027C9.90341 7.96027 10.1549 7.96347 10.3757 7.97371C10.608 7.98523 10.9197 7.88603 11.2263 8.61435C11.5412 9.36187 12.297 11.198 12.3904 11.3856C12.4852 11.5724 12.5479 11.7907 12.4224 12.0396C12.297 12.2886 12.2343 12.4441 12.0448 12.6624C11.8554 12.8806 11.648 13.1488 11.4778 13.3164C11.2884 13.5027 11.0919 13.7043 11.312 14.078C11.5322 14.4518 12.2906 15.6736 13.4144 16.663C14.8576 17.934 16.0756 18.3283 16.4532 18.5152C16.8308 18.702 17.0516 18.6707 17.2717 18.4217C17.4919 18.1721 18.2164 17.3318 18.4679 16.9587C18.7194 16.5856 18.9716 16.647 19.3184 16.7718C19.6653 16.896 21.5232 17.7984 21.9008 17.9852C22.2785 18.1721 22.5306 18.2656 22.6253 18.4211C22.72 18.576 22.72 19.3235 22.4052 20.1945Z" fill="currentColor"/>
                        </svg>
                      </WhatsappShareButton>
                    </div>}
                  <Dialog.Title
                    as="div"
                    className="text-lg flex justify-center font-medium leading-6 text-gray-900"
                  >
                    <img 
                      className="rounded-xl w-full" 
                      src={imageUrl?.url}
                      alt={imageUrl?.prompt?.tags?.[0]}
                      id="small_image"
                     />
                  </Dialog.Title>
                  <div className="mt-8 flex justify-center gap-4">
                    <button
                      className="px-4 py-2.5 flex text-white hover:bg-primary-700 bg-primary-600 rounded-lg items-center"
                      onClick={download}
                    >
                      <ArrowDownTrayIcon className="w-5 h-5 stroke-2 mr-2" />
                      <span className="text-sm font-poppinsSemiBold">Small Image</span>
                    </button>
                    <button
                      className="px-4 py-2.5 flex text-white hover:bg-primary-700 bg-primary-600 rounded-lg items-center"
                      onClick={downloadHD}
                    >
                      <ArrowDownTrayIcon className="w-5 h-5 stroke-2 mr-2" />
                      <span className="text-sm font-poppinsSemiBold">HD Image</span>
                    </button>
                    <button
                      className="px-4 py-2.5 flex text-white hover:bg-primary-700 bg-primary-600 rounded-lg items-center"
                      onClick={() => setShareOpen(!shareOpen)}
                    >
                      <ShareIcon className="w-5 h-5 stroke-2 mr-2" />
                      <span className="text-sm font-poppinsSemiBold">Share</span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}