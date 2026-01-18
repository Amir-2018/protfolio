import React from "react";
import { motion } from "framer-motion";
import { CertificatesProps } from "../models/certificates-interface";
import { Award, Calendar, User, Code, Database, Server, Trophy } from "lucide-react";

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getCertificateIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('scrum')) return Trophy;
    if (titleLower.includes('javascript')) return Code;
    if (titleLower.includes('nodejs')) return Server;
    if (titleLower.includes('sql')) return Database;
    return Award; // default
  };

  return (
    <section id="certificates" className="mb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Certificates
          </motion.h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Certificate Card */}
              <motion.div
                className="relative bg-white rounded-3xl shadow-2xl p-6 h-full overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Certificate Image/Icon */}
                <motion.div
                  className="relative w-full h-32 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {cert.image && !cert.image.includes("example.com") ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    (() => {
                      const IconComponent = getCertificateIcon(cert.title);
                      return <IconComponent size={48} className="text-blue-500" />;
                    })()
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="font-bold text-xl mb-3 text-gray-800 leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {cert.title}
                  </motion.h3>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <User size={16} className="text-purple-500 flex-shrink-0" />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar size={16} className="text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{cert.year}</span>
                    </div>
                  </div>

                  {/* Achievement badge */}
                  <motion.div
                    className="mt-4 inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Award size={10} />
                    Certified
                  </motion.div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
              </motion.div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
  export default Certificates;
