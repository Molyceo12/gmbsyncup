import React, { useState } from 'react';
import { faqData } from '../../data/landingPageData';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group mb-2">
            <button
                className="w-full text-left bg-[#2d2d2d] hover:bg-[#414141] transition-colors p-6 flex justify-between items-center text-white md:text-2xl lg:text-3xl font-medium"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className="relative w-8 h-8 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-8 h-8 transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-200 ease-in-out bg-[#2d2d2d] mt-[1px] ${isOpen ? 'max-h-[1000px] opacity-100 py-6 px-6 border-t border-black' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-white text-lg md:text-xl lg:text-2xl leading-normal">{answer}</p>
            </div>
        </div>
    );
};

const FAQSection: React.FC = () => {
    return (
        <section className="relative z-30 bg-black px-8 md:px-16 lg:px-24 py-20 md:py-24 border-t border-neutral-800">
            <h2 className="text-3xl md:text-5xl font-black mb-12 text-white ml-2">Frequently Asked Questions</h2>
            <div className="w-full flex flex-col gap-2">
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>


        </section>
    );
};

export default FAQSection;
