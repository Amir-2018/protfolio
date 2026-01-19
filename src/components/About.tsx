import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Props } from "../models/about-interface";
import { Mail, MapPin, Calendar, Github, Linkedin, Download, Phone, MessageCircle, X, Send, User, AtSign } from "lucide-react";
import emailjs from '@emailjs/browser';

const About: React.FC<Props> = ({ aboutProps }) => {
  const { t } = useTranslation();
  const [phoneBordered, setPhoneBordered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For demo purposes, we'll simulate email sending
      // In a real application, you would configure EmailJS with your service
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

      // Uncomment and configure EmailJS when you have a service set up:
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: contactForm.name,
      //     from_email: contactForm.email,
      //     subject: contactForm.subject,
      //     message: contactForm.message,
      //     to_email: 'amir.maalaoui@ngi.com'
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );

      setSubmitStatus('success');
      setContactForm({ name: '', email: '', subject: '', message: '' });

      // Close modal after success
      setTimeout(() => {
        setIsContactModalOpen(false);
        setSubmitStatus('idle');
      }, 2000);

    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
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
                  className="relative w-full h-[350px] rounded-2xl overflow-hidden mb-6 cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setSelectedImage(aboutProps.image);
                    setIsModalOpen(true);
                  }}
                >
                  <img
                    src={aboutProps.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Click indicator */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <span className="text-sm font-medium text-gray-700">Click to enlarge</span>
                    </motion.div>
                  </motion.div>

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
                  <motion.button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={20} />
                  </motion.button>
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

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </motion.button>

              <motion.img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 text-white">
                <motion.button
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsContactModalOpen(false)}
                >
                  <X size={16} />
                </motion.button>
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Get In Touch
                </motion.h3>
                <motion.p
                  className="text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  I'd love to hear from you! Send me a message and I'll get back to you.
                </motion.p>
              </div>

              {/* Form */}
              <form onSubmit={handleContactSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex justify-end"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800"
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
                    >
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✕</span>
                      </div>
                      Failed to send message. Please try again or contact me directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
