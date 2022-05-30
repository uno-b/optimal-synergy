import React from 'react';
import { navigate } from 'gatsby';

import { MenuItems } from './data';

const Header = () => {
  return (
    <div className='bg-[#53463F] h-[150px] flex flex-col items-center justify-center'>
      <div className='w-[80%] mx-auto  flex justify-between'>
        <div className='text-white'>
          <h1 className='text-4xl font-bold'>OPTIMAL SYNERGY, INC.</h1>
          <div className='mt-4'>
            <p>TRANSFORM YOUR BUSINESS WITH SIMPLICITY</p>
            <p>AND ADD TO YOUR BOTTOM LINE</p>
          </div>
        </div>
        <div className='mt-4'>
          <div className='bg-white w-full rounded overflow-hidden'>
            <input
              type='text'
              placeholder='Search'
              className='pl-4 p-2 w-full shadow-lg'
              style={{
                outline: 'none',
              }}
            />
          </div>

          <ul className='flex mt-4 space-x-4 text-white'>
            {MenuItems.map((item) => (
              <li>
                <button
                  onClick={() => navigate(item.link)}
                  className='hover:text-orange-300 transition-all'
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
