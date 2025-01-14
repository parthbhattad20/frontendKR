import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Payment = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Designed for business teams like yours
                        </h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            Select the plan that aligns perfectly with your
                            requirements, or contact us for a personalized
                            Enterprise solution tailored to your organization's
                            unique needs. Unlock the flexibility and power of
                            Kloudrakshak today!
                        </p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                                Essential
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Best option for personal use & for your next
                                project.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">
                                    $199
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>

                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                            >
                                <li className="flex items-center space-x-3">
                                    <FaTimes />
                                    <span>Compliance Reporting</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>
                                        Configuration Audits:12 audits/year
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Multi-Cloud Support:M365</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaTimes />
                                    <span>Remediation Support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaTimes />
                                    <span>Customized Reports</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaTimes />
                                    <span>Free On-call Support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>
                                        Priority Support: Basic (2 business
                                        days)
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Report Delivery:Within 24 hrs</span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-black bg-[#77E2FF] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-400  "
                            >
                                Buy
                            </a>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                                Advanced
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Relevant for multiple users, extended & premium
                                support.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">
                                    $999
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>

                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                            >
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Compliance Reporting</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>
                                        Configuration Audits:36 audits/year
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Multi-Cloud Support:M365, AWS</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Remediation Support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Customized Reports</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>
                                        Free On-call Support:Mon-Fri 10 am – 5
                                        pm IST
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>
                                        Priority Support: Priority (8 hrs)
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Report Delivery:Within 4 hrs</span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-black bg-[#77E2FF] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-400  "
                            >
                                Buy
                            </a>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                                Enterprise
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Best for large scale uses and extended
                                redistribution rights.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">
                                    $1999
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>

                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                            >
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Compliance Reporting</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Configuration Audits:Unlimited</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>
                                        Multi-Cloud Support:AWS, Azure, M365
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Remediation Support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Customized Reports</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Free On-call Support:24*7</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Priority Support: VIP (30 mins)</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Report Delivery:Within 30 minss</span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-black bg-[#77E2FF] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-400  "
                            >
                                Buy
                            </a>
                        </div>
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                                FLEXI
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Best for large scale uses and extended
                                redistribution rights.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">
                                    $199
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>

                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                            >
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Compliance Reporting</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Configuration Audits:1</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Multi-Cloud Support:All</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaTimes size={20} />
                                    <span>Remediation Support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaTimes size={20} />
                                    <span>Customized Reports</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>
                                        Free On-call Support:Mon-Fri 10 am – 5
                                        pm IST
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>
                                        Priority Support: Priority (8 hrs)
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FaCheck size={20} />
                                    <span>Report Delivery:Within 4 hrs</span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-black bg-[#77E2FF] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-400  "
                            >
                                Buy
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Payment;

<div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
        Choose a Plan
    </h2>
    <p className="mt-4 text-lg text-center text-gray-600">
        Select the plan that aligns perfectly with your requirements, or contact
        us for a personalized Enterprise solution tailored to your
        organization's unique needs. Unlock the flexibility and power of
        Kloudrakshak today!
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 ">
        {/* Essential Plan Card */}
        <div className="bg-white rounded-lg shadow-md p-6 ">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
                Essential
            </h3>
            <div className="flex justify-center items-center mt-4 mb-6">
                <p className="text-xl font-semibold text-gray-900">$199</p>
                <p className="text-gray-600 ml-1">/ month</p>
            </div>
            <ul className="text-sm text-gray-600">
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Compliance Reporting: No</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Configuration Audits: 12 audits/year</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Multi-Cloud Support: M365</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Remediation Support: ❌</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Customized Reports: ❌</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Free On-call Support: ❌</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Priority Support: Basic (2 business days)</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Report Delivery: Within 24 hrs</span>
                </li>
            </ul>
            <button className="block w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                Choose Plan
            </button>
        </div>

        {/* Advanced Plan Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
                Advanced
            </h3>
            <div className="flex justify-center items-center mt-4 mb-6">
                <p className="text-xl font-semibold text-gray-900">$999</p>
                <p className="text-gray-600 ml-1">/ month</p>
            </div>
            <ul className="text-sm text-gray-600">
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Compliance Reporting: Yes</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Configuration Audits: 36 audits/year</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Multi-Cloud Support: M365, AWS</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Remediation Support: ✔️</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Customized Reports: ✔️</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Free On-call Support: ❌</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Priority Support: Basic (2 business days)</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Report Delivery: Within 24 hrs</span>
                </li>
            </ul>
            <button className="block w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                Choose Plan
            </button>
        </div>

        {/* Enterprise Plan Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
                Enterprise
            </h3>
            <div className="flex justify-center items-center mt-4 mb-6">
                <p className="text-xl font-semibold text-gray-900">$1499</p>
                <p className="text-gray-600 ml-1">/ month</p>
            </div>
            <ul className="text-sm text-gray-600">
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Compliance Reporting: Yes</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Configuration Audits: Unlimited</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Multi-Cloud Support: M365, AWS, GCP</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Remediation Support: ✔️</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Customized Reports: ✔️</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Free On-call Support: ✔️</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Priority Support: Premium (24/7)</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Report Delivery: Real-time</span>
                </li>
            </ul>
            <button className="block w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                Choose Plan
            </button>
        </div>

        {/* FLEXI Plan Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
                FLEXI
            </h3>
            <div className="flex justify-center items-center mt-4 mb-6">
                <p className="text-xl font-semibold text-gray-900">$899</p>
                <p className="text-gray-600 ml-1">/ month</p>
            </div>
            <ul className="text-sm text-gray-600">
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Compliance Reporting: Yes</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    {/* <span>
                                    Configuration Audits: 24 audits/year
                                </span> */}
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>
                                    {<FaCheck className="text-green-500" />}
                                </span> */}
                    <span>Multi-Cloud Support: M365, AWS</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Remediation Support: ❌</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Customized Reports: ❌</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Free On-call Support: ❌</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Priority Support: Basic (2 business days)</span>
                </li>
                <li className="flex items-center space-x-1">
                    {/* <span>{<FaTimes />}</span> */}
                    <span>Report Delivery: Within 24 hrs</span>
                </li>
            </ul>
            <button className="block w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                Choose Plan
            </button>
        </div>
    </div>
</div>;
