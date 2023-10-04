import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerWorking from '../images/developerWorking.png';
import Skills from './Skills';


const WorkExperience = () => {
  const cardStyle = {
    backgroundImage: `url(${developerWorking})`,
    backgroundSize: '100%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat', 
    position: 'relative',
    borderRadius: '0.75rem',
  };
  const skillsList = ['C#', '.NET', 'JavaScript', 'PostgreSQL', 'ReactJS', 'Node.js', 'TypeScript', 'Amazon Web Services (AWS)'];
  return (
    <motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="mb-21 container mx-auto flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
    <section className="bg-gray-100">
      <div>
				<p className="mt-8 text-center font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Work Experience
				</p>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-left p-4 text-ternary-dark dark:text-ternary-light">
              <h3 className="font-general-semibold text-3xl text-gray-800 mb-3">
              <a
              href="https://www.shoppinggives.com/"
              className="text-ternary-dark dark:text-ternary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
              target="_blank"
              rel="noopener noreferrer"
              >
              ShoppingGives
              </a>
              </h3>
              <p className="font-general-semibold text-gray-600 ">Position: Software Engineer</p>
              <p className="font-general-medium text-gray-600">March 2022 - June 2023</p>
              <p className="mt-4 mb-2 text-left font-general-medium text-gray-700">
              As a Software Engineer at ShoppingGives, I contributed significantly to the development and enhancement of their product that has donated millions of dollars to charitable causes. I played a key role in the development of several features, ensuring the code adhered to best practices and met business requirements. 
              </p>
              <div>
              <Skills 
                className="container mx-auto flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
                skills={skillsList} 
              />
              </div>
              
              <a
              download="Syed Athar Resume.pdf"
              href="/files/Syed Athar Resume.pdf"
              className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-6 mb-20 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
              aria-label="Download Resume"
              >
              <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
              <span className="text-sm sm:text-sm font-general-medium duration-100">
                More Details
              </span>
              </a>
            </div>
        </div>
        </div>
      </div>
    </section>
    <motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-auto text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={developerWorking}
				/>
			</motion.div>
    </motion.section>
    
  );
};

export default WorkExperience;