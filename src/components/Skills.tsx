import React from "react";
import { motion } from "framer-motion";
import { SkillsProps } from "../models/skill";

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <motion.section
      id="skills"
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-white p-4 rounded-lg shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="font-semibold text-lg">{skill}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
