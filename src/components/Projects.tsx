import { motion } from "framer-motion";
import { ProjectProps } from "../models/project-inetrface";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <section id="projects" className="mb-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full"
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
          Showcasing my creative work and technical expertise
        </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            {/* Image with overlay */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Action buttons on hover */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={20} className="text-gray-800" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={20} className="text-gray-800" />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              {/* Tech stack tags */}
              {project.tech && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Gradient accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
