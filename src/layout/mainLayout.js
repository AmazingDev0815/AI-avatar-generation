import Footer from "./footer";
import Header from "./header";

const MainLayout = ({ children }) => {
  return (
    <div className="font-poppinsRegular flex flex-col items-center min-h-screen" style={{background: "linear-gradient(229.02deg, rgba(246, 104, 140, 0.1) 2.98%, rgba(255, 255, 255, 0.1) 41.46%, rgba(255, 255, 255, 0.1) 62.9%, rgba(127, 86, 217, 0.1) 96.88%), #FFFFFF"}}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
