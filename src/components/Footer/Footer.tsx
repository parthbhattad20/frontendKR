import { FaRegEnvelope, FaUser, FaShieldAlt, FaPhone } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import logo from "../../images/KR_Final_2.png";

const Footer = () => {
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <img src={logo} className="h-14" alt="logo" />
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">
                            Let's keep in touch!
                        </h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2
                            business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <a>
                                <button
                                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </button>
                            </a>
                            <a href="mailto:connect@newtonsapple.in">
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fab fa-mail">
                                        <FaRegEnvelope />
                                    </i>
                                </button>
                            </a>

                            {/* <button
                                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-github"></i>
                            </button> */}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Useful Links
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/about"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/plans"
                                        >
                                            Plans
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/help"
                                        >
                                            Help
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2024</span>
                            <a
                                href="https://www.creative-tim.com/product/notus-js"
                                className="text-blueGray-500 hover:text-gray-800"
                                target="_blank"
                            />{" "}
                            Developed & Secured by
                            <a
                                href="https://www.newtonsapple.in"
                                className="text-blueGray-500 hover:text-blueGray-800"
                            >
                                 Newtons Apple Security Solutions.
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
