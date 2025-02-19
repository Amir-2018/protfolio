import React from "react";
import { motion } from "framer-motion";
import { Props } from "../models/about-interface";
import profilImage from '../public/images/profil.jpg';

const About: React.FC<Props> = ({ aboutProps }) => {
  return (
    <section id="about" className="mb-16">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-start gap-6">
        <motion.div
          className="w-full md:w-1/3 bg-cover bg-center rounded-lg shadow-lg h-[450px]"
          style={{ backgroundImage: `url(${profilImage})` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        
        <motion.div
          className="flex-1 h-[450px] md:max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 leading-relaxed text-justify text-[18px]">
            {aboutProps.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
