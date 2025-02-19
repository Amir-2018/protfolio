import { CertificatesProps } from "../models/certificates-interface";

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
    return (
      <section id="certificates" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-105">
              <h3 className="font-bold text-xl mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">Issued by: {cert.issuer}</p>
              <p className="text-gray-500">Year: {cert.year}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Certificates;