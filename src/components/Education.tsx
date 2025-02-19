import React from 'react';
import { EducationProps } from '../models/education-interface';

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="mb-6">
              <h3 className="font-bold text-xl">{item.degree}</h3>
              <p className="text-gray-600">{item.institution}</p>
              <p className="text-gray-500">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
