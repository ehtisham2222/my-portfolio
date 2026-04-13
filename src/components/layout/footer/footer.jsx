import React from 'react';
import profileImg from '../../../assets/images/bg.png';

function Footer() {
    return (
        <footer className="w-full bg-[#0D0D0D] text-white py-16 lg:py-24 border-t border-gray-800">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section */}
                <div className="mb-16">
                    <p className="text-gray-400 text-base md:text-lg mb-2">Have an idea?</p>
                    <h2 className="text-3xl md:text-4xl font-medium mb-12">Let's rock with me</h2>

                    {/* Big Contact Me Text */}
                    <div className="w-full border-b border-gray-800 pb-10">
                        <a href="#" className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold tracking-tight hover:text-white text-gray-200 transition-colors inline-block">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

                    {/* Profile */}
                    <div className="flex items-center gap-3">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={profileImg} alt="Ehtisham Malik" className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-[#E9E9E7] text-lg font-medium tracking-wide">EHTISHAM</span>
                            <span className="text-[#E63E21] text-lg font-medium tracking-wide">MALIK.</span>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="text-left md:text-center">
                        <p className="text-gray-400 text-sm font-medium">Based in Islamabad</p>
                        <p className="text-gray-200 text-base font-semibold tracking-wider uppercase">Pakistan</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 text-sm font-medium tracking-wider uppercase text-gray-400">
                        <a href="https://github.com/ehtisham2222" target="_blank"
                            rel="noopener noreferrer" className="hover:text-[#E63E21] hover:underline transition-colors">Github</a>
                        <a href="https://www.linkedin.com/in/ehtisham-malik-6774512b6?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63E21] hover:underline transition-colors">Linkedin</a>
                        <a href="https://www.instagram.com/_whoisehtishambtw?igsh=MWp2OXh4aDJuZXBuMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63E21] hover:underline transition-colors">Instagram</a>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
