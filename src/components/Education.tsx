import React from 'react';
import { EducationProps } from '../models/certificate-interface';

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h3 className="font-bold text-xl">{education.degree}</h3>
          <p className="text-gray-600">{education.institution}</p>
          <p className="text-gray-500">{education.period}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
