import { Dialog, Transition } from "@headlessui/react";
import { ArrowDownTrayIcon, ArrowLeftIcon, ArrowRightIcon, ExclamationTriangleIcon, ShareIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useImageDialogContext } from "../../hooks/imageDialogContext";

export default function ImageModal() {
  const {props, setProps} = useImageDialogContext();
  const productStore = useSelector(state => state.product)
  const groupLength = productStore.selected?.groups?.filter(group => group.name === props.name)[0]?.images.length
  const [shareOpen, setShareOpen] = useState(false) 
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
                  {shareOpen && <div className="bottom-28 left-[10%] fixed w-4/5 bg-white rounded-xl p-6 gap-6 flex">
                      <button className="text-primary-600 hover:text-primary-700">
                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.0669 26C22.1394 26 28.7444 15.9956 28.7444 7.32248C28.7444 7.04123 28.7381 6.75373 28.7256 6.47248C30.0105 5.54328 31.1193 4.39234 32 3.07373C30.8034 3.60613 29.5329 3.95384 28.2319 4.10498C29.6017 3.28388 30.6274 1.99396 31.1187 0.474356C29.8301 1.23808 28.4208 1.77682 26.9513 2.06748C25.9611 1.01541 24.652 0.318822 23.2262 0.0854013C21.8005 -0.148019 20.3376 0.0947339 19.0637 0.776129C17.7897 1.45752 16.7757 2.53961 16.1785 3.85508C15.5812 5.17056 15.4339 6.64615 15.7594 8.05373C13.15 7.92279 10.5972 7.24494 8.26664 6.06413C5.93604 4.88332 3.87959 3.22592 2.23062 1.19936C1.39253 2.64432 1.13608 4.35419 1.51337 5.98145C1.89067 7.60872 2.87342 9.03126 4.26188 9.95998C3.2195 9.92689 2.19997 9.64624 1.2875 9.14123V9.22248C1.28657 10.7389 1.8108 12.2088 2.77108 13.3824C3.73136 14.5559 5.06843 15.3607 6.555 15.66C5.58941 15.9242 4.57598 15.9627 3.59313 15.7725C4.01261 17.0766 4.82876 18.2172 5.92769 19.0351C7.02662 19.853 8.35349 20.3075 9.72313 20.335C7.3979 22.1615 4.52557 23.1522 1.56875 23.1475C1.04438 23.1467 0.520532 23.1145 0 23.0512C3.00381 24.9783 6.49804 26.0018 10.0669 26Z" fill="currentColor"/>
                        </svg>
                      </button>
                      <button className="text-primary-600 hover:text-primary-700">
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.7637 0H15.3707V21.7971C15.3707 24.3942 13.2966 26.5276 10.7153 26.5276C8.13411 26.5276 6.05991 24.3942 6.05991 21.7971C6.05991 19.2464 8.08802 17.1594 10.5771 17.0667V11.5942C5.09195 11.6869 0.666992 16.1855 0.666992 21.7971C0.666992 27.4551 5.18413 32 10.7615 32C16.3387 32 20.8558 27.4087 20.8558 21.7971V10.6203C22.884 12.1044 25.373 12.9855 28.0003 13.0319V7.55942C23.9441 7.42029 20.7637 4.08116 20.7637 0Z" fill="#7F56D9"/>
                        </svg>
                      </button>
                      <button className="text-primary-600 hover:text-primary-700">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 2.88125C20.275 2.88125 20.7813 2.9 22.4625 2.975C24.025 3.04375 24.8688 3.30625 25.4313 3.525C26.175 3.8125 26.7125 4.1625 27.2688 4.71875C27.8313 5.28125 28.175 5.8125 28.4625 6.55625C28.6813 7.11875 28.9438 7.96875 29.0125 9.525C29.0875 11.2125 29.1063 11.7188 29.1063 15.9875C29.1063 20.2625 29.0875 20.7688 29.0125 22.45C28.9438 24.0125 28.6813 24.8563 28.4625 25.4188C28.175 26.1625 27.825 26.7 27.2688 27.2563C26.7063 27.8188 26.175 28.1625 25.4313 28.45C24.8688 28.6688 24.0188 28.9313 22.4625 29C20.775 29.075 20.2688 29.0938 16 29.0938C11.725 29.0938 11.2188 29.075 9.5375 29C7.975 28.9313 7.13125 28.6688 6.56875 28.45C5.825 28.1625 5.2875 27.8125 4.73125 27.2563C4.16875 26.6938 3.825 26.1625 3.5375 25.4188C3.31875 24.8563 3.05625 24.0063 2.9875 22.45C2.9125 20.7625 2.89375 20.2563 2.89375 15.9875C2.89375 11.7125 2.9125 11.2062 2.9875 9.525C3.05625 7.9625 3.31875 7.11875 3.5375 6.55625C3.825 5.8125 4.175 5.275 4.73125 4.71875C5.29375 4.15625 5.825 3.8125 6.56875 3.525C7.13125 3.30625 7.98125 3.04375 9.5375 2.975C11.2188 2.9 11.725 2.88125 16 2.88125ZM16 0C11.6563 0 11.1125 0.01875 9.40625 0.09375C7.70625 0.16875 6.5375 0.44375 5.525 0.8375C4.46875 1.25 3.575 1.79375 2.6875 2.6875C1.79375 3.575 1.25 4.46875 0.8375 5.51875C0.44375 6.5375 0.16875 7.7 0.09375 9.4C0.01875 11.1125 0 11.6563 0 16C0 20.3438 0.01875 20.8875 0.09375 22.5938C0.16875 24.2938 0.44375 25.4625 0.8375 26.475C1.25 27.5313 1.79375 28.425 2.6875 29.3125C3.575 30.2 4.46875 30.75 5.51875 31.1563C6.5375 31.55 7.7 31.825 9.4 31.9C11.1063 31.975 11.65 31.9937 15.9938 31.9937C20.3375 31.9937 20.8813 31.975 22.5875 31.9C24.2875 31.825 25.4563 31.55 26.4688 31.1563C27.5188 30.75 28.4125 30.2 29.3 29.3125C30.1875 28.425 30.7375 27.5313 31.1438 26.4813C31.5375 25.4625 31.8125 24.3 31.8875 22.6C31.9625 20.8938 31.9813 20.35 31.9813 16.0063C31.9813 11.6625 31.9625 11.1188 31.8875 9.4125C31.8125 7.7125 31.5375 6.54375 31.1438 5.53125C30.75 4.46875 30.2063 3.575 29.3125 2.6875C28.425 1.8 27.5313 1.25 26.4813 0.84375C25.4625 0.45 24.3 0.175 22.6 0.1C20.8875 0.01875 20.3438 0 16 0Z" fill="#7F56D9"/>
                          <path d="M16 7.78125C11.4625 7.78125 7.78125 11.4625 7.78125 16C7.78125 20.5375 11.4625 24.2188 16 24.2188C20.5375 24.2188 24.2188 20.5375 24.2188 16C24.2188 11.4625 20.5375 7.78125 16 7.78125ZM16 21.3312C13.0563 21.3312 10.6687 18.9438 10.6687 16C10.6687 13.0563 13.0563 10.6687 16 10.6687C18.9438 10.6687 21.3312 13.0563 21.3312 16C21.3312 18.9438 18.9438 21.3312 16 21.3312Z" fill="#7F56D9"/>
                          <path d="M26.4625 7.45586C26.4625 8.51836 25.6 9.37461 24.5438 9.37461C23.4813 9.37461 22.625 8.51211 22.625 7.45586C22.625 6.39336 23.4875 5.53711 24.5438 5.53711C25.6 5.53711 26.4625 6.39961 26.4625 7.45586Z" fill="#7F56D9"/>
                        </svg>
                      </button>
                      <button className="text-primary-600 hover:text-primary-700">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="14" fill="#7F56D9"/>
                          <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"/>
                        </svg>
                      </button>
                      <button className="text-primary-600 hover:text-primary-700">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.7296 23.5732C24.7742 21.1737 23.9844 17.4689 23.9492 17.1941C23.9067 16.8612 23.8585 16.5995 24.2256 16.2609C24.5796 15.9338 26.1502 14.9614 26.586 14.6572C27.3063 14.1534 27.6235 13.6504 27.3897 13.0321C27.2261 12.6044 26.828 12.4433 26.4086 12.4433C26.2762 12.4437 26.1444 12.4585 26.0153 12.4875C25.2239 12.6592 24.4553 13.0559 24.0106 13.163C23.9571 13.1768 23.9022 13.1842 23.847 13.1851C23.6099 13.1851 23.52 13.0796 23.5429 12.7941C23.5985 11.9289 23.7162 10.2401 23.5797 8.66245C23.3925 6.49192 22.6926 5.41647 21.8628 4.46533C21.4613 4.00407 19.5972 2.02246 15.9998 2.02246C12.4024 2.02246 10.5408 4.00407 10.1418 4.45961C9.30949 5.41075 8.61045 6.4862 8.42486 8.65673C8.28832 10.2343 8.41096 11.9223 8.46165 12.7884C8.478 13.0599 8.39461 13.1793 8.15751 13.1793C8.10233 13.1784 8.04744 13.171 7.99399 13.1573C7.55004 13.0501 6.7815 12.6535 5.99008 12.4817C5.86098 12.4528 5.72912 12.438 5.59682 12.4376C5.17576 12.4376 4.77923 12.6011 4.61571 13.0264C4.38188 13.6447 4.69747 14.1477 5.42022 14.6514C5.85599 14.9557 7.42658 15.9273 7.7806 16.2552C8.14688 16.5938 8.09946 16.8555 8.05694 17.1884C8.02179 17.4672 7.23118 21.172 2.27659 23.5675C1.98634 23.7081 1.49252 24.0058 2.36325 24.4867C3.73026 25.2424 4.64024 25.1614 5.34745 25.617C5.94756 26.0038 5.59273 26.838 6.02932 27.1389C6.56566 27.5094 8.15097 27.1128 10.199 27.7891C11.916 28.3551 12.9592 29.9539 16.0039 29.9539C19.0486 29.9539 20.1221 28.3477 21.8088 27.7891C23.8528 27.1128 25.4413 27.5094 25.9785 27.1389C26.4143 26.838 26.0603 26.0038 26.6604 25.617C27.3676 25.1614 28.2767 25.2424 29.6446 24.4867C30.5137 24.0116 30.0198 23.7139 29.7296 23.5732Z" fill="white"/>
                          <path d="M31.8856 23.2904C31.6632 22.6852 31.2397 22.3614 30.7573 22.0931C30.6666 22.04 30.5832 21.9974 30.5121 21.9647C30.3682 21.8903 30.221 21.8183 30.0746 21.7423C28.5711 20.9449 27.397 19.9389 26.5827 18.7465C26.3515 18.4109 26.1509 18.055 25.9834 17.6834C25.9139 17.4846 25.9172 17.3718 25.9671 17.2687C26.0165 17.1893 26.082 17.1211 26.1592 17.0683C26.4176 16.8974 26.6841 16.724 26.8648 16.6071C27.1869 16.3985 27.442 16.2333 27.6063 16.1164C28.2236 15.6846 28.6553 15.2258 28.9251 14.713C29.1134 14.3587 29.2231 13.968 29.247 13.5675C29.2708 13.167 29.2082 12.7661 29.0633 12.392C28.6545 11.3157 27.6382 10.6475 26.4069 10.6475C26.1472 10.6473 25.8882 10.6747 25.6343 10.7293C25.5665 10.744 25.4986 10.7596 25.4324 10.7767C25.4438 10.0407 25.4275 9.26376 25.3621 8.49908C25.1299 5.81086 24.1888 4.40174 23.2077 3.27803C22.5794 2.57387 21.8394 1.97814 21.0174 1.51478C19.5286 0.664238 17.8402 0.232422 15.9998 0.232422C14.1594 0.232422 12.4793 0.664238 10.9888 1.51478C10.1648 1.97828 9.42328 2.57521 8.79443 3.28131C7.81332 4.40501 6.87227 5.81659 6.64008 8.50236C6.57467 9.26703 6.55832 10.0481 6.56895 10.78C6.50272 10.7628 6.43568 10.7473 6.36782 10.7326C6.11391 10.678 5.85491 10.6506 5.5952 10.6508C4.36309 10.6508 3.34519 11.319 2.93803 12.3952C2.7925 12.7695 2.72922 13.1708 2.7525 13.5717C2.77578 13.9726 2.88506 14.3638 3.07294 14.7187C3.34356 15.2315 3.77525 15.6903 4.39253 16.1221C4.55604 16.2366 4.81195 16.4018 5.13408 16.6128C5.30823 16.7257 5.5625 16.8909 5.81186 17.0561C5.89911 17.1125 5.97326 17.187 6.02934 17.2744C6.08167 17.3816 6.0833 17.4969 6.00563 17.7095C5.84043 18.0734 5.64315 18.4218 5.41615 18.7506C4.61982 19.916 3.4801 20.904 2.02479 21.6948C1.2538 22.1037 0.452563 22.3769 0.114081 23.297C-0.141007 23.9913 0.0257811 24.7813 0.674129 25.447C0.912079 25.6955 1.18806 25.9045 1.49172 26.0662C2.12354 26.4135 2.79539 26.6824 3.49236 26.8668C3.63619 26.9039 3.77273 26.965 3.89625 27.0476C4.13253 27.2545 4.09901 27.5661 4.41378 28.0224C4.57179 28.2583 4.77256 28.4624 5.00572 28.6243C5.66633 29.0807 6.4087 29.1093 7.19522 29.1396C7.90571 29.1666 8.71103 29.1976 9.63082 29.5011C10.0118 29.627 10.4075 29.8707 10.8662 30.1553C11.9675 30.8325 13.4751 31.7591 15.9982 31.7591C18.5213 31.7591 20.0395 30.8276 21.149 30.148C21.6044 29.8683 21.9977 29.627 22.368 29.5043C23.2878 29.2001 24.0932 29.1698 24.8036 29.1428C25.5902 29.1126 26.3325 29.084 26.9931 28.6276C27.2693 28.435 27.4993 28.1836 27.6668 27.8916C27.8933 27.5064 27.8876 27.2373 28.1002 27.0492C28.216 26.9706 28.3443 26.912 28.4795 26.8758C29.186 26.6908 29.867 26.4194 30.5071 26.0678C30.8298 25.8947 31.1202 25.6672 31.3656 25.3955L31.3738 25.3857C31.9821 24.7347 32.135 23.9676 31.8856 23.2904ZM29.643 24.4959C28.2751 25.2516 27.366 25.1706 26.6588 25.6262C26.0578 26.013 26.4135 26.8472 25.9769 27.1481C25.4405 27.5186 23.8552 27.122 21.8072 27.7983C20.118 28.3569 19.0405 29.9631 16.0023 29.9631C12.9641 29.9631 11.9119 28.3602 10.195 27.7942C8.15098 27.1179 6.56241 27.5145 6.02525 27.1441C5.58948 26.8431 5.94349 26.0089 5.34338 25.6221C4.63535 25.1665 3.72619 25.2475 2.35918 24.4959C1.48845 24.015 1.98227 23.7173 2.27252 23.5767C7.22711 21.1771 8.01772 17.4724 8.05287 17.1976C8.09539 16.8647 8.14281 16.603 7.77653 16.2644C7.42251 15.9373 5.85192 14.9649 5.41615 14.6606C4.69503 14.1569 4.37781 13.6539 4.61164 13.0356C4.77516 12.6079 5.17414 12.4468 5.59275 12.4468C5.72505 12.4472 5.85691 12.462 5.98601 12.4909C6.77743 12.6627 7.54597 13.0593 7.98992 13.1665C8.04337 13.1802 8.09826 13.1876 8.15344 13.1885C8.39054 13.1885 8.47393 13.0691 8.45758 12.7976C8.40689 11.9315 8.28425 10.2435 8.42079 8.66592C8.60802 6.49539 9.30705 5.41994 10.1377 4.4688C10.5367 4.01163 12.4114 2.03002 15.9966 2.03002C19.5817 2.03002 21.4613 4.00345 21.8603 4.45899C22.6918 5.41013 23.3917 6.48558 23.5773 8.65611C23.7138 10.2337 23.5961 11.9225 23.5405 12.7878C23.5217 13.0732 23.6075 13.1787 23.8446 13.1787C23.8998 13.1778 23.9547 13.1704 24.0081 13.1566C24.4529 13.0495 25.2214 12.6529 26.0129 12.4811C26.142 12.4522 26.2738 12.4374 26.4061 12.437C26.8272 12.437 27.2237 12.6005 27.3872 13.0258C27.6211 13.6441 27.3055 14.147 26.5835 14.6508C26.1478 14.9551 24.5772 15.9267 24.2232 16.2546C23.8561 16.5932 23.9043 16.8549 23.9468 17.1877C23.982 17.4666 24.7718 21.1714 29.7272 23.5669C30.0199 23.7132 30.5137 24.0109 29.643 24.4959Z" fill="#7F56D9"/>
                        </svg>
                      </button>
                      <button className="text-primary-600 hover:text-primary-700">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#7F56D9"/>
                          <path d="M26.667 16C26.667 14.7088 25.619 13.6609 24.3278 13.6609C23.6916 13.6609 23.1302 13.9041 22.7185 14.3158C21.1278 13.1743 18.9196 12.4258 16.4869 12.3322L17.5535 7.33572L21.0155 8.06555C21.053 8.94508 21.7828 9.65619 22.681 9.65619C23.598 9.65619 24.3465 8.90765 24.3465 7.99069C24.3465 7.07374 23.598 6.3252 22.681 6.3252C22.0261 6.3252 21.4647 6.69946 21.2027 7.26087L17.329 6.43748C17.2167 6.41876 17.1044 6.43748 17.0109 6.49362C16.9173 6.54976 16.8612 6.64332 16.8237 6.75561L15.6448 12.3322C13.1559 12.4071 10.929 13.1369 9.31963 14.3158C8.90794 13.9229 8.32782 13.6609 7.71028 13.6609C6.41905 13.6609 5.37109 14.7088 5.37109 16C5.37109 16.9544 5.9325 17.7591 6.75589 18.1334C6.71846 18.3579 6.69975 18.6012 6.69975 18.8445C6.69975 22.4375 10.8728 25.3381 16.0378 25.3381C21.2027 25.3381 25.3758 22.4375 25.3758 18.8445C25.3758 18.6012 25.3571 18.3767 25.3196 18.1521C26.0869 17.7778 26.667 16.9544 26.667 16ZM10.667 17.6655C10.667 16.7486 11.4155 16 12.3325 16C13.2495 16 13.998 16.7486 13.998 17.6655C13.998 18.5825 13.2495 19.331 12.3325 19.331C11.4155 19.331 10.667 18.5825 10.667 17.6655ZM19.9676 22.0632C18.8261 23.2047 16.6553 23.2796 16.019 23.2796C15.3828 23.2796 13.1933 23.186 12.0705 22.0632C11.9021 21.8948 11.9021 21.6141 12.0705 21.4457C12.2389 21.2772 12.5196 21.2772 12.6881 21.4457C13.3992 22.1568 14.9337 22.4188 16.0378 22.4188C17.1419 22.4188 18.6576 22.1568 19.3875 21.4457C19.5559 21.2772 19.8366 21.2772 20.005 21.4457C20.136 21.6328 20.136 21.8948 19.9676 22.0632ZM19.6682 19.331C18.7512 19.331 18.0027 18.5825 18.0027 17.6655C18.0027 16.7486 18.7512 16 19.6682 16C20.5851 16 21.3337 16.7486 21.3337 17.6655C21.3337 18.5825 20.5851 19.331 19.6682 19.331Z" fill="white"/>
                        </svg>
                      </button>
                      <button className="text-primary-600 hover:text-primary-700">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.0004 0.280273C6.88389 0.280273 0.280368 6.88379 0.280368 15.0003C0.280368 17.5347 0.935088 20.0268 2.17669 22.2259L0.304048 28.9075C0.242608 29.127 0.302128 29.3625 0.460848 29.5257C0.583088 29.6518 0.749488 29.7203 0.920368 29.7203C0.971568 29.7203 1.02341 29.7139 1.07397 29.7017L8.04741 27.9744C10.1767 29.1174 12.5748 29.7203 15.0004 29.7203C23.1168 29.7203 29.7204 23.1168 29.7204 15.0003C29.7204 6.88379 23.1168 0.280273 15.0004 0.280273ZM22.4052 20.1945C22.0903 21.0662 20.5799 21.8617 19.8541 21.9686C19.2026 22.064 18.3783 22.1049 17.4733 21.8208C16.9248 21.648 16.2208 21.4188 15.3191 21.0342C11.5284 19.4176 9.05285 15.6486 8.86341 15.3996C8.67461 15.1507 7.32037 13.3766 7.32037 11.5404C7.32037 9.70427 8.29637 8.80123 8.64325 8.42747C8.99013 8.05371 9.39909 7.96027 9.65125 7.96027C9.90341 7.96027 10.1549 7.96347 10.3757 7.97371C10.608 7.98523 10.9197 7.88603 11.2263 8.61435C11.5412 9.36187 12.297 11.198 12.3904 11.3856C12.4852 11.5724 12.5479 11.7907 12.4224 12.0396C12.297 12.2886 12.2343 12.4441 12.0448 12.6624C11.8554 12.8806 11.648 13.1488 11.4778 13.3164C11.2884 13.5027 11.0919 13.7043 11.312 14.078C11.5322 14.4518 12.2906 15.6736 13.4144 16.663C14.8576 17.934 16.0756 18.3283 16.4532 18.5152C16.8308 18.702 17.0516 18.6707 17.2717 18.4217C17.4919 18.1721 18.2164 17.3318 18.4679 16.9587C18.7194 16.5856 18.9716 16.647 19.3184 16.7718C19.6653 16.896 21.5232 17.7984 21.9008 17.9852C22.2785 18.1721 22.5306 18.2656 22.6253 18.4211C22.72 18.576 22.72 19.3235 22.4052 20.1945Z" fill="#7F56D9"/>
                        </svg>
                      </button>
                    </div>}
                  <Dialog.Title
                    as="div"
                    className="text-lg flex justify-center font-medium leading-6 text-gray-900"
                  >
                    <img 
                      className="rounded-xl w-full" 
                      src={productStore.selected?.groups?.filter(group => group.name === props.name)[0]?.images[props.index].url.url}
                     />
                  </Dialog.Title>
                  <div className="mt-8 flex justify-center gap-4">
                    <button
                      // href={`${process.env.REACT_APP_BASE_URL}image-collections/download/${id}`}
                      className="px-4 py-2.5 flex text-white hover:bg-primary-700 bg-primary-600 rounded-lg items-center"
                    >
                      <ArrowDownTrayIcon className="w-5 h-5 stroke-2 mr-2" />
                      <span className="text-sm font-poppinsSemiBold">Small Image</span>
                    </button>
                    <button
                      // href={`${process.env.REACT_APP_BASE_URL}image-collections/download/${id}`}
                      className="px-4 py-2.5 flex text-white hover:bg-primary-700 bg-primary-600 rounded-lg items-center"
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