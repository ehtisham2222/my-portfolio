import React, { useState } from 'react';
import logo from '../../../assets/images/bg.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-white/5 backdrop-blur border-white/10 fixed">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Left Side */}
          <a href="#/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] overflow-hidden rounded-full border border-transparent group-hover:border-[#E63E21]/30 transition-colors">
              <img
                src={logo}
                alt="profile"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[#E9E9E7] text-lg sm:text-xl font-medium tracking-wide group-hover:text-white transition-colors">
                EHTISHAM
              </span>
              <span className="text-[#E63E21] text-lg sm:text-xl font-medium tracking-wide">
                MALIK.
              </span>
            </div>
          </a>

          {/* Desktop Right Side Nav */}
          <div className="hidden md:flex items-center gap-8 text-[#E9E9E7] text-sm font-medium tracking-wide">
            <nav className="flex items-center gap-2 sm:gap-4">
              <a href="#/" onClick={() => window.scrollTo(0, 0)} className="relative group px-4 py-1.5 overflow-hidden rounded-sm">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">HOME</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[#E63E21] group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
              </a>
              <a href="#/about" className="relative group px-4 py-1.5 overflow-hidden rounded-sm">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">ABOUT</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[#E63E21] group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
              </a>
              <a href="#/projects" className="relative group px-4 py-1.5 overflow-hidden rounded-sm">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">WORKS</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[#E63E21] group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
              </a>
              <a href="#/blog" className="relative group px-4 py-1.5 overflow-hidden rounded-sm">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">BLOG</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[#E63E21] group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
              </a>
            </nav>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu} 
              className="text-[#E9E9E7] hover:text-white focus:outline-none transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#0D0D0D] transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-full flex justify-end p-6">
          <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-white transition-colors focus:outline-none">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="flex-grow flex flex-col items-center justify-center space-y-10 text-3xl font-bold tracking-widest uppercase">
          <a href="#/" onClick={() => { window.scrollTo(0, 0); toggleMobileMenu(); }} className="text-[#E9E9E7] hover:text-[#E63E21] hover:scale-110 transition-all duration-300">HOME</a>
          <a href="#/about" onClick={() => { window.scrollTo(0, 0); toggleMobileMenu(); }} className="text-[#E9E9E7] hover:text-[#E63E21] hover:scale-110 transition-all duration-300">ABOUT</a>
          <a href="#/projects" onClick={() => { window.scrollTo(0, 0); toggleMobileMenu(); }} className="text-[#E9E9E7] hover:text-[#E63E21] hover:scale-110 transition-all duration-300">WORKS</a>
          <a href="#/blog" onClick={() => { window.scrollTo(0, 0); toggleMobileMenu(); }} className="text-[#E9E9E7] hover:text-[#E63E21] hover:scale-110 transition-all duration-300">BLOG</a>
        </div>
        
        {/* Footer info in mobile menu */}
        <div className="p-8 text-center border-t border-gray-800 text-sm text-gray-500 font-medium">
            <p>EHTISHAM MALIK</p>
            <p className="mt-2 text-[#E63E21]">Based in Islamabad</p>
        </div>
      </div>
    </>
  );
}

export default Header;