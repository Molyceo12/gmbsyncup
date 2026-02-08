import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../data/landingPageData';

interface EventCardProps {
    id: number;
    image: string;
    rank: number;
}

const VideoEventCard: React.FC<EventCardProps> = ({ id, image, rank }) => {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            onClick={() => navigate(`/event/${id}`)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex-none flex items-end relative group cursor-pointer h-[180px] md:h-[240px] w-[160px] md:w-[220px]"
        >
            {/* Rank Number (Netflix Style) */}
            <span className="text-[140px] md:text-[200px] font-black leading-none drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] select-none italic absolute left-0 z-20 transition-transform duration-300 group-hover:scale-110"
                style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.7)',
                    color: 'black',
                    transform: 'translateX(-20%)'
                }}
            >
                {rank}
            </span>

            {/* Poster Card Container */}
            <div className="relative flex-1 h-full ml-[40px] md:ml-[60px] z-10 transition-all duration-300 group-hover:scale-110 group-hover:z-30">
                <div className="relative w-full h-full rounded-md overflow-hidden bg-neutral-900 shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.9)] group-hover:ring-2 group-hover:ring-white/20">
                    {/* Poster Image */}
                    <img
                        src={image}
                        alt={`Event ${id}`}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                    />

                    {/* Video Preview */}
                    <video
                        ref={videoRef}
                        loop
                        muted
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <source src="https://res.cloudinary.com/dlezmeikx/video/upload/v1769545529/v1c044g50000d517javog65tban3eu5g_bld5ha.mp4" type="video/mp4" />
                    </video>

                    {/* Progress Bar */}
                    {isHovered && (
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10">
                            <div className="h-full bg-red-600 animate-[progress_10s_linear]"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const LatestEvents: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    return (
        <section className="relative z-30 bg-black px-8 md:px-16 lg:px-24 py-12 group/row overflow-hidden">
            <div className="mb-4 ml-4">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Event Archives</h2>
            </div>

            <div className="relative group/scroll">
                {/* Scroll Buttons */}
                <button
                    onClick={() => scrollRef.current?.scrollBy({ left: -600, behavior: 'smooth' })}
                    className="absolute left-0 top-0 bottom-0 z-[60] w-12 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-all duration-300 hover:bg-black/80"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m15 18-6-6 6-6" /></svg>
                </button>

                <button
                    onClick={() => scrollRef.current?.scrollBy({ left: 600, behavior: 'smooth' })}
                    className="absolute right-0 top-0 bottom-0 z-[60] w-12 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-all duration-300 hover:bg-black/80"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m9 18 6-6-6-6" className="rotate-180 origin-center" /></svg>
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar py-8 px-4 scroll-smooth"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank) => (
                        <VideoEventCard
                            key={rank}
                            id={rank}
                            rank={rank}
                            image={images[(rank - 1) % images.length]}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default LatestEvents;
