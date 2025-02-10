import React from "react";
import { Props } from "../models/about-interface";


const About: React.FC<Props> = ({ aboutProps }) => {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src={aboutProps.image}
          alt="About"
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed">{aboutProps.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
