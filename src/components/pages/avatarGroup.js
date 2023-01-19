import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Link, useParams } from "react-router-dom"
import MainLayout from "../../layout/mainLayout"

const Group = () => {
  const {id} = useParams()
  // console.log('group =========> ', id)
  return (
    <MainLayout>
      <div className="flex flex-col flex-1 w-full px-3 md:px-20 mt-16">
        <div className="text-sm flex items-center" id="route">
          <Link to='/my-avatars' className="font-poppinsMedium text-gray-600 mr-[18px]">My Avatars</Link>
          <ChevronRightIcon className="text-gray-600 w-4 h-4 mr-[18px]"/>
          <span className="font-poppinsBold text-primary-600">{id}</span>
        </div>
      </div>
    </MainLayout>
  )
}

export default Group

