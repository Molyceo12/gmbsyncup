import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../data/landingPageData';

const LatestEventHighlight: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = async (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
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
                console.error("Playback failed:", err);
            }
        }
    };

    return (
        <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden group/section">
            {/* Background Narrative Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
            </div>

            <div className="px-8 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT: Content & Story */}
                    <div className="w-full lg:w-[45%] space-y-10 order-2 lg:order-1">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">Hall of Fame</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase italic">
                                Watch Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-400">Greatest</span> <br />
                                Event
                            </h2>

                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-medium max-w-lg">
                                Revisit the greatest night in GMB history. A standard-setting event that redefined the culture and left an unforgettable mark on NYC.
                            </p>
                        </div>

                        {/* Registered Attendees Stack */}
                        <div className="flex flex-col gap-3 py-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-neutral-800 shadow-xl">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="attendee" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-red-600 flex items-center justify-center text-[10px] font-black text-white shadow-xl">
                                    +2k
                                </div>
                            </div>
                            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                                Join <span className="text-white">2,500+</span> Who Registered For This Hit
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 items-center">
                            <button
                                onClick={() => navigate('/event/1')}
                                className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-red-600 hover:text-white transition-all duration-500 uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-red-600/40 transform hover:-translate-y-1"
                            >
                                RELIVE THE MAGIC
                            </button>

                            <button
                                onClick={() => togglePlay()}
                                className="flex items-center gap-4 group/play-btn"
                            >
                                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover/play-btn:border-red-600 group-hover/play-btn:bg-red-600/10 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                        {isPlaying ? (
                                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                        ) : (
                                            <path d="M8 5v14l11-7z" />
                                        )}
                                    </svg>
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-white/60 group-hover/play-btn:text-white transition-colors">
                                    {isPlaying ? 'Pause Recap' : 'Play Highlight'}
                                </span>
                            </button>
                        </div>

                        <div className="pt-10 flex flex-col gap-4 border-t border-white/5">
                            <h5 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Live Shoutouts</h5>
                            <div className="relative group/input max-w-sm">
                                <input
                                    type="text"
                                    placeholder="Drop a vibe or comment..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-600/50 transition-all"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-focus-within/input:opacity-100 transition-opacity">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/5">
                            <div>
                                <h4 className="text-2xl font-black text-white">Record</h4>
                                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Attendance</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-black text-white">10/10</h4>
                                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Vibe Rating</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-2 bg-red-600/20 blur-xl rounded-full"></div>
                                <h4 className="text-2xl font-black text-red-600 relative">ICONIC</h4>
                                <p className="text-[10px] text-neutral-500 uppercase tracking-widest relative">Status</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Floating Media Card */}
                    <div className="w-full lg:w-[55%] order-1 lg:order-2">
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-[80px]"></div>
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-red-600/5 rounded-full blur-[100px]"></div>

                            {/* Main Card */}
                            <div
                                className="relative rounded-[2rem] overflow-hidden bg-neutral-900 aspect-[16/10] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/5 transform transition-transform duration-700 hover:scale-[1.02] cursor-pointer"
                                onClick={() => navigate('/event/1')}
                            >
                                <video
                                    ref={videoRef}
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    className="w-full h-full object-cover grayscale-[0.5] group-hover/section:grayscale-0 transition-all duration-1000"
                                    poster={images[0]}
                                >
                                    <source src="https://res.cloudinary.com/dlezmeikx/video/upload/v1769545529/v1c044g50000d517javog65tban3eu5g_bld5ha.mp4" type="video/mp4" />
                                </video>

                                {/* Media Overlays */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Bottom Info Bar */}
                                <div className="absolute inset-x-0 bottom-0 p-8 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center font-black italic text-red-600 text-xl shadow-2xl">
                                            G
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold leading-tight">Syncup Grand Opening</h3>
                                            <p className="text-white/40 text-[10px] uppercase tracking-widest">September 2026 • NYC</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                                            className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                                        >
                                            {isMuted ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Floating "Recap" Badge */}
                                <div className="absolute top-8 right-8">
                                    <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white">4K Recap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LatestEventHighlight;
