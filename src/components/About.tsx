import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Props } from "../models/about-interface";
import { Mail, MapPin, Calendar, Github, Linkedin, Download, Phone, MessageCircle } from "lucide-react";

const About: React.FC<Props> = ({ aboutProps }) => {
  const { t } = useTranslation();
  const [phoneBordered, setPhoneBordered] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="mb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('aboutMe')}
          </motion.h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Card */}
          <motion.div variants={itemVariants} className="lg:w-2/5">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-pulse" />
              
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                {/* Image container with floating animation */}
                <motion.div
                  className="relative w-full h-[350px] rounded-2xl overflow-hidden mb-6"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={aboutProps.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-sm font-semibold text-gray-700">Software Engineer</span>
                  </motion.div>
                </motion.div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-6">
                  <motion.a
                    href="https://github.com/Amir-2018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/amir-maalaoui-12b67020a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.button
                    onClick={() => setPhoneBordered(true)}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={20} />
                  </motion.button>
                  <motion.a
                    href="mailto:amir.maalaoui@ngi.tn"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <Mail size={18} className="text-blue-500" />
                    </div>
                    <span className="text-sm">amir.maalaoui@ngi.com</span>
                  </div>
                  <div className={`flex items-center gap-3 text-gray-600 ${phoneBordered ? 'border-2 border-green-500 rounded-lg p-2 bg-green-50' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                      <Phone size={18} className="text-green-500" />
                    </div>
                    <span className="text-sm">+216 93379344</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                      <MapPin size={18} className="text-purple-500" />
                    </div>
                    <span className="text-sm">Bardo, Tunisia</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                      <Calendar size={18} className="text-pink-500" />
                    </div>
                    <span className="text-sm">Available for hire</span>
                  </div>
                </div>

                {/* Download CV Button */}
                <motion.button
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    // Create a link to download the CV
                    const link = document.createElement('a');
                    link.href = '/files/amir-maalaoui-cv.pdf';
                    link.download = 'Amir_Maalaoui_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download size={18} />
                  Download CV
                </motion.button>

              </div>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div variants={itemVariants} className="lg:w-3/5">
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              {/* Decorative gradient blobs */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t('hello')} <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Amir</span>! 👋
                </motion.h3>

                <p className="text-gray-600 leading-relaxed text-lg text-justify mb-6">
                  {t('description')}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { value: "3+", labelKey: "internships", color: "from-blue-500 to-cyan-500" },
                    { value: "10+", labelKey: "projectsStats", color: "from-purple-500 to-pink-500" },
                    { value: "15+", labelKey: "technologies", color: "from-orange-500 to-red-500" },
                    { value: "100%", labelKey: "dedication", color: "from-green-500 to-emerald-500" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`absolute inset-0 rounded-2xl opacity-0 hover:opacity-10 bg-gradient-to-br ${stat.color}`} />
                      <motion.div
                        className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <p className="text-sm text-gray-500 mt-1">{t(stat.labelKey)}</p>
                    </motion.div>
                  ))}
                </div>

                {/* What I Do */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    {t('whatIDo')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: "💻", titleKey: "webDev", descKey: "webDevDesc" },
                      { icon: "📱", titleKey: "mobileApps", descKey: "mobileAppsDesc" },
                      { icon: "🗺️", titleKey: "gpsCartography", descKey: "gpsCartographyDesc" },
                      { icon: "🚀", titleKey: "problemSolving", descKey: "problemSolvingDesc" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            {t(item.titleKey)}
                          </h5>
                          <p className="text-sm text-gray-500">
                            {t(item.descKey)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
