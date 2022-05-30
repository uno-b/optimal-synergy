import React, { useState } from 'react';

import Layout from '../components/Layout';
import { services } from '../components/data';
import img1 from '../images/service-1.jpg';
import img2 from '../images/service-2.png';
import img3 from '../images/service-3.jpg';
import img4 from '../images/service-4.png';
import img5 from '../images/service-5.jpg';
import img6 from '../images/service-6.png';
import img7 from '../images/service-7.jpg';
import img8 from '../images/service-8.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const MAX_PAGES = 2;

const Services = () => {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <div className='w-4/5 mx-auto my-10'>
        <div className='flex justify-between items-center my-10'>
          <h1 className='text-xl font-bold'>
            WHAT WE HAVE DONE - WHAT WE CAN DO
          </h1>
          <dir>
            {page > 1 && (
              <button onClick={() => setPage(page - 1)}>Previous Page</button>
            )}
            {page > 1 && page < MAX_PAGES && <span className='mx-4'>-</span>}
            {page < MAX_PAGES && (
              <button onClick={() => setPage(page + 1)}>Next Page</button>
            )}
          </dir>
        </div>

        {services[page - 1].map((service, i) => (
          <div
            className='flex p-10'
            style={{ backgroundColor: i % 2 === 0 && 'rgb(241 245 249)' }}
          >
            <img src={images[service.id]} className='object-cover' />
            <div className='ml-10'>
              <h2 className='font-bold'>{service.title}</h2>
              {service.texts.map((text) => (
                <p className='my-4'>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Services;
