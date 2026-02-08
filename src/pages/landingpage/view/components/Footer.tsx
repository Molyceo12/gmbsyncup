import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-30 py-12 px-8 md:px-16 lg:px-24 border-t border-neutral-800 bg-black text-neutral-500 text-sm">
            <div className="w-full space-y-8">

                {/* Finish Sign-Up Button */}
                <div className="flex justify-start mb-8">
                    <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded text-xl font-medium text-white flex items-center gap-2 transition-colors">
                        Finish Sign-Up
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>

                <a href="#" className="hover:underline text-neutral-400 block mb-6">Questions? Contact us.</a>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <a href="#" className="underline">FAQ</a>
                    <a href="#" className="underline">Help Center</a>
                    <a href="#" className="underline">Account</a>
                    <a href="#" className="underline">Media Center</a>

                    <a href="#" className="underline">Investor Relations</a>
                    <a href="#" className="underline">Jobs</a>
                    <a href="#" className="underline">Ways to Watch</a>
                    <a href="#" className="underline">Terms of Use</a>

                    <a href="#" className="underline">Privacy</a>
                    <a href="#" className="underline">Cookie Preferences</a>
                    <a href="#" className="underline">Corporate Information</a>
                    <a href="#" className="underline">Contact Us</a>

                    <a href="#" className="underline">Speed Test</a>
                    <a href="#" className="underline">Legal Notices</a>
                    <a href="#" className="underline">Only on GMBSYNCUP</a>
                </div>

                <div className="relative group inline-block mt-4">
                    <select className="appearance-none bg-black border border-neutral-600 text-neutral-400 text-sm pl-8 pr-6 py-1.5 rounded focus:outline-none focus:border-white transition-colors cursor-pointer">
                        <option>English</option>
                        <option>Français</option>
                    </select>
                    <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                    </div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                </div>

                <p className="mt-4 text-xs">GMBSYNCUP Rwanda</p>
            </div>
        </footer>
    );
};

export default Footer;
