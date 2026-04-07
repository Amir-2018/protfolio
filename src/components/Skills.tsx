import React from "react";
import { motion } from "framer-motion";
import { SkillsProps } from "../models/skill";
import {
  Code, Database, Layout, Terminal,
  Palette, GitBranch, Figma,
  Layers, Server, Smartphone,
  Zap, HardDrive, Monitor,
  Star, Sparkles, Trophy, Award
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const getSkillIcon = (skillName: string) => {
  const name = skillName.toLowerCase();

  if (name.includes('html')) return <Layout size={32} />;
  if (name.includes('css')) return <Code size={32} />;
  if (name.includes('tailwind')) return <Zap size={32} />;
  if (name.includes('react')) return <Monitor size={32} />;
  if (name.includes('angular')) return <Star size={32} />;
  if (name.includes('next')) return <Layers size={32} />;
  if (name.includes('express')) return <Server size={32} />;
  if (name.includes('laravel')) return <Server size={32} />;
  if (name.includes('django')) return <Server size={32} />;
  if (name.includes('rest api')) return <Terminal size={32} />;
  if (name.includes('react native')) return <Smartphone size={32} />;
  if (name.includes('flutter')) return <Smartphone size={32} />;
  if (name.includes('mysql')) return <Database size={32} />;
  if (name.includes('postgresql') || name.includes('postgre')) return <Database size={32} />;
  if (name.includes('mongodb') || name.includes('mongo')) return <Database size={32} />;
  if (name.includes('git') && !name.includes('hub') && !name.includes('lab')) return <GitBranch size={32} />;
  if (name.includes('github')) return <GitBranch size={32} />;
  if (name.includes('gitlab')) return <GitBranch size={32} />;
  if (name.includes('jira')) return <Layers size={32} />;

  return <Code size={32} />;
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Frontend':
      return 'from-blue-500 via-cyan-400 to-teal-400';
    case 'Backend':
      return 'from-purple-500 via-pink-400 to-rose-400';
    case 'Database':
      return 'from-emerald-500 via-green-400 to-lime-400';
    case 'Mobile':
      return 'from-indigo-500 via-violet-400 to-purple-400';
    case 'Tools':
      return 'from-amber-500 via-orange-400 to-red-400';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Frontend':
      return <Sparkles size={24} className="text-white" />;
    case 'Backend':
      return <Server size={24} className="text-white" />;
    case 'Database':
      return <Database size={24} className="text-white" />;
    case 'Mobile':
      return <Smartphone size={24} className="text-white" />;
    case 'Tools':
      return <Award size={24} className="text-white" />;
    default:
      return <Star size={24} className="text-white" />;
  }
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categorizedSkills: Record<string, SkillItem[]> = {
    'Frontend': [],
    'Backend': [],
    'Database': [],
    'Mobile': [],
    'Tools': []
  };

  const skillCategories: Record<string, string> = {
    'html': 'Frontend', 'css': 'Frontend', 'tailwind': 'Frontend',
    'react': 'Frontend', 'angular': 'Frontend', 'next.js': 'Frontend',
    'express': 'Backend', 'laravel': 'Backend',
    'django': 'Backend', 'rest api': 'Backend',
    'mysql': 'Database', 'postgresql': 'Database', 'mongodb': 'Database',
    'react native': 'Mobile', 'flutter': 'Mobile',
    'git': 'Tools', 'github': 'Tools', 'gitlab': 'Tools', 'jira': 'Tools'
  };

  skills.forEach((skill) => {
    const category = skillCategories[skill.toLowerCase()] || 'Tools';

    if (categorizedSkills[category as keyof typeof categorizedSkills]) {
      categorizedSkills[category as keyof typeof categorizedSkills].push({
        name: skill,
        icon: getSkillIcon(skill),
        category
      });
    } else {
      categorizedSkills['Tools'].push({
        name: skill,
        icon: getSkillIcon(skill),
        category: 'Tools'
      });
    }
  });

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
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="mb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Technologies and tools I master to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Object.entries(categorizedSkills).map(([category, categorySkills], categoryIndex) => (
            categorySkills.length > 0 && (
              <motion.div
                key={category}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl p-6 h-full shadow-xl border border-gray-100 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 transform translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-orange-500 transform -translate-x-12 translate-y-12" />
                  </div>

                  {/* Category Header */}
                  <div className="relative z-10 text-center mb-6">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${getCategoryColor(category)} mb-4 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -5, 5, 0],
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {getCategoryIcon(category)}
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {category}
                    </h3>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                      <span>{categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}</span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="relative z-10 space-y-3">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group/skill"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-white hover:to-gray-50 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md">
                          
                          {/* Skill Icon */}
                          <motion.div
                            className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(skill.category)} flex items-center justify-center shadow-sm`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            {React.cloneElement(skill.icon as React.ReactElement, {
                              size: 18,
                              className: "text-white"
                            })}
                          </motion.div>

                          {/* Skill Name */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-800 text-sm group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:from-blue-600 group-hover/skill:to-purple-600 transition-all duration-300 truncate">
                              {skill.name}
                            </h4>
                          </div>

                          {/* Hover Indicator */}
                          <motion.div
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.5 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-400 transition-all duration-500" />
                </div>
              </motion.div>
            )
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

export const skillsList = [
  "Html", "Css", "Tailwind", "Reactjs", "ExpressJs", "NestJs", "Laravel", 
  "Django", "Rest Api", "Flutter", "PostgreQl", "MongoDB", "Figma", 
  "Git", "Github", "Jira", "Scrum"
];
