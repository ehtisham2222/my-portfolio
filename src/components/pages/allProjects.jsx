import React from 'react';
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import heroBg from '../../assets/images/blur.png';
import { projectsData } from '../../data/projectsData.jsx';

function AllProjects() {
    return (
        <div className='w-full bg-[#0D0D0D] min-h-screen text-white'>
            <Header />

            {/* Background Image Banner for Header Transparency */}
            <div
                className="absolute top-0 left-0 w-full h-[60vh] bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D0D]"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 pt-[140px] pb-24 lg:px-16">
                <div className="mb-16 text-center lg:text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">All Projects</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0">Explore my complete portfolio of web applications, AI systems, and design projects.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectsData.map((project) => (
                        <a href={`#/projects/${project.id}`} key={project.id} className="group block bg-[#161616] rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent opacity-80"></div>
                            </div>
                            <div className="p-8">
                                <p className="text-[#E63E21] text-xs font-mono mb-3">{project.date}</p>
                                <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#E63E21] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed mb-6">{project.description}</p>

                                <div className="flex items-center text-sm font-medium text-white group-hover:text-[#E63E21] transition-colors">
                                    View Details
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default AllProjects;
