import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex flex-col sm:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-6 gap-4 sm:gap-0 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-black tracking-tighter text-red-600">GMBSYNCUP</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 scale-90 sm:scale-100">
                <div className="relative group">
                    <select className="appearance-none bg-black/50 border border-neutral-700 text-sm pl-8 pr-10 py-1.5 rounded backdrop-blur-md focus:outline-none focus:border-white transition-colors cursor-pointer">
                        <option>English</option>
                        <option>Français</option>
                    </select>
                    <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                    </div>
                </div>
                <button className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded font-medium transition-colors text-sm whitespace-nowrap">
                    Sign In
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
