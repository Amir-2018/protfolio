import React from 'react';
import { X, Github, Linkedin, Mail, GraduationCap, Award, Code, User, Briefcase, Building } from 'lucide-react';
import logo from '../public/images/profil.png'; // Tell webpack this JS file uses this image

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void; // Add a close handler for better UX
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed top-0 left-0 w-72 h-screen bg-gray-900 text-white transition-transform duration-300 ease-in-out z-40`}
    >
      <div className="p-8 flex flex-col h-full">
        {/* Close Button (visible only on small screens) */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded hover:bg-gray-800 transition-colors"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>

        {/* Profile Section */}
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="Amir Maalaoui - Software Development Engineer"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700"
          />
          <h1 className="text-2xl font-bold">Amir Maalaoui</h1>
          <p className="text-gray-400">Software Development Engineer</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2 flex-1">
          <a href="#about" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            <User size={20} aria-hidden="true" /> About Me
          </a>
          <a href="#experience" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            <Building size={20} aria-hidden="true" /> Experience
          </a>
          <a href="#skills" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            <Code size={20} aria-hidden="true" /> Skills
          </a>
          <a href="#projects" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            <Briefcase size={20} aria-hidden="true" /> Projects
          </a>
          <a href="#education" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            <GraduationCap size={20} aria-hidden="true" /> Education
          </a>
          <a href="#certificates" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            <Award size={20} aria-hidden="true" /> Certificates
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-4 border-t border-gray-700">
          <a
            href="https://github.com/Amir-2018"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/amir-maalaoui-12b67020a/"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} aria-hidden="true" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-gray-300"
            aria-label="Email"
          >
            <Mail size={24} aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;