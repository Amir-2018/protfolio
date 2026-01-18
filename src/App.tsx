import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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

function App() {
  const { i18n, t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLanguageSwitcherOpen, setIsLanguageSwitcherOpen] = useState(false);

  const currentLanguage = i18n.language;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleLanguageSwitcher = () => {
    setIsLanguageSwitcherOpen(!isLanguageSwitcherOpen);
  };

  const switchLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLanguageSwitcherOpen(false);
  };

  const languages = [
    { code: 'fr', flag: '🇫🇷', name: 'French', nativeName: 'Français' },
    { code: 'en', flag: '🇺🇸', name: 'English', nativeName: 'English' },
    { code: 'ar', flag: '🇹🇳', name: 'Arabic', nativeName: 'العربية' }
  ];

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

      {/* Language Switcher - Top Right - COMMENTED OUT */}
      {/*
      <div className="fixed top-4 right-4 z-30 lg:top-6 lg:right-6">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          animate={{ width: isLanguageSwitcherOpen ? 'auto' : '56px' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex">
            <motion.button
              className="w-14 h-14 flex items-center justify-center relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl"
              onClick={toggleLanguageSwitcher}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle language switcher"
            >
              <span className="text-xl" role="img" aria-label="Current language">
                {languages.find(lang => lang.code === currentLanguage)?.flag || '🌐'}
              </span>
              <motion.div
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md"
                animate={{ rotate: isLanguageSwitcherOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={8} className="text-white" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isLanguageSwitcherOpen && (
                <motion.div
                  className="flex gap-2 px-3 py-3"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {languages.map((lang, index) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-300"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.2 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Switch to ${lang.name}`}
                      title={`${lang.nativeName} (${lang.name})`}
                    >
                      <span className="text-lg" role="img" aria-label={lang.name}>
                        {lang.flag}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      */}

      {/* Main Content */}
      <main className="flex-1  p-8 lg:p-12">
        <About aboutProps={aboutInfo} />
        <Experience experiences={experiences} />
        <Skills skills={skillsList} />
        <Projects projects={projects} />
        <Education education={educationInfo} />
        <Certificates certificates={certificatesList} />
      </main>
      </div>
    </>
  );
}

export default App;
