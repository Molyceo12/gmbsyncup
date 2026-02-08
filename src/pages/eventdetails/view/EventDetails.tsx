import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { images } from '../../landingpage/data/landingPageData';

const EventDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const eventId = parseInt(id || '1');
    const mainImage = images[(eventId - 1) % images.length];

    // Mock data for the gallery
    const galleryItems = [
        { type: 'image', url: mainImage },
        { type: 'video', url: 'https://res.cloudinary.com/dlezmeikx/video/upload/v1769545529/v1c044g50000d517javog65tban3eu5g_bld5ha.mp4' },
        { type: 'image', url: images[(eventId) % images.length] },
        { type: 'image', url: images[(eventId + 1) % images.length] },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-inter">
            {/* Simple Navbar */}
            <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-8 py-4 flex items-center justify-between ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-white hover:text-red-500 transition-colors group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6" /></svg>
                    <span className="font-bold uppercase tracking-widest text-sm">Back to Home</span>
                </button>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-black italic">GMB</div>
            </nav>

            {/* Hero Section */}
            <header className="relative h-[60vh] md:h-[80vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={mainImage}
                        alt="Event Detail"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 lg:p-24 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.2),transparent_50%)]">
                        <h3 className="text-red-500 font-bold uppercase tracking-[0.4em] text-xs mb-2">Event Details</h3>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-4">
                            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">#{eventId}</span>
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed">
                            Experience the energy and community of GMB Syncup. Bringing people together through premium entertainment and unforgettable game nights.
                        </p>
                    </div>
                </div>
            </header>

            {/* Gallery Section */}
            <section className="px-8 md:px-16 lg:px-24 py-20 bg-black">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Media Gallery</h2>
                        <div className="h-1 w-24 bg-red-600 rounded-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 group bg-neutral-900 ${idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                        >
                            {item.type === 'image' ? (
                                <>
                                    <img
                                        src={item.url}
                                        alt={`Gallery ${idx}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="aspect-video lg:h-full relative overflow-hidden">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src={item.url} type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-red-600/10 pointer-events-none"></div>
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                                            <span className="w-1 h-1 bg-white rounded-full animate-ping"></span>
                                            Video
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer space */}
            <footer className="py-20 border-t border-white/5 text-center">
                <button
                    onClick={() => navigate('/')}
                    className="px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/40 uppercase tracking-widest text-sm"
                >
                    Explore More Events
                </button>
                <div className="mt-12 text-neutral-600 text-sm font-medium uppercase tracking-[0.5em]">
                    Gaston Mob &copy; 2026
                </div>
            </footer>
        </div>
    );
};

export default EventDetails;
