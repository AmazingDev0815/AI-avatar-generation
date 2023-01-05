import Footer from './footer';
import Header from './header';

const MainLayout = ({ children }) => {
  return (
    <div className='font-poppinsRegular flex flex-col items-center h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout;
