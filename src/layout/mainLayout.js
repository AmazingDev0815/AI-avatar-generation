import React from 'react';
import Footer from './footer';
import Header from './header';

const MainLayout = ({ children }) => {
  return (
    <div className='font-poppinsRegular flex justify-center items-center'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout;
