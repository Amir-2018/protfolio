import { motion } from "framer-motion";
import { ExperienceProps } from "../models/experience-interface";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Experience: React.FC<{ experiences: ExperienceProps[] }> = ({ experiences }) => {
  const { t } = useTranslation();
  
  return (
    <section id="experience" className="mb-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          {t("professionalExperience")}
        </motion.h2>
        <motion.div
          className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          My journey and professional growth in software development
        </motion.p>
      </motion.div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 top-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full transform -translate-x-1/2 hidden md:block z-10" />
              
              {/* Company Logo or Icon wrapper */}
              <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg z-10 border-2 border-gray-100 overflow-hidden group-hover:border-blue-300 transition-colors">
                {exp.companyLogo ? (
                  <img
                    src={exp.companyLogo}
                    alt={exp.company}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building2 size={28} className="text-white" />
                  </div>
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-purple-500" />
                      <span>{exp.period.split('|')[0].trim()}</span>
                    </div>
                    {exp.period.includes('|') && (
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-pink-500" />
                        <span>{exp.period.split('|')[1].trim()}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2" />
                      <span className="text-sm leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
