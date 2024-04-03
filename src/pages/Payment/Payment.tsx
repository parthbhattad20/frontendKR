import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Payment = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
                    Choose a Plan
                </h2>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Select the plan that aligns perfectly with your
                    requirements, or contact us for a personalized Enterprise
                    solution tailored to your organization's unique needs.
                    Unlock the flexibility and power of Kloudrakshak today!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 ">
                    {/* Essential Plan Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 ">
                        <h3 className="text-lg font-semibold text-gray-900 text-center">
                            Essential
                        </h3>
                        <div className="flex justify-center items-center mt-4 mb-6">
                            <p className="text-xl font-semibold text-gray-900">
                                $199
                            </p>
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
                                <span>
                                    Configuration Audits: 12 audits/year
                                </span>
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
                                <span>
                                    Priority Support: Basic (2 business days)
                                </span>
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
                            <p className="text-xl font-semibold text-gray-900">
                                $999
                            </p>
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
                                <span>
                                    Configuration Audits: 36 audits/year
                                </span>
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
                                <span>
                                    Priority Support: Basic (2 business days)
                                </span>
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
                            <p className="text-xl font-semibold text-gray-900">
                                $1499
                            </p>
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
                            <p className="text-xl font-semibold text-gray-900">
                                $899
                            </p>
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
                                <span>
                                    Priority Support: Basic (2 business days)
                                </span>
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
            </div>
            <Footer />
        </div>
    );
};

export default Payment;
