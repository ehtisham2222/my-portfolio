import React from 'react';
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import heroBg from '../../assets/images/blur.png';

import { blogPosts } from '../../data/blogData.jsx';

function Blog() {
  return (
    <div className='w-full bg-[#0D0D0D] min-h-screen text-white relative flex flex-col overflow-hidden'>
      <Header />
      
      {/* Background Image Banner */}
      <div 
        className="absolute top-0 left-0 w-full h-[60vh] bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D0D]"></div>
      </div>
      
      <main className="relative z-10 flex-grow pt-[140px] pb-24 max-w-7xl mx-auto px-6 lg:px-16 w-full">
        
        <div className="mb-16 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Insights & Thoughts</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0">Explore my latest takes on the evolving landscape of web development, artificial intelligence, and software engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
                <a href={`#/blog/${post.id}`} key={post.id} className="group flex flex-col bg-[#161616] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E63E21]/10 cursor-pointer">
                    
                    <div className="relative h-64 overflow-hidden">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#E63E21] border border-[#E63E21]/30">
                            {post.category}
                        </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                        <p className="text-gray-500 text-sm font-mono mb-3">{post.date}</p>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#E63E21] transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                        
                        <div className="inline-flex items-center text-sm font-semibold tracking-wider uppercase text-white group-hover:text-[#E63E21] transition-colors mt-auto">
                            Read Article
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

export default Blog;
