import Navbar from "@/components/Navbar/Navbar";
import { FaCloud, FaRocket, FaHandshake } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";

const About = () => {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto px-4 py-12 lg:px-20">
                <section className="flex flex-col lg:flex-row lg:space-x-16 items-center">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-loose">
                            At Kloudrakshak, we're on a mission to redefine the
                            way businesses approach cloud configuration audits.
                            With a team of passionate experts in cloud security
                            and compliance, we strive to empower organizations
                            of all sizes to harness the full potential of their
                            cloud environments without compromising on security
                            or compliance.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://ramantivirus.com/wp-content/uploads/2023/07/cloud-security.jpg"
                            alt="Cloud Security Image"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </section>

                <section className="mt-12 flex flex-col lg:flex-row lg:space-x-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://t4.ftcdn.net/jpg/02/95/35/59/360_F_295355946_B9tCa67NAgwDRkVT0vD2UNykX0n1v85x.jpg"
                            alt="Cloud Compliance Image"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Empowering Your Business
                        </h2>
                        <p className="text-gray-700 leading-loose">
                            With Kloudrakshak, we aim to empower businesses to
                            navigate the complexities of cloud configuration
                            with ease, confidence, and efficiency. Join us on
                            our mission to revolutionize cloud compliance and
                            unlock new possibilities for your organization.
                        </p>
                    </div>
                </section>

                <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-md">
                        <FaCloud className="text-5xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            Cloud Security
                        </h3>
                        <p className="text-gray-700">
                            Ensuring your data stays safe and secure in the
                            cloud.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-md">
                        <FaRocket className="text-5xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            Innovation
                        </h3>
                        <p className="text-gray-700">
                            Continuous improvement and pioneering new solutions.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-md">
                        <FaHandshake className="text-5xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            Collaboration
                        </h3>
                        <p className="text-gray-700">
                            Working together to achieve common goals.
                        </p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default About;
