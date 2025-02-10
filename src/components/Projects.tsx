import { ProjectProps } from "../models/project-inetrface";


const Projects: React.FC<{ projects: ProjectProps[] }> = ({ projects }) => {
    return (
      <section id="projects" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Projects;