import React from 'react';
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import heroBg from '../../assets/images/blur.png';
import { blogPosts } from '../../data/blogData.jsx';

function BlogDetails({ blogId }) {
  const post = blogPosts.find(p => p.id === parseInt(blogId));

  if (!post) {
    return (
      <div className='w-full min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center text-white'>
        <Header />
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <a href="#/blog" className="text-[#E63E21] hover:text-white underline underline-offset-4">Back to Blog</a>
      </div>
    );
  }

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

      <main className="relative z-10 flex-grow pt-[140px] pb-24 max-w-4xl mx-auto px-6 lg:px-16 w-full">
        
        <a href="#/blog" className="inline-flex items-center text-gray-400 hover:text-[#E63E21] transition-colors mb-10 group">
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Insights
        </a>

        <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#E63E21]/10 text-[#E63E21] px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E63E21]/20">
                    {post.category}
                </span>
                <span className="text-gray-500 text-sm font-mono">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed italic border-l-4 border-[#E63E21] pl-6 py-2">
                {post.excerpt}
            </p>
        </div>

        <div className="w-full rounded-2xl overflow-hidden mb-16 shadow-2xl border border-gray-800 h-[300px] sm:h-[400px] md:h-[500px]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="whitespace-pre-line leading-relaxed text-lg">{post.content}</p>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default BlogDetails;
