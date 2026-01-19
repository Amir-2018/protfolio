import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LogOut,
  User,
  Briefcase,
  GraduationCap,
  Save,
  Plus,
  X,
  Edit3,
  Trash2,
  Calendar,
  Building2,
  MapPin,
  Code,
  Award
} from 'lucide-react';

interface AdminProps {
  onLogout: () => void;
  aboutData: { description: string; image: string };
  experienceData: Array<{
    title: string;
    company: string;
    companyLogo: string;
    period: string;
    tasks: string[];
  }>;
  educationData: Array<{
    degree: string;
    institution: string;
    period: string;
  }>;
  skillsData: string[];
  certificatesData: Array<{
    title: string;
    issuer: string;
    year: string;
    image: string;
  }>;
  onUpdateAbout: (data: { description: string; image: string }) => void;
  onUpdateExperience: (data: Array<{
    title: string;
    company: string;
    companyLogo: string;
    period: string;
    tasks: string[];
  }>) => void;
  onUpdateEducation: (data: Array<{
    degree: string;
    institution: string;
    period: string;
  }>) => void;
  onUpdateSkills: (data: string[]) => void;
  onUpdateCertificates: (data: Array<{
    title: string;
    issuer: string;
    year: string;
    image: string;
  }>) => void;
}

const Admin: React.FC<AdminProps> = ({
  onLogout,
  aboutData,
  experienceData,
  educationData,
  skillsData,
  certificatesData,
  onUpdateAbout,
  onUpdateExperience,
  onUpdateEducation,
  onUpdateSkills,
  onUpdateCertificates
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'education' | 'skills' | 'certifications'>('about');
  const [aboutForm, setAboutForm] = useState(aboutData);

  // Experience form state
  const [experiences, setExperiences] = useState(experienceData);
  const [editingExperience, setEditingExperience] = useState<number | null>(null);
  const [experienceForm, setExperienceForm] = useState({
    title: '',
    company: '',
    companyLogo: '',
    period: '',
    tasks: ''
  });

  // Education form state
  const [educations, setEducations] = useState(educationData);
  const [editingEducation, setEditingEducation] = useState<number | null>(null);
  const [educationForm, setEducationForm] = useState({
    degree: '',
    institution: '',
    period: ''
  });

  // Skills form state
  const [skills, setSkills] = useState(skillsData);
  const [skillsForm, setSkillsForm] = useState('');

  // Certificates form state
  const [certificates, setCertificates] = useState(certificatesData);
  const [editingCertificate, setEditingCertificate] = useState<number | null>(null);
  const [certificateForm, setCertificateForm] = useState({
    title: '',
    issuer: '',
    year: '',
    image: ''
  });

  const tabs = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills & Expertise', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  const handleSaveAbout = () => {
    onUpdateAbout(aboutForm);
  };

  const handleAddExperience = () => {
    const newExperience = {
      title: experienceForm.title,
      company: experienceForm.company,
      companyLogo: experienceForm.companyLogo || '',
      period: experienceForm.period,
      tasks: experienceForm.tasks.split('\n').filter(task => task.trim())
    };

    if (editingExperience !== null) {
      // Update existing
      const updatedExperiences = [...experiences];
      updatedExperiences[editingExperience] = newExperience;
      setExperiences(updatedExperiences);
      onUpdateExperience(updatedExperiences);
      setEditingExperience(null);
    } else {
      // Add new
      const updatedExperiences = [...experiences, newExperience];
      setExperiences(updatedExperiences);
      onUpdateExperience(updatedExperiences);
    }
    // Reset form
    setExperienceForm({
      title: '',
      company: '',
      companyLogo: '',
      period: '',
      tasks: ''
    });
  };

  const handleEditExperience = (index: number) => {
    const exp = experiences[index];
    setExperienceForm({
      title: exp.title,
      company: exp.company,
      companyLogo: exp.companyLogo || '',
      period: exp.period,
      tasks: exp.tasks.join('\n')
    });
    setEditingExperience(index);
  };

  const handleDeleteExperience = (index: number) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
    onUpdateExperience(updatedExperiences);
  };

  const handleAddEducation = () => {
    const newEducation = {
      degree: educationForm.degree,
      institution: educationForm.institution,
      period: educationForm.period
    };

    if (editingEducation !== null) {
      // Update existing
      const updatedEducations = [...educations];
      updatedEducations[editingEducation] = newEducation;
      setEducations(updatedEducations);
      onUpdateEducation(updatedEducations);
      setEditingEducation(null);
    } else {
      // Add new
      const updatedEducations = [...educations, newEducation];
      setEducations(updatedEducations);
      onUpdateEducation(updatedEducations);
    }
    // Reset form
    setEducationForm({
      degree: '',
      institution: '',
      period: ''
    });
  };

  const handleEditEducation = (index: number) => {
    const edu = educations[index];
    setEducationForm(edu);
    setEditingEducation(index);
  };

  const handleDeleteEducation = (index: number) => {
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
    onUpdateEducation(updatedEducations);
  };

  const handleAddSkill = () => {
    if (skillsForm.trim()) {
      const updatedSkills = [...skills, skillsForm.trim()];
      setSkills(updatedSkills);
      onUpdateSkills(updatedSkills);
      setSkillsForm('');
    }
  };

  const handleDeleteSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    onUpdateSkills(updatedSkills);
  };

  const handleAddCertificate = () => {
    const newCertificate = {
      title: certificateForm.title,
      issuer: certificateForm.issuer,
      year: certificateForm.year,
      image: certificateForm.image || ''
    };

    if (editingCertificate !== null) {
      // Update existing
      const updatedCertificates = [...certificates];
      updatedCertificates[editingCertificate] = newCertificate;
      setCertificates(updatedCertificates);
      onUpdateCertificates(updatedCertificates);
      setEditingCertificate(null);
    } else {
      // Add new
      const updatedCertificates = [...certificates, newCertificate];
      setCertificates(updatedCertificates);
      onUpdateCertificates(updatedCertificates);
    }
    // Reset form
    setCertificateForm({
      title: '',
      issuer: '',
      year: '',
      image: ''
    });
  };

  const handleEditCertificate = (index: number) => {
    const cert = certificates[index];
    setCertificateForm(cert);
    setEditingCertificate(index);
  };

  const handleDeleteCertificate = (index: number) => {
    const updatedCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(updatedCertificates);
    onUpdateCertificates(updatedCertificates);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <motion.header
        className="bg-white shadow-lg border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Portfolio Admin Dashboard
            </motion.h1>
            <motion.button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut size={18} />
              Logout
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <motion.div
          className="flex space-x-1 bg-white rounded-xl p-1 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon size={18} />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <User className="text-blue-500" />
                About Me Section
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={aboutForm.description}
                    onChange={(e) => setAboutForm({ ...aboutForm, description: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Write your about me description..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={aboutForm.image}
                    onChange={(e) => setAboutForm({ ...aboutForm, image: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter image URL..."
                  />
                </div>

                <motion.button
                  onClick={handleSaveAbout}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Save size={18} />
                  Save Changes
                </motion.button>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {/* Add/Edit Form */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  {editingExperience !== null ? <Edit3 className="text-orange-500" /> : <Plus className="text-green-500" />}
                  {editingExperience !== null ? 'Edit Experience' : 'Add New Experience'}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={experienceForm.title}
                      onChange={(e) => setExperienceForm({ ...experienceForm, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Job title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={experienceForm.company}
                      onChange={(e) => setExperienceForm({ ...experienceForm, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                    <input
                      type="text"
                      value={experienceForm.period}
                      onChange={(e) => setExperienceForm({ ...experienceForm, period: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., February 2025 – Present | Tunis, Tunisia"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo URL (optional)</label>
                    <input
                      type="text"
                      value={experienceForm.companyLogo}
                      onChange={(e) => setExperienceForm({ ...experienceForm, companyLogo: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tasks (one per line)</label>
                  <textarea
                    value={experienceForm.tasks}
                    onChange={(e) => setExperienceForm({ ...experienceForm, tasks: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Developed and maintained fleet management solutions using GPS technology&#10;Implemented temperature monitoring systems for cold chain logistics&#10;..."
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.button
                    onClick={handleAddExperience}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {editingExperience !== null ? <Save size={18} /> : <Plus size={18} />}
                    {editingExperience !== null ? 'Update' : 'Add'} Experience
                  </motion.button>

                  {editingExperience !== null && (
                    <motion.button
                      onClick={() => {
                        setEditingExperience(null);
                        setExperienceForm({
                          title: '',
                          company: '',
                          companyLogo: '',
                          period: '',
                          tasks: ''
                        });
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <X size={18} />
                      Cancel
                    </motion.button>
                  )}
                </div>
              </motion.div>

              {/* Experience List */}
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800">{exp.title}</h4>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                        <div className="mt-3 space-y-1">
                          {exp.tasks.map((task, taskIndex) => (
                            <p key={taskIndex} className="text-gray-600 text-sm">• {task}</p>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <motion.button
                          onClick={() => handleEditExperience(index)}
                          className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Edit3 size={18} />
                        </motion.button>
                        <motion.button
                          onClick={() => handleDeleteExperience(index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {/* Add/Edit Form */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  {editingEducation !== null ? <Edit3 className="text-orange-500" /> : <Plus className="text-green-500" />}
                  {editingEducation !== null ? 'Edit Education' : 'Add New Education'}
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                    <input
                      type="text"
                      value={educationForm.institution}
                      onChange={(e) => setEducationForm({ ...educationForm, institution: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="University/School name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
                    <input
                      type="text"
                      value={educationForm.degree}
                      onChange={(e) => setEducationForm({ ...educationForm, degree: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Bachelor of Science in Computer Science"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                    <input
                      type="text"
                      value={educationForm.period}
                      onChange={(e) => setEducationForm({ ...educationForm, period: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="2016 - 2020"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.button
                    onClick={handleAddEducation}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {editingEducation !== null ? <Save size={18} /> : <Plus size={18} />}
                    {editingEducation !== null ? 'Update' : 'Add'} Education
                  </motion.button>

                  {editingEducation !== null && (
                    <motion.button
                      onClick={() => {
                        setEditingEducation(null);
                        setEducationForm({
                          institution: '',
                          degree: '',
                          period: ''
                        });
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <X size={18} />
                      Cancel
                    </motion.button>
                  )}
                </div>
              </motion.div>

              {/* Education List */}
              <div className="space-y-4">
                {educations.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                        <p className="text-blue-600 font-semibold">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <motion.button
                          onClick={() => handleEditEducation(index)}
                          className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Edit3 size={18} />
                        </motion.button>
                        <motion.button
                          onClick={() => handleDeleteEducation(index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-8">
              {/* Add Skill Form */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Plus className="text-green-500" />
                  Add New Skill
                </h3>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skill Name</label>
                    <input
                      type="text"
                      value={skillsForm}
                      onChange={(e) => setSkillsForm(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., React, JavaScript, Python..."
                    />
                  </div>

                  <div className="flex items-end">
                    <motion.button
                      onClick={handleAddSkill}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!skillsForm.trim()}
                    >
                      <Plus size={18} />
                      Add Skill
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Skills List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Code className="text-blue-500" size={20} />
                        <span className="font-semibold text-gray-800">{skill}</span>
                      </div>
                      <motion.button
                        onClick={() => handleDeleteSkill(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 size={18} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="space-y-8">
              {/* Add/Edit Form */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  {editingCertificate !== null ? <Edit3 className="text-orange-500" /> : <Plus className="text-green-500" />}
                  {editingCertificate !== null ? 'Edit Certificate' : 'Add New Certificate'}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Title</label>
                    <input
                      type="text"
                      value={certificateForm.title}
                      onChange={(e) => setCertificateForm({ ...certificateForm, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Certificate name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Issuer</label>
                    <input
                      type="text"
                      value={certificateForm.issuer}
                      onChange={(e) => setCertificateForm({ ...certificateForm, issuer: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Issuing organization"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <input
                      type="text"
                      value={certificateForm.year}
                      onChange={(e) => setCertificateForm({ ...certificateForm, year: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="2023"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL (optional)</label>
                    <input
                      type="text"
                      value={certificateForm.image}
                      onChange={(e) => setCertificateForm({ ...certificateForm, image: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://example.com/certificate-image.jpg"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.button
                    onClick={handleAddCertificate}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {editingCertificate !== null ? <Save size={18} /> : <Plus size={18} />}
                    {editingCertificate !== null ? 'Update' : 'Add'} Certificate
                  </motion.button>

                  {editingCertificate !== null && (
                    <motion.button
                      onClick={() => {
                        setEditingCertificate(null);
                        setCertificateForm({
                          title: '',
                          issuer: '',
                          year: '',
                          image: ''
                        });
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <X size={18} />
                      Cancel
                    </motion.button>
                  )}
                </div>
              </motion.div>

              {/* Certificates List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                        <p className="text-blue-600 font-semibold text-sm mb-1">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar size={14} />
                          {cert.year}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          onClick={() => handleEditCertificate(index)}
                          className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Edit3 size={18} />
                        </motion.button>
                        <motion.button
                          onClick={() => handleDeleteCertificate(index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </div>

                    {cert.image && !cert.image.includes("example.com") && (
                      <div className="w-full h-32 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
// Trigger rebuild
