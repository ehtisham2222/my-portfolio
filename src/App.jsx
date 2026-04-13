import { useState, useEffect } from 'react';
import './App.css'
import Home from './components/pages/home'
import AllProjects from './components/pages/allProjects'
import ProjectDetails from './components/pages/projectDetails'
import AboutPage from './components/pages/aboutPage'
import Blog from './components/pages/blog'
import BlogDetails from './components/pages/blogDetails'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on navigation
    };
    window.addEventListener('hashchange', onLocationChange);
    return () => window.removeEventListener('hashchange', onLocationChange);
  }, []);

  let content;
  if (currentPath === '#/') {
    content = <Home />;
  } else if (currentPath === '#/projects') {
    content = <AllProjects />;
  } else if (currentPath === '#/about') {
    content = <AboutPage />;
  } else if (currentPath === '#/blog') {
    content = <Blog />;
  } else if (currentPath.startsWith('#/blog/')) {
    const id = currentPath.split('/')[2];
    content = <BlogDetails blogId={id} />;
  } else if (currentPath.startsWith('#/projects/')) {
    const id = currentPath.split('/')[2];
    content = <ProjectDetails projectId={id} />;
  } else {
    content = <Home />;
  }

  return (
    <div className='w-full min-h-screen bg-[#0D0D0D] text-white font-sans overflow-x-hidden'>
      {content}
    </div>
  )
}

export default App
