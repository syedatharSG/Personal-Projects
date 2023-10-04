import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import aboutMe from '../images/avatar.png';
import Skills from './Skills';

const AboutMe = () => {
    return (
        <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="mb-21 container mx-auto flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
            >
                    <motion.div
                    initial={{ opacity: 0, y: -180 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                    className="w-full sm:w-5/6 md:w-5/6 text-right float-right mt-8 sm:mt-0 mb-4"
                >
                    <img
                        src={aboutMe}
                    />
                </motion.div>
        <section className="bg-gray-100">
          <div>
                    <p className="mt-8 ml-7 text-left font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                        About me
                    </p>
    
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="text-left p-4 text-ternary-dark dark:text-ternary-light">
                  <p className="text-left font-general-medium text-gray-700">
                  Hello! I'm Syed Athar, a passionate and enthusiastic software engineer. I enjoy building
          interactive and user-friendly applications using framworks as React, Node.js,
          and C#. With a keen eye for design and a strong passion for problem-solving, I strive to create elegant sofware solutions
          that deliver a seamless user experience.
                  </p>
                  <p className="mt-4 text-left font-general-medium text-gray-700">
                  When I'm not coding, I love to immerse myself in books, tech blogs, graphic-design, and physical training.
                  </p>
                </div>
            </div>
            </div>
          </div>
        </section>
        </motion.section>
        
      );
};

export default AboutMe;