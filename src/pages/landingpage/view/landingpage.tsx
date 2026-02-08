import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PromotionalBanner from './components/PromotionalBanner';
import LatestEventHighlight from './components/LatestEventHighlight';
import LatestEvents from './components/LatestEvents';
import UpcomingHighlight from './components/UpcomingHighlight';
import MoreReasons from './components/MoreReasons';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const LandingPage: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-inter">
            <Navbar />
            <HeroSection />
            <UpcomingHighlight />
            <PromotionalBanner />
            <LatestEventHighlight />
            <LatestEvents />
            <MoreReasons />
            <FAQSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
