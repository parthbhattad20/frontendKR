import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import {
    FaBullseye,
    FaChartBar,
    FaCloud,
    FaCog,
    FaFileAlt,
    FaMoneyBillAlt,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import bg from "../../images/bgimage.jpeg";
import bg2 from "../../images/bgimage2.png";

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />

            <div
                className="flex flex-col items-center justify-center bg-gray-100 min-h-screen"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-center text-white mx-4 md:mx-10 lg:mx-20 xl:mx-40">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2351E5] w-2/3">
                        Welcome to Kloudraksha{" "}
                        <br /><span>
                            <Typewriter
                                words={[
                                    "Secure Your Cloud. ",
                                    "Optimize Your Cloud. ",
                                    "Protect Your Cloud. ",
                                ]}
                                cursorColor="white"
                                loop={100}
                                cursor
                                cursorStyle="|"
                                typeSpeed={40}
                                deleteSpeed={30}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                    <p className="text-lg md:text-l mb-8  text-justify w-2/3">
                        Unlock the power of seamless cloud configuration audits
                        with Kloudrakshak. Revolutionizing the way you conduct
                        compliance checks on cloud platforms, we bring you a
                        cutting-edge SaaS solution that ensures unparalleled
                        efficiency and accuracy.
                    </p>
                    <a
                        href="/auth"
                        className="inline-block  bg-[#6B8AFD]  hover:bg-[#2351E5]  text-white font-bold py-3 px-6 rounded-full transition duration-200 "
                    >
                        Get started
                    </a>
                </div>
            </div>

            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                        Key Features{" "}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <FeatureCard
                            icon="marketing"
                            title="Rapid Compliance Reporting"
                            description="Kloudraksha stands out by offering compliance reporting in a remarkably short timeframe of 4-5 hours, setting it apart from competitors who typically take significantly longer to generate reports."
                        />
                        <FeatureCard
                            icon="legal"
                            title="Unlimited Configuration Audits"
                            description="Unlike many competitors that impose limits on the number of configuration audits, Kloudrakshak provides unlimited audits, allowing users to conduct thorough checks as frequently as needed."
                        />
                        <FeatureCard
                            icon="business-automation"
                            title="Multi-Cloud Support"
                            description="While some competitors offer support for only a subset of cloud platforms, Kloudrakshak boasts compatibility with major providers including AWS, Azure, and Google Cloud, ensuring comprehensive coverage for diverse cloud environments."
                        />
                        <FeatureCard
                            icon="finance"
                            title="Automated Remediation and Continuous Monitoring"
                            description="Audit-proof software built for critical financial operations like month-end close and quarterly budgeting."
                        />
                        <FeatureCard
                            icon="enterprise-design"
                            title="Customizable Reports"
                            description="Kloudrakshak empowers users to tailor reports to their specific requirements, providing flexibility and insights tailored to their organizational needs."
                        />
                        <FeatureCard
                            icon="operations"
                            title="Operations"
                            description="Despite its advanced features and superior performance, Kloudrakshak offers competitive pricing compared to many competitors, ensuring exceptional value for businesses of all sizes."
                        />
                    </div>
                </div>
            </section>
            <hr className="my-6 border-blueGray-300" />

            <Footer />
        </>
    );
};

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
    const renderIcon = (icon: string) => {
        switch (icon) {
            case "Rapid Compliance Reporting":
                return (
                    <FaBullseye
                        color="#77E2FF"
                        className="w-8 h-8 text-primary-600"
                    />
                );
            case "Unlimited Configuration Audits":
                return (
                    <FaChartBar
                        color="#77E2FF"
                        className="w-8 h-8 text-primary-600 "
                    />
                );
            case "Multi-Cloud Support":
                return (
                    <FaCloud
                        color="#77E2FF"
                        className="w-8 h-8 text-primary-600"
                    />
                );
            case "Automated Remediation and Continuous Monitoring":
                return (
                    <FaCog color="cyan" className="w-8 h-8 text-primary-600" />
                );
            case "Customizable Reports":
                return (
                    <FaFileAlt
                        color="#77E2FF"
                        className="w-8 h-8 text-primary-600"
                    />
                );
            case "Operations":
                return (
                    <FaMoneyBillAlt
                        color="#77E2FF"
                        className="w-8 h-8 text-primary-600"
                    />
                );
            default:
                return null;
        }
    };
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                {renderIcon(title)}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900">
                {title}
            </h3>
            <p className="text-sm md:text-base text-center text-gray-600 text-justify">
                {description}
            </p>
        </div>
    );
};

export default Landing;
