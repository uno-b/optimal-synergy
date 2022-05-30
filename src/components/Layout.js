import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='font-["Roboto"]'>
      <Header />
      <div className=''>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
