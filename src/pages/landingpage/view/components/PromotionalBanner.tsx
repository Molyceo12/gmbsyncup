// Promotional Banner Component
import React from 'react';
import { images } from '../../data/landingPageData';

const PromotionalBanner: React.FC = () => {
    return (
        <section className="relative z-30 py-12 md:py-20 bg-black overflow-hidden border-t border-neutral-900 border-b border-neutral-900 group/banner">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)] pointer-events-none opacity-50 group-hover/banner:opacity-100 transition-opacity duration-700"></div>

            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white px-8 md:px-16 lg:px-24 ml-4">Latest Event</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-6 [perspective:1000px] py-4 md:py-10 overflow-x-hidden">

                {/* Left Card - Video Trailer */}
                <div className="w-full max-w-[280px] md:w-48 aspect-[2/3] rounded-xl overflow-hidden transform scale-95 md:[transform:rotateY(25deg)_scale(0.9)] border border-white/20 relative shadow-2xl z-10 bg-neutral-900 group cursor-pointer transition-all duration-500 hover:scale-100 md:hover:[transform:rotateY(15deg)_scale(1)] hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                    <div className="absolute inset-0">
                        <video
                            src="https://res.cloudinary.com/dlezmeikx/video/upload/v1769545529/v1c044g50000d517javog65tban3eu5g_bld5ha.mp4"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            muted
                            loop
                            playsInline
                            autoPlay
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                            {/* Pulsating Ring */}
                            <div className="absolute w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full animate-ping opacity-60"></div>
                            {/* Play Button */}
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-white ml-1">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                        <span className="text-white/80 font-bold text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 rounded backdrop-blur-sm group-hover:bg-white/10 group-hover:text-white transition-colors">Watch Trailer</span>
                    </div>
                </div>

                {/* Center Card - Main Feature */}
                <div className="w-full max-w-[320px] md:w-80 aspect-[2/3] rounded-xl overflow-hidden z-20 shadow-[0_0_50px_rgba(220,38,38,0.4)] border border-red-500/30 relative group transition-transform duration-500 hover:scale-105">
                    <img src={images[0]} alt="Main Feature" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                        <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>El Refugio Atómico</h3>
                        <p className="text-red-500 font-bold text-xs tracking-[0.2em] mt-2">PREMIERING NOW</p>
                    </div>
                </div>

                {/* Right Card - Video Trailer */}
                <div className="w-full max-w-[280px] md:w-48 aspect-[2/3] rounded-xl overflow-hidden transform scale-95 md:[transform:rotateY(-25deg)_scale(0.9)] border border-white/20 relative shadow-2xl z-10 bg-neutral-900 group cursor-pointer transition-all duration-500 hover:scale-100 md:hover:[transform:rotateY(-15deg)_scale(1)] hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                    <div className="absolute inset-0">
                        <video
                            src="https://res.cloudinary.com/dlezmeikx/video/upload/v1769545330/v1c044g50000d4koi57og65jmv30hse0_qcg5l8.mp4"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            muted
                            loop
                            playsInline
                            autoPlay
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                            {/* Pulsating Ring */}
                            <div className="absolute w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full animate-ping opacity-60"></div>
                            {/* Play Button */}
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-white ml-1">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                        <span className="text-white/80 font-bold text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 rounded backdrop-blur-sm group-hover:bg-white/10 group-hover:text-white transition-colors">Watch Trailer</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PromotionalBanner;
