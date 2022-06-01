import React from 'react';
import { navigate } from 'gatsby';

import { MenuItems } from './data';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#53463F] h-[150px] flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-4/5 mx-auto  flex justify-between">
          <div className="text-white">
            <h1 className="text-2xl lg:text-4xl font-bold">
              OPTIMAL SYNERGY, INC.
            </h1>
            <div className="mt-4 text-sm lg:text-base">
              <p>TRANSFORM YOUR BUSINESS WITH SIMPLICITY</p>
              <p>AND ADD TO YOUR BOTTOM LINE</p>
            </div>
          </div>
          <div className="hidden md:block mt-4">
            <div className="bg-white w-full rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="pl-4 p-2 w-full shadow-lg"
                style={{
                  outline: 'none',
                }}
              />
            </div>

            <ul className="flex mt-4 space-x-4 text-white">
              {MenuItems.map((item) => (
                <li>
                  <button
                    onClick={() => navigate(item.link)}
                    className="hover:text-orange-300 transition-all"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-orange-300 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className="w-[80%] mx-auto my-4 flex lg:hidden justify-center items-center overflow-hidden transition-all h-full"
        style={{
          height: isMobileMenuOpen ? '15rem' : '0',
          margin: isMobileMenuOpen ? '1rem auto' : '0 auto',
        }}
      >
        <ul className="space-y-4 p-0 w-fit flex flex-col justify-center items-center">
          {MenuItems.map((item) => (
            <li className="">
              <button
                onClick={() => navigate(item.link)}
                className="hover:text-orange-300 transition-all"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
