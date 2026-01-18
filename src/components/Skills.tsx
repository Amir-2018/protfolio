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
  if (name.includes('express')) return <Server size={32} />;
  if (name.includes('nest')) return <Server size={32} />;
  if (name.includes('laravel')) return <Server size={32} />;
  if (name.includes('django')) return <Server size={32} />;
  if (name.includes('rest api')) return <Terminal size={32} />;
  if (name.includes('flutter')) return <Smartphone size={32} />;
  if (name.includes('postgresql') || name.includes('postgre')) return <Database size={32} />;
  if (name.includes('mongodb') || name.includes('mongo')) return <Database size={32} />;
  if (name.includes('figma')) return <Palette size={32} />;
  if (name.includes('git') || name.includes('github')) return <GitBranch size={32} />;
  if (name.includes('jira')) return <Layers size={32} />;
  if (name.includes('scrum')) return <Trophy size={32} />;

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
    'Tools': []
  };

  const skillCategories: Record<string, string> = {
    'html': 'Frontend', 'css': 'Frontend', 'tailwind': 'Frontend',
    'reactjs': 'Frontend', 'figma': 'Frontend',
    'expressjs': 'Backend', 'nestjs': 'Backend', 'laravel': 'Backend',
    'django': 'Backend', 'rest api': 'Backend',
    'postgresql': 'Database', 'mongodb': 'Database',
    'git': 'Tools', 'github': 'Tools', 'jira': 'Tools', 'scrum': 'Tools',
    'flutter': 'Tools'
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {Object.entries(categorizedSkills).map(([category, categorySkills], categoryIndex) => (
            categorySkills.length > 0 && (
              <motion.div
                key={category}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500" />

                {/* Inner card */}
                <div className="relative bg-white rounded-3xl p-8 h-full shadow-2xl overflow-hidden">
                  {/* Floating decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />

                  {/* Category Header */}
                  <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${getCategoryColor(category)} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {getCategoryIcon(category)}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {category}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
                    </p>
                  </motion.div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-4">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group/skill relative"
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Skill card with gradient border */}
                        <div className="relative p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 transition-all duration-300 border border-gray-200 hover:border-transparent hover:shadow-lg">
                          {/* Hover glow effect */}
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                            style={{
                              boxShadow: `0 0 20px 2px ${category === 'Frontend' ? 'rgba(59, 130, 246, 0.2)' : category === 'Backend' ? 'rgba(168, 85, 247, 0.2)' : category === 'Database' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(249, 115, 22, 0.2)'}`,
                            }}
                          />

                          <div className="flex items-center gap-4 relative z-10">
                            {/* Skill icon */}
                            <motion.div
                              className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(skill.category)} flex items-center justify-center shadow-md`}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              {React.cloneElement(skill.icon as React.ReactElement, {
                                className: "text-white drop-shadow-sm"
                              })}
                            </motion.div>

                            {/* Skill name */}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-800 text-lg group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:from-blue-600 group-hover/skill:to-purple-600 transition-all duration-300">
                                {skill.name}
                              </h4>
                              <p className="text-sm text-gray-500 mt-1 capitalize">
                                {skill.category.toLowerCase()} technology
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
