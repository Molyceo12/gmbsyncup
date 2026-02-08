import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../data/landingPageData';

const UpcomingHighlight: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(1);

    const togglePlay = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            try {
                if (videoRef.current.paused) {
                    await videoRef.current.play();
                    setIsPlaying(true);
                } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            } catch (err) {
                console.error("Video playback failed:", err);
            }
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setVolume(value);
        if (videoRef.current) {
            videoRef.current.volume = value;
            videoRef.current.muted = value === 0;
            setIsMuted(value === 0);
        }
    };

    const navigateToDetails = () => {
        navigate('/event/1'); // Assuming ID 1 for upcoming
    };

    return (
        <section className="relative w-full py-16 md:py-24 bg-black overflow-hidden group/section">
            {/* Tilted Background Grid */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-10">
                <div
                    className="grid grid-cols-4 md:grid-cols-6 gap-4 w-[150%] h-[150%] origin-center transition-transform duration-[10s] ease-linear group-hover/section:scale-110"
                    style={{
                        transform: 'perspective(1000px) rotateX(25deg) rotateZ(-12deg) translateY(-10%)',
                    }}
                >
                    {[...Array(24)].map((_, idx) => (
                        <div
                            key={idx}
                            className="aspect-[2/3] md:aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <img
                                src={images[1] || images[0]}
                                alt={`Flyer ${idx}`}
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

            <div className="px-8 md:px-16 lg:px-24 relative z-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-white ml-4 animate-in fade-in slide-in-from-left duration-700">
                    Upcoming Event
                </h2>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-12">

                    {/* LEFT: Static Flyer Card */}
                    <div className="w-full md:w-[30%] flex justify-center order-1">
                        <div
                            onClick={navigateToDetails}
                            className="relative w-full max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-105 hover:shadow-red-600/20 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300"></div>
                            <img
                                src={images[1] || images[0]}
                                alt="Event Flyer"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 z-30">
                                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded border border-white/20 uppercase tracking-widest">
                                    Flyer
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE: Content Section */}
                    <div className="w-full md:w-[36%] text-center md:text-left space-y-6 animate-in fade-in zoom-in duration-1000 delay-300 order-2">
                        <div className="space-y-2">
                            <h3 className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs mb-2">
                                Don't Miss Out
                            </h3>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                                GAME <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">NIGHT</span>
                            </h2>
                        </div>

                        <p className="text-neutral-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
                            Memories &gt; Competition. Join us for an epic night of games, vibes, and community. Limited spots available.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/40 active:scale-95 text-xs uppercase tracking-wider">
                                Register Now
                            </button>
                            <button
                                onClick={navigateToDetails}
                                className="px-8 py-3 bg-transparent border border-white/20 hover:border-white text-white font-bold rounded-lg transition-all duration-300 hover:bg-white/5 backdrop-blur-sm active:scale-95 text-xs uppercase tracking-wider"
                            >
                                Add to Calendar
                            </button>
                        </div>

                        <div className="pt-8 flex flex-col md:flex-row gap-4 md:gap-8 text-neutral-500 text-[10px] font-bold border-t border-white/5 uppercase tracking-[0.2em] items-center md:items-start justify-center md:justify-start">
                            <div className="flex items-center gap-3">
                                <span className="text-red-600">Date:</span>
                                <span className="text-white">Oct 31, 2026</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-red-600">Location:</span>
                                <span className="text-white">Main Arena, NY</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Video Highlight Card */}
                    <div className="w-full md:w-[30%] flex justify-center order-3">
                        <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-red-600/30 transform transition-all duration-500 hover:scale-105 group/video">
                            {/* Video */}
                            <video
                                ref={videoRef}
                                loop
                                muted={isMuted}
                                playsInline
                                className="w-full h-full object-cover cursor-pointer"
                                poster={images[1] || images[0]}
                                onClick={togglePlay}
                            >
                                <source
                                    src="https://res.cloudinary.com/dlezmeikx/video/upload/v1769545529/v1c044g50000d517javog65tban3eu5g_bld5ha.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>

                            {/* Combined Interaction & Controls Layer */}
                            <div
                                className="absolute inset-0 z-30 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 p-4"
                            >
                                {/* Main Click Area for Details */}
                                <div
                                    className="absolute inset-0 cursor-pointer"
                                    onClick={navigateToDetails}
                                ></div>

                                {/* Controls (Prevent navigation when clicking controls) */}
                                <div className="relative z-10 flex items-center gap-4 text-white pointer-events-auto">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); togglePlay(e); }}
                                        className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                                    >
                                        {isPlaying ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                        )}
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggleMute(e); }}
                                        className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                                    >
                                        {isMuted ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                                        )}
                                    </button>
                                    <input
                                        type="range" min="0" max="1" step="0.1" value={isMuted ? 0 : volume}
                                        onChange={handleVolumeChange}
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-red-600"
                                    />
                                </div>
                            </div>

                            {/* Center Play Button Overlay (Visible when paused) */}
                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer pointer-events-none"
                                >
                                    <div className="bg-red-600/90 text-white p-6 rounded-full shadow-[0_0_50px_rgba(220,38,38,0.8)] transform transition-all duration-300 scale-100 opacity-100 animate-pulse">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {/* Badge */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg uppercase tracking-wider flex items-center gap-1.5 leading-none">
                                    <span className="w-1 h-1 bg-white rounded-full animate-ping"></span>
                                    Trailer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingHighlight;
