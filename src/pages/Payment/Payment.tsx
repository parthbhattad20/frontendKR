import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const Payment = () => {
  return (
    <div>
      <Navbar/>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
            <p className="mb-5 font-light text-gray-700 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Essential</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">No</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">12 audits/year</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">M365</p>
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <p className="mb-6 text-gray-600 dark:text-gray-300">Basic (2 business days)</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Within 24 hrs</p>
              <span className="mr-2 text-2xl font-extrabold text-gray-900 dark:text-white">$199</span>
              <span className="text-gray-600 dark:text-gray-300">/month</span>
              <a href="#" className="block w-full py-2 mt-6 text-sm font-semibold text-center text-white bg-primary-500 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-200 dark:focus:ring-primary-700">Get started</a>
            </div>
            <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Advanced</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Yes</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">36 audits/year</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">M365, AWS</p>
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <p className="mb-6 text-gray-600 dark:text-gray-300">Priority (8 hrs)</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Within 4 hrs</p>
              <span className="mr-2 text-2xl font-extrabold text-gray-900 dark:text-white">$999</span>
              <span className="text-gray-600 dark:text-gray-300">/month</span>
              <a href="#" className="block w-full py-2 mt-6 text-sm font-semibold text-center text-white bg-primary-500 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-200 dark:focus:ring-primary-700">Get started</a>
            </div>
            <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Enterprise</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Yes</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Unlimited</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">AWS, Azure, M365</p>
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <p className="mb-6 text-gray-600 dark:text-gray-300">VIP (30 mins)</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Within 30 mins</p>
              <span className="mr-2 text-2xl font-extrabold text-gray-900 dark:text-white">$1999</span>
              <span className="text-gray-600 dark:text-gray-300">/month</span>
              <a href="#" className="block w-full py-2 mt-6 text-sm font-semibold text-center text-white bg-primary-500 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-200 dark:focus:ring-primary-700">Get started</a>
            </div>
            <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">FLEXI</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Yes</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">1</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">All</p>
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <FaCheck className="mb-2 text-green-500" />
              <p className="mb-6 text-gray-600 dark:text-gray-300">Priority (8 hrs)</p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Within 4 hrs</p>
              <span className="mr-2 text-2xl font-extrabold text-gray-900 dark:text-white">$199</span>
              <span className="text-gray-600 dark:text-gray-300">/scan</span>
              <a href="#" className="block w-full py-2 mt-6 text-sm font-semibold text-center text-white bg-primary-500 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-200 dark:focus:ring-primary-700">Get started</a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Payment;
