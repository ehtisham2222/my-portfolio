import React from 'react';
import { projectsData } from '../../../data/projectsData.jsx';

function Projects() {
  // Take only the first 3 projects for the home page showcase
  const displayProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-20 lg:px-16 text-white border-t border-gray-800">

      {/* Header section with heading and browse all button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold max-w-lg leading-tight mb-6 md:mb-0">
          Take a Look at My Design Portfolio
        </h2>
        <a
          href="#/projects"
          className="bg-[#E6E6E6] text-black px-6 py-2 text-sm font-medium tracking-wide transition-colors uppercase whitespace-nowrap hover:bg-[#E63E21] hover:text-white"
        >
          Browse All
        </a>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-12">
        {displayProjects.map((project, index) => (
          <div key={project.id} className="group cursor-pointer border-t border-gray-800 pt-10">
            <div className="flex flex-col lg:flex-row justify-between gap-10">

              {/* Text Content */}
              <div className="w-full lg:w-1/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-medium mb-4 group-hover:text-[#E63E21] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <p className="text-gray-500 text-sm mb-8 lg:mb-0">{project.date}</p>
                </div>

                {/* About Project Button */}
                <div className="hidden lg:block mt-auto">
                  <a href={`#/projects/${project.id}`} className="group inline-flex items-center gap-2 border border-gray-600 rounded-full px-5 py-2 text-xs uppercase tracking-wider hover:bg-[#E63E21] hover:text-white hover:border-[#E63E21] transition-all duration-300">
                    About Project
                    <svg className="transition-transform duration-300 -rotate-45 group-hover:rotate-0 group-active:rotate-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-2/3 overflow-hidden">
                <div className="relative w-full aspect-[16/9] lg:aspect-[16/8]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              {/* Mobile About Project Button (Shows below image on small screens) */}
              <div className="lg:hidden mt-4">
                <a href={`#/projects/${project.id}`} className="group inline-flex items-center gap-2 border border-gray-600 rounded-full px-5 py-2 text-xs uppercase tracking-wider hover:bg-[#E63E21] hover:text-white hover:border-[#E63E21] transition-all">
                  About Project
                  <svg className="transition-transform duration-300 -rotate-45 group-hover:rotate-0 group-active:rotate-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;
