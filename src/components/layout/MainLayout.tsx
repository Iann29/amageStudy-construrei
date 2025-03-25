import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SmoothScroll from '../common/SmoothScroll';

const MainLayout: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
