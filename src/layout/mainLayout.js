import Footer from './footer';
import Header from './header';

const MainLayout = ({ children }) => {
  return (
    <div className='font-poppinsRegular flex flex-col justify-center items-center h-full'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout;
