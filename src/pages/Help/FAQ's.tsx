import React, { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

const FAQs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqsData: FAQ[] = [
        {
            question:
                "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            question:
                "Why do we use it What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        },
        {
            question:
                "Where does it come from What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text",
        },
        {
            question:
                "Where can I get some? What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing",
            answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
        },
    ];

    const toggleFAQ = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800">
                <h1 className="text-4xl font-bold mb-10 mt-20 uppercase text-center">
                    FAQs
                </h1>
                {faqsData.map((faq, index) => (
                    <div
                        key={index}
                        className="border p-4 mb-4 rounded-lg cursor-pointer transition ease-in-out duration-300 transform hover:shadow-md"
                        onClick={() => toggleFAQ(index)}
                    >
                        <h2 className="text-lg font-medium">{faq.question}</h2>
                        <div
                            className={`mt-2 ${
                                activeIndex === index ? "block" : "hidden"
                            }`}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FAQs;
