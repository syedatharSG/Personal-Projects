import React from 'react';

const Skills = ({skills}) => {
    return (
      <div className="bg-gray-100">
        <h2 className="font-general-semibold text-3xl text-ternary-dark dark:text-ternary-light mb-3">Skills</h2>
        <div className="justify-center grid gap-2 grid-cols-1 sm:grid-cols-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="font-general-medium border border-indigo-200 dark:border-ternary-dark sm:py-3 bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500 px-3 py-2 rounded-lg shadow-lg my-1 mr-4 text-sm sm:text-sm md:text-base"
            style={{ maxWidth: '100%', overflow: 'hidden', display: 'inline-block' }}
          >
            {skill}
          </span>
        ))}
        </div>
      </div>
    );
  };
  
  export default Skills;