import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen" style={{ backgroundImage: `url(https://img.freepik.com/free-vector/abstract-secure-technology-background_23-2148331624.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="text-center text-white mx-4 md:mx-10 lg:mx-20 xl:mx-40">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to Kloudrakshak - Your Cloud Configuration Audit Solution!</h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed">Unlock the power of seamless cloud configuration audits with Kloudrakshak. Revolutionizing the way you conduct compliance checks on cloud platforms, we bring you a cutting-edge SaaS solution that ensures unparalleled efficiency and accuracy. Say goodbye to lengthy audits that consume days of your time. With Kloudrakshak, you can achieve compliance reporting in just 4-5 hours, allowing you to focus on what truly matters - driving your business forward. Experience the ease of identifying and resolving configuration discrepancies across various cloud platforms, all within a single, user-friendly interface. Trust Kloudrakshak to safeguard your cloud infrastructure and maintain compliance effortlessly.</p>
                    <a href="/auth" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">Get started</a>
                </div>
            </div>

            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Designed for business teams like yours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <FeatureCard icon="marketing" title="Marketing" description="Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan." />
                        <FeatureCard icon="legal" title="Legal" description="Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you." />
                        <FeatureCard icon="business-automation" title="Business Automation" description="Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started." />
                        <FeatureCard icon="finance" title="Finance" description="Audit-proof software built for critical financial operations like month-end close and quarterly budgeting." />
                        <FeatureCard icon="enterprise-design" title="Enterprise Design" description="Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration." />
                        <FeatureCard icon="operations" title="Operations" description="Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individuals." />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                {renderIcon(icon)}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900">{title}</h3>
            <p className="text-sm md:text-base text-center text-gray-600">{description}</p>
        </div>
    );
};

const renderIcon = (icon: string) => {
    switch (icon) {
        case "marketing":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4v16h18V4H3zm8 8H7v2h4v-2zm0-2H7v2h4v-2zm-4-2h4V8H7V6zm10 8h-3v2h3v-2zm0-2h-3v2h3v-2zm-3-2h3V8h-3V6z" />
                </svg>
            );
        case "legal":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            );
        case "business-automation":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            );
        case "finance":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            );
        case "enterprise-design":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            );
        case "operations":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            );
        default:
            return null;
    }
};

export default Landing;
