import React from 'react';
import HeroSection from './HeroSection';
import BenefitsBar from './BenefitsBar';
import CategoriesSection from './CategoriesSection';
import BestSellersSection from './BestSellersSection';
import TrustSection from './TrustSection';
import CTASection from './CTASection';
import '../../styles/home.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroSection />
      <BenefitsBar />
      <CategoriesSection />
      <BestSellersSection />
      <TrustSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
