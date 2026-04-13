import React from 'react'
import profileImg from '../../../assets/images/bg.png';

function About() {
  return (
    <section className="w-full bg-[#E9E9E7] text-black py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-12 items-start justify-between">
          
          {/* Left: Section Title */}
          <div className="w-full md:w-[20%]">
            <h3 className="uppercase tracking-[0.2em] text-sm font-semibold text-gray-800">
              About Me
            </h3>
          </div>

          {/* Middle: Content */}
          <div className="w-full md:w-[50%] space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] font-medium tracking-tight text-gray-900">
              Transforming Ideas into Robust Web Applications
            </h2>
            <p className="text-gray-700 text-base sm:text-[17px] leading-relaxed">
              I'm Ehtisham Malik, a passionate Full Stack Developer specializing in the MERN stack currently based in Islamabad, Pakistan. With a deep focus on innovation and clean architecture, I thrive on turning complex problems into seamless, scalable web experiences. Explore my portfolio and join me on a journey where efficient code meets intuitive design to tell compelling digital stories. Let's bring your vision to life!
            </p>
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 border border-black/40 rounded-full px-7 py-2.5 text-sm font-medium hover:bg-[#E63E21] hover:text-white transition-colors uppercase tracking-wider hover:border-[#E63E21]">
                More About Me <span className="text-xl leading-none font-light">&#x2197;</span>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-[30%] flex justify-center md:justify-end">
            <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] overflow-hidden rounded-full shadow-lg">
              <img 
                src={profileImg} 
                alt="Ehtisham Malik" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="mt-20 lg:mt-24 w-full border-b border-black/20"></div>

        {/* Skills / Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          <div className="space-y-3">
            <h4 className="text-[22px] font-medium text-gray-900">Frontend Dev</h4>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Building responsive, interactive, and dynamic user interfaces using React.js and modern UI styling frameworks.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-[22px] font-medium text-gray-900">Backend APIs</h4>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Designing scalable server-side applications and robust RESTful APIs with Node.js and Express to power complex systems.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-[22px] font-medium text-gray-900">Database Design</h4>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Architecting flexible NoSQL database schemas in MongoDB for optimized performance, secure storage, and rapid data retrieval.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-[22px] font-medium text-gray-900">Full Integration</h4>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Bridging the gap between server and client with seamless data flow, ensuring optimized application performance end-to-end.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
