import React from 'react';
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import About from '../layout/about/about';
import heroBg from '../../assets/images/blur.png';

function AboutPage() {
  return (
    <div className='w-full bg-[#E9E9E7] min-h-screen text-white relative flex flex-col overflow-hidden'>
      <Header />
      
      {/* Background Image Banner for Header Transparency */}
      <div 
        className="absolute top-0 left-0 w-full h-[60vh] bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Fades smoothly into the off-white bg of the about section */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E9E9E7]"></div>
      </div>
      
      <main className="relative z-10 flex-grow pt-[100px]">
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
