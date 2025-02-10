import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import experiences from './data/experiences';
import Skills from './components/Skills';
import { skillsList } from './data/skills';
import Projects from './components/Projects';
import projects from './data/projects';
import Education from './components/Education';
import { educationInfo } from './data/educations';
import Certificates from './components/Certificates';
import { certificatesList } from './data/certificatesList';
import { aboutInfo } from './data/about';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 z-50 h-full">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 lg:p-12">
        <About aboutProps={aboutInfo} />
        <Experience experiences={experiences} />
        <Skills skills={skillsList} />
        <Projects projects={projects} />
        <Education education={educationInfo} />
        <Certificates certificates={certificatesList} />
      </main>
    </div>
  );
}

export default App;
