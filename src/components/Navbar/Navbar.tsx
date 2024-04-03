import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/KloudRakhsa.png";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="/KR.png" className="h-14" alt="Flowbite Logo" />
                </a>
                <button
                    onClick={toggleNavbar}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-solid-bg"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <FaBars className="w-5 h-5" />
                </button>
                <div
                    className={`w-full md:flex md:w-auto ${
                        isOpen ? "" : "hidden"
                    }`}
                    id="navbar-solid-bg"
                >
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 items-center">
                        <li>
                            <a
                                href="/"
                                className="block py-3 px-2 md:p-0 text-gray-900 rounded-md hover:bg-gray-500 hover:p-2 md:border-0 dark:text-white md:dark:hover:dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-blue-900 items-center group-hover:underline"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="/about"
                                className="block py-3 px-2 md:p-0 text-gray-900 rounded-md hover:bg-gray-500 hover:p-2 md:border-0 dark:text-white md:dark:hover:dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-blue-900 items-center group-hover:underline"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/plans"
                                className="block py-3 px-2 md:p-0 text-gray-900 rounded-md hover:bg-gray-500 hover:p-2 md:border-0 dark:text-white md:dark:hover:dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-blue-900 items-center group-hover:underline"
                            >
                                Plans
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="block py-3 px-2 md:p-0 text-gray-900 rounded-md hover:bg-gray-500 hover:p-2 md:border-0 dark:text-white md:dark:hover:dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-blue-900 items-center group-hover:underline"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="/help"
                                className="block py-3 px-2 md:p-0 text-gray-900 rounded-md hover:bg-gray-500 hover:p-2 md:border-0 dark:text-white md:dark:hover:dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-blue-900 items-center group-hover:underline"
                            >
                                Help
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
