import React from 'react';
import { gridImages } from '../../data/landingPageData';

const HeroSection: React.FC = () => {
    return (
        <div className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Tilted Background Grid */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
                <div
                    className="grid grid-cols-4 md:grid-cols-6 gap-4 w-[150%] h-[150%] origin-center"
                    style={{
                        transform: 'perspective(1000px) rotateX(25deg) rotateZ(-12deg) translateY(-10%)',
                    }}
                >
                    {gridImages.map((src, idx) => (
                        <div
                            key={idx}
                            className="aspect-[2/3] md:aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <img
                                src={src}
                                alt={`Media ${idx}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]"></div>

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto pt-20">
                <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                    Entertainment, events, and more.
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-8 text-neutral-200">
                    Plan your night. Free to get started.
                </p>

                <div className="w-full max-w-2xl px-4">
                    <p className="text-lg md:text-xl mb-4 text-neutral-300">
                        Ready to sync? Enter your email to begin your event preparation.
                    </p>
                    <div className="flex flex-col md:flex-row gap-3 w-full">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-grow bg-black/60 border border-neutral-500 px-6 py-4 rounded-lg text-lg backdrop-blur-md focus:outline-none focus:border-white transition-colors"
                        />
                        <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-xl font-bold flex items-center justify-center gap-2 group transition-all shrink-0">
                            Get Started
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Curve Border Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black to-transparent z-30"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-30 opacity-50"></div>
        </div>
    );
};

export default HeroSection;
