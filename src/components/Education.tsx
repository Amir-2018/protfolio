import React from "react";
import { motion } from "framer-motion";
import { EducationProps } from '../models/education-interface';
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education: React.FC<EducationProps> = ({ education }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const getIcon = (index: number) => {
    const icons = [GraduationCap, Award, Award];
    const IconComponent = icons[index] || GraduationCap;
    return IconComponent;
  };

  return (
    <section id="education" className="mb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-8">
            {education.map((item, index) => {
              const IconComponent = getIcon(index);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent size={24} className="text-white" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="flex-1 bg-white rounded-3xl shadow-2xl p-6 relative overflow-hidden group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decorative gradient blobs */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                    <div className="relative z-10">
                      <motion.h3
                        className="text-2xl font-bold text-gray-800 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {item.degree}
                      </motion.h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin size={16} className="text-purple-500" />
                          <span className="text-sm">{item.institution}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} className="text-blue-500" />
                        <span className="text-sm">{item.period}</span>
                      </div>

                      {/* Achievement badge for recent degree */}
                      {index === 0 && (
                        <motion.div
                          className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                        >
                          <Award size={12} />
                          Recent Graduate
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
