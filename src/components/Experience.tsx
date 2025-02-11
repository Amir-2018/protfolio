import { ExperienceProps } from "../models/experience-interface";

const Experience: React.FC<{ experiences: ExperienceProps[] }> = ({ experiences }) => {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className=" mt-4 font-semibold text-gray-900 ">{exp.company}</p>
              </div>
              <p className="text-gray-500">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;