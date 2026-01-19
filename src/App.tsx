import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Settings, Home as HomeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './i18n';
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
import AnimatedBackground from './components/AnimatedBackground';
import Login from './components/Login';
import Admin from './components/Admin';

// Home Component (Portfolio)
const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Editable data states
  const [currentAboutData, setCurrentAboutData] = useState(aboutInfo);
  const [currentExperienceData, setCurrentExperienceData] = useState<typeof experiences>(experiences);
  const [currentEducationData, setCurrentEducationData] = useState<typeof educationInfo>(educationInfo);
  const [currentSkillsData, setCurrentSkillsData] = useState(skillsList);
  const [currentCertificatesData, setCurrentCertificatesData] = useState(certificatesList);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedAbout = localStorage.getItem('portfolio-about');
    const savedExperience = localStorage.getItem('portfolio-experience');
    const savedEducation = localStorage.getItem('portfolio-education');
    const savedSkills = localStorage.getItem('portfolio-skills');
    const savedCertificates = localStorage.getItem('portfolio-certificates');

    if (savedAbout) {
      setCurrentAboutData(JSON.parse(savedAbout));
    }
    if (savedExperience) {
      setCurrentExperienceData(JSON.parse(savedExperience));
    }
    if (savedEducation) {
      setCurrentEducationData(JSON.parse(savedEducation));
    }
    if (savedSkills) {
      setCurrentSkillsData(JSON.parse(savedSkills));
    }
    if (savedCertificates) {
      setCurrentCertificatesData(JSON.parse(savedCertificates));
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen bg-transparent flex relative z-10">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-50 h-full bg-white w-64 transition-all duration-300 ${
            isSidebarOpen ? 'ml-0' : '-ml-64'
          } lg:ml-0 lg:relative lg:block`}
        >
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links - Top Left */}
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HomeIcon size={18} />
              Home
            </motion.button>
          </Link>
          <Link to="/admin">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Settings size={18} />
              Admin
            </motion.button>
          </Link>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-12">
          <About aboutProps={currentAboutData} />
          <Experience experiences={currentExperienceData} />
          <Skills skills={currentSkillsData} />
          <Projects projects={projects} />
          <Education education={currentEducationData} />
          <Certificates certificates={currentCertificatesData} />
        </main>
      </div>
    </>
  );
};

// Admin Route Component
const AdminRoute: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Editable data states
  const [currentAboutData, setCurrentAboutData] = useState(aboutInfo);
  const [currentExperienceData, setCurrentExperienceData] = useState<typeof experiences>(experiences);
  const [currentEducationData, setCurrentEducationData] = useState<typeof educationInfo>(educationInfo);
  const [currentSkillsData, setCurrentSkillsData] = useState(skillsList);
  const [currentCertificatesData, setCurrentCertificatesData] = useState(certificatesList);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedAbout = localStorage.getItem('portfolio-about');
    const savedExperience = localStorage.getItem('portfolio-experience');
    const savedEducation = localStorage.getItem('portfolio-education');
    const savedSkills = localStorage.getItem('portfolio-skills');
    const savedCertificates = localStorage.getItem('portfolio-certificates');

    if (savedAbout) {
      setCurrentAboutData(JSON.parse(savedAbout));
    }
    if (savedExperience) {
      setCurrentExperienceData(JSON.parse(savedExperience));
    }
    if (savedEducation) {
      setCurrentEducationData(JSON.parse(savedEducation));
    }
    if (savedSkills) {
      setCurrentSkillsData(JSON.parse(savedSkills));
    }
    if (savedCertificates) {
      setCurrentCertificatesData(JSON.parse(savedCertificates));
    }
  }, []);

  // Save data to localStorage when updated
  const handleUpdateAbout = (data: typeof aboutInfo) => {
    setCurrentAboutData(data);
    localStorage.setItem('portfolio-about', JSON.stringify(data));
  };

  const handleUpdateExperience = (data: typeof experiences) => {
    setCurrentExperienceData(data);
    localStorage.setItem('portfolio-experience', JSON.stringify(data));
  };

  const handleUpdateEducation = (data: typeof educationInfo) => {
    setCurrentEducationData(data);
    localStorage.setItem('portfolio-education', JSON.stringify(data));
  };

  const handleUpdateSkills = (data: string[]) => {
    setCurrentSkillsData(data);
    localStorage.setItem('portfolio-skills', JSON.stringify(data));
  };

  const handleUpdateCertificates = (data: typeof certificatesList) => {
    setCurrentCertificatesData(data);
    localStorage.setItem('portfolio-certificates', JSON.stringify(data));
  };

  const handleLogin = (password: string) => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password. Try admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} error={loginError} />;
  }

  return (
    <Admin
      onLogout={handleLogout}
      aboutData={currentAboutData}
      experienceData={currentExperienceData}
      educationData={currentEducationData}
      skillsData={currentSkillsData}
      certificatesData={currentCertificatesData}
      onUpdateAbout={handleUpdateAbout}
      onUpdateExperience={handleUpdateExperience}
      onUpdateEducation={handleUpdateEducation}
      onUpdateSkills={handleUpdateSkills}
      onUpdateCertificates={handleUpdateCertificates}
    />
  );
};

// Main App Component
function App() {
  // Handle basename for both development and production
  // In development, if accessed via /protfolio/, set basename accordingly
  const getBasename = () => {
    if (import.meta.env.DEV) {
      // In development, check if URL contains /protfolio/
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/protfolio/')) {
        return '/protfolio';
      }
      return '';
    }
    return '/protfolio';
  };

  return (
    <Router basename={getBasename()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
