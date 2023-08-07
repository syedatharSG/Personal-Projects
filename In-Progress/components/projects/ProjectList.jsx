import React from 'react';
import ProjectCard from '../ProjectCard';
import {motion} from 'framer-motion';
import weatherApp from '../../images/weather-app.jpg'
import ticTacToeApp from '../../images/tic-tac-toe.png'
import apps from '../../images/apps.jpg'

const projects = [
  {
    title: 'Weather App',
    description: 'An app that displays the current temperature of a city along with other relevant information',
    image: weatherApp,
    sourceCodeLink: 'https://github.com/syedatharSG',
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'An IDE app that allows two users to play the tic-tac-toe game',
    image: ticTacToeApp,
    sourceCodeLink: 'https://github.com/syedatharSG',
  },
  {
    title: 'Portfolio Website',
    description: "Explore the source code of the portfolio you're currently scrolling through!",
    image: apps,
    sourceCodeLink: 'https://github.com/syedatharSG',
  },
  // Add more projects as needed
];

const ProjectsList = () => {
    return (
        <div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-3 text-ternary-dark dark:text-ternary-light">
					Projects
				</p>
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              sourceCodeLink={project.sourceCodeLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
      </div>
    );
  };

export default ProjectsList;