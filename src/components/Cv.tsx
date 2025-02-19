import React from "react";
import cvImage from '../public/images/converted_image.png' // Ensure this is the image of your CV
import cvFile from '../public/files/amir-maalaoui-cv.pdf' // Ensure this is the image of your CV


export const Cv: React.FC = () => {

  return (
    <section id="cv" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">My CV</h2>
      <div className="flex flex-col items-center">
        {/* CV Image */}
 
        
        {/* Download Button */}
        <a
          href={cvFile}
          download="CV_Amir_Maalaoui.pdf"
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};
