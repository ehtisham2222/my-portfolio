import React from 'react';
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import heroBg from '../../assets/images/blur.png';
import { projectsData } from '../../data/projectsData.jsx';

function ProjectDetails({ projectId }) {
  // Find the project based on the ID passed from props (router)
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className='w-full min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center text-white'>
        <Header />
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <a href="#/projects" className="text-amber-500 hover:text-amber-400 underline underline-offset-4">Back to Projects</a>
      </div>
    );
  }

  return (
    <div className='w-full bg-[#0D0D0D] min-h-screen text-white relative'>
      <Header />

      {/* Background Image Banner for Header Transparency */}
      <div
        className="absolute top-0 left-0 w-full h-[60vh] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D0D]"></div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-[140px] pb-24 lg:px-16">

        <a href="#/projects" className="inline-flex items-center text-gray-400 hover:text-[#E63E21] transition-colors mb-10 group">
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </a>

        <div className="mb-12">
          <p className="text-[#E63E21] font-mono mb-4">{project.date}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{project.title}</h1>
        </div>

        <div className="w-full rounded-2xl overflow-hidden mb-16 shadow-2xl border border-gray-800">
          <img src={project.image} alt={project.title} className="w-full object-cover max-h-[70vh]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg">
          <div className="md:col-span-2 text-gray-300 leading-relaxed space-y-6">

            {project.description && (
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">About the Project</h2>
                <p className="whitespace-pre-line">{project.longDescription || project.description}</p>
              </div>
            )}

            {project.challenges && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-white mb-4">Challenges & Solutions</h2>
                <p className="whitespace-pre-line">{project.challenges}</p>
              </div>
            )}

          </div>

          <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 h-fit">
            <h3 className="text-xl font-medium mb-6 border-b border-gray-800 pb-4">Project Info</h3>

            <div className="space-y-6">

              {project.role && (
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Role</p>
                  <p className="text-gray-300">{project.role}</p>
                </div>
              )}

              {project.timeline && (
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Timeline</p>
                  <p className="text-gray-300">{project.timeline}</p>
                </div>
              )}

              {project.platform && (
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Platform</p>
                  <p className="text-gray-300">{project.platform}</p>
                </div>
              )}

              {/* Fallback if no specific meta info is provided but we need the box to have content */}
              {!project.role && !project.timeline && !project.platform && (
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Status</p>
                  <p className="text-gray-300">Completed</p>
                </div>
              )}

            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default ProjectDetails;
