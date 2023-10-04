import React from 'react';
import {BsCodeSlash} from 'react-icons/bs';
import {motion} from 'framer-motion';


const ProjectCard = ({ title, description, image, sourceCodeLink, demoLink }) => {
  return (
    <motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		>
    <div className="bg-stone-50 dark:bg-gray-900 rounded-lg shadow-lg p-6 w-auto h-auto flex flex-col justify-between hover:scale-90 ease-in duration-500">
      <div className="mb-4 overflow-hidden">
        <div className="mb-4">
          <img src={image} alt={title} className="font-general-semibold w-full h-48 object-cover rounded-md" />
        </div>
        <div className="flex-grow text-ternary-dark dark:text-ternary-light">
        <h2 className="font-general-semibold text-gray-600">{title}</h2>
        <p className="font-general-medium text-gray-700 mb-2">{description}</p>
        </div>
        <div className="flex space-x-4 justify-center">
        <a
						href={sourceCodeLink}
						className="font-general-medium flex justify-center items-center w-18 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						target="_blank"
                  		rel="noopener noreferrer"
						aria-label="Source Code"
					>
						<BsCodeSlash className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></BsCodeSlash>
						<span className="text-sm sm:text-sm font-general-medium duration-100">
							Code
						</span>
					</a>
          {/* <a
            href={demoLink}
						className="font-general-medium flex justify-center items-center w-18 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<BsCodeSlash className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></BsCodeSlash>
						<span className="text-sm sm:text-sm font-general-medium duration-100">
							Demo
						</span>
					</a> */}
        </div>
      </div>
    </div>
    </motion.section>
  );
};

export default ProjectCard;