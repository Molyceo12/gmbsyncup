import React from 'react';

const MoreReasons: React.FC = () => {
    const reasons = [
        {
            title: "Enjoy on any screen",
            desc: "Sync your event plans on Smart TVs, tablets, laptops, and phones seamlessly.",
            color: "from-pink-500 to-red-600",
            icon: (
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full"></div>
                    <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 relative z-10" stroke="url(#pinkGradient)" strokeWidth="1.5">
                        <defs>
                            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ec4899" />
                                <stop offset="100%" stopColor="#ef4444" />
                            </linearGradient>
                        </defs>
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                        <circle cx="12" cy="10" r="3" fill="url(#pinkGradient)" fillOpacity="0.3" />
                    </svg>
                </div>
            )
        },
        {
            title: "Sync events offline",
            desc: "Save your schedules and preparations to access even when you're without internet.",
            color: "from-purple-500 to-pink-500",
            icon: (
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full animate-pulse"></div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            )
        },
        {
            title: "Track everywhere",
            desc: "Real-time updates and notifications across all your connected devices.",
            color: "from-blue-500 to-indigo-600",
            icon: (
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                    <svg viewBox="0 0 24 24" className="w-12 h-12 relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="url(#blueGradient)" strokeWidth="2" fill="none" />
                        <path d="M10 7L10 13M7 10L13 10" stroke="url(#blueGradient)" strokeWidth="2" strokeLinecap="round" />
                        <defs>
                            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#4f46e5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            )
        },
        {
            title: "Seamless group prep",
            desc: "Collaborate with your team or friends in a space designed for event success.",
            color: "from-red-500 to-orange-500",
            icon: (
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
                    <div className="flex gap-1 relative z-10">
                        <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                            <div className="w-1 h-1 bg-white rounded-full translate-x-1 -translate-y-1"></div>
                        </div>
                        <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center translate-y-2 shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                            <div className="w-3 h-1 bg-white/50 rounded-full"></div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="relative z-30 bg-black px-8 md:px-16 lg:px-24 py-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white ml-4">More Reasons to Join</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                {reasons.map((reason, i) => (
                    <div key={i} className="bg-gradient-to-br from-[#191926] via-[#11111a] to-[#0f0f12] p-6 rounded-[2rem] border border-white/5 flex flex-col justify-between min-h-[200px] hover:from-[#1d1d2b] transition-all duration-500 group shadow-2xl">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-white leading-tight">{reason.title}</h3>
                            <p className="text-neutral-400 leading-relaxed font-medium">{reason.desc}</p>
                        </div>
                        <div className="flex justify-end mt-4 transform transition-transform group-hover:scale-110 duration-500">
                            {reason.icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MoreReasons;
