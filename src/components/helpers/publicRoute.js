import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";

export const PublicRoute = ({ children }) => {
  const { isLoading, isAuthenticate } = useSelector((state) => state.auth);

  if (isLoading)
    return (
      <div className="flex flex-1 justify-center items-center h-screen">
        <MoonLoader
          size={150}
          color="#36d7b7"
          loading={true}
          cssOverride={{}}
          speedMultiplier={1}
        />
      </div>
    );

  return !isAuthenticate ? children : <Navigate to="/my-avatars" replace />;
};
