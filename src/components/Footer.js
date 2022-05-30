import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <div className='flex bg-[#53463F] text-white justify-center items-center py-4 space-x-2'>
      <p>Copyright © All rights reserved. Made By Optimal Synergy.</p>
      <Link to='/' className='underline'>
        Terms of Use
      </Link>
      <Link to='/' className='underline'>
        Privacy Policy
      </Link>
    </div>
  );
};

export default Footer;
