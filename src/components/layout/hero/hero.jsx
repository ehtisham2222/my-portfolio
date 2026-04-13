import React from 'react'
import hero from '../../../assets/images/blur.png';
function Hero() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex-1 px-4 sm:px-6 lg:px-8 flex flex-col pt-28 pb-8">

        {/* Content Wrapper */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Main Text Content (Restricted Width) */}
          <div className="w-full md:w-[65%] lg:w-[55%] space-y-6">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] font-medium tracking-[-0.02em]">
              Full Stack MERN Developer currently based in Islamabad  Pakistan
            </h1>
            <p className="text-[#a1a1aa] text-base sm:text-[17px] leading-relaxed max-w-[95%]">
              Hello there! I'm Ehtisham Malik, a passionate full stack web developer specializing in the MERN stack. I craft modern, scalable, and user-friendly web applications with a focus on performance and seamless user experience. Welcome to my online portfolio &ndash; a showcase of my projects and technical expertise.
            </p>
          </div>

          {/* Inline Buttons & Socials Row (Full Width) */}
          <div className="w-full pt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-10">

            <a href="#/projects" className="inline-block bg-[#E9E9E7] text-black px-8 py-3.5 text-sm font-semibold hover:bg-[#E63E21] hover:text-white transition-colors tracking-wide text-center">
              EXPLORE WORKS
            </a>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12">
              <div className="flex items-center gap-6 sm:gap-8 text-[#E9E9E7] text-xs sm:text-sm font-medium tracking-widest uppercase">
                <a href="https://github.com/ehtisham2222"
                  target="_blank"
                  rel='noopener noreferrer'
                  className="hover:text-[#E63E21] hover:underline underline-offset-4 transition-colors duration-300">Github</a>
                <a href="https://www.linkedin.com/in/ehtisham-malik-6774512b6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel='noopener noreferrer'
                  className="hover:text-[#E63E21] hover:underline underline-offset-4 transition-colors duration-300">Linkedin</a>
                <a href="https://www.instagram.com/_whoisehtishambtw?igsh=MWp2OXh4aDJuZXBuMg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel='noopener noreferrer'
                  className="hover:text-[#E63E21] hover:underline underline-offset-4 transition-colors duration-300">Instagram</a>
              </div>

              <a href="#" className="border border-white/20 text-[#E9E9E7] px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-colors flex items-center gap-2 uppercase tracking-wider">
                Let's Talk <span className="text-xl leading-none font-light">&#x2197;</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero