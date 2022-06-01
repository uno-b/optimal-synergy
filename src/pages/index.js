import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import { heroItems, resolvingPain } from '../components/data';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout>
        <div className="">
          <div className="flex flex-col lg:flex-row w-full ">
            <div className="relative w-full lg:w-2/3 h-full">
              <StaticImage
                src="../images/mountain.webp"
                objectFit="cover"
                layout="fullWidth"
              />
              <p className="absolute bottom-2 text-orange-300 text-center w-full">
                Everything should be made as simple as possible, but not
                simpler. -Albert Einstein
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <h2 className="bg-[#53463F] text-white font-bold text-xl py-4 pl-10 border-t-2 border-orange-300">
                WHAT IS YOUR PAIN?
              </h2>
              <ul className="p-10 space-y-2 md:space-y-2 lg:space-y-4 xl:space-y-10 2xl:space-y-16">
                {heroItems.map((item) => (
                  <li className="">
                    <h3 className="font-bold mb-2">{item.header}</h3>
                    <p>{item.text}</p>
                    <hr className="mt-4" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left side */}
            <div className="w-full lg:w-8/12 p-10 bg-gray-100">
              <p className="mb-4 text-2xl font-bold">RESOLVIN CUSTOMER PAIN</p>
              <ul className="space-y-4">
                {resolvingPain.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>

            {/* Right side */}
            <div className="m-10">
              <h3 className="font-bold text-2xl">
                Optimize Synergy of People, Process and Technology
              </h3>
              <hr className="my-4 border-t-2 border-orange-300" />

              <p className="mb-4">
                Pains result from lack of adequate Governance. Governance also
                requires appropriate focus on effectiveness in meeting customer
                needs, efficiency in managing the organization and achieving
                necessary regulatory compliance.
              </p>
              <p className="mb-4">
                Customers (external or internal) are primarily interested in how
                effectively the vendor organization meets their needs.
                Regulators care for compliance only. However, Stakeholders
                (Management, Board and Employees) have to ensure that all three
                - Effectiveness, Efficiency and Compliance - are properly
                addressed through effective Business Process Management.
              </p>
              <p className="font-bold mb-4">
                Stakeholders are also the custodians of Organizational
                Governance.
              </p>

              <div className="flex flex-col lg:flex-row mb-20">
                <div>
                  <p className="mb-4">
                    We establish superior governance for business processes
                    without capital expense and without additional headcounts.
                    We utlize existing resources only.
                  </p>
                  <p>
                    This will also be accomplished with a long term strategy
                    along with recommended specific tactical steps that are also
                    practical and simple so that improvements are sustained.
                  </p>
                </div>
                <StaticImage
                  src="../images/stakeholders.jpg"
                  width={500}
                  className="lg:ml-10 mt-4 lg:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;
