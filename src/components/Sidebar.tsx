import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Github, Linkedin, Mail, GraduationCap, Award, Code, User, Briefcase, Building } from 'lucide-react';
import cvImage from '../public/images/profil.jpg'

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed top-0 left-0 w-72 h-screen bg-white shadow-2xl transition-transform duration-500 ease-in-out z-40 overflow-hidden`}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />

      <div className="relative p-8 flex flex-col h-full z-10">
        {/* Close Button (visible only on small screens) */}
        <motion.button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-20"
          aria-label="Close sidebar"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={24} />
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full"
        >
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.div
              className="relative w-32 h-32 mx-auto mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-75 blur animate-pulse" />
              <img
                src={cvImage}
                alt="Amir Maalaoui - Software Development Engineer"
                className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </motion.div>
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Amir Maalaoui
            </motion.h1>
            <motion.p
              className="text-gray-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Software Development Engineer
            </motion.p>
          </motion.div>

          {/* Navigation Links */}
          <nav className="space-y-2 flex-1">
            {[
              { href: "#about", icon: User, labelKey: "about" },
              { href: "#experience", icon: Building, labelKey: "experience" },
              { href: "#skills", icon: Code, labelKey: "skills" },
              { href: "#projects", icon: Briefcase, labelKey: "projects" },
              { href: "#education", icon: GraduationCap, labelKey: "education" },
              { href: "#certificates", icon: Award, labelKey: "certificates" }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={itemVariants}
                className="group flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="relative z-10 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md"
                  whileHover={{ rotate: 3, scale: 1.05 }}
                >
                  <item.icon size={18} className="text-white" />
                </motion.div>

                <span className="relative z-10 font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {t(item.labelKey)}
                </span>

                {/* Active indicator */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 pt-4 border-t border-gray-200"
          >
            {[
              { icon: Github, href: "https://github.com/Amir-2018", color: "from-gray-700 to-gray-900" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/amir-maalaoui-12b67020a/", color: "from-blue-600 to-blue-800" },
              { icon: Mail, href: "mailto:amir.maalaoui@ngi.com", color: "from-red-500 to-red-700" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 3, y: -1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.icon.name}
              >
                <social.icon size={20} className="text-gray-600" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-8 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-32 left-8 w-2 h-2 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
    </aside>
  );
};

export default Sidebar;
