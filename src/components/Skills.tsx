import React from 'react';
import { SkillsProps } from '../models/skill';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
