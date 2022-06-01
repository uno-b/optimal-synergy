import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import { aboutItems } from '../components/data';

const About = () => {
  return (
    <Layout>
      <div className="w-11/12 lg:w-4/5 mx-auto my-10">
        <div className="flex flex-col md:flex-row">
          <div>
            <h1 className="text-xl font-bold">
              SKILLS FOR BUSINESS TRANSFORMATION
            </h1>
            <hr className="my-4" />
            <h2 className="font-bold">All Services Address Customer Pains</h2>
            <p className="my-4">
              Skills and tools are applied based entirely on specific customer
              engagements. Our practice avoids unnecessary complexity. We also
              ensure that whatever is done, the results must be sustainable or
              else they will wither and eventually die.
            </p>
            <p>
              Our Consulting Resources have practical experiences ranging from
              fifteen years to more than thirty years.
            </p>
          </div>
          <StaticImage src="../images/about.png" width={1200} />
        </div>

        <div className="border-2 p-10 mt-10">
          <h2 className="font-bold mb-10 text-2xl">
            Examples of discipline skills and industry experiences of our
            Consulting Resources:
          </h2>

          <div className="flex flex-col lg:flex-row justify-between">
            {aboutItems.map((item) => (
              <div className="w-full lg:w-[30%] ml-4 mt-10 lg:mt-0">
                <h3 className="font-bold">{item.title}</h3>
                <ul className="list-disc">
                  {item.list.map((text) => (
                    <li className="my-4 ">{text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
