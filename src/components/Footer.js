import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#53463F] text-white justify-center items-center py-4 space-x-2 text-xs lg:text-base">
      <p>Copyright © All rights reserved. Made By Optimal Synergy.</p>
      <div className="">
        <Link to="/" className="underline">
          Terms of Use
        </Link>{' '}
        <Link to="/" className="underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
