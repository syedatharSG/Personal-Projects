import React from 'react';
import ProjectCard from '../ProjectCard';
import {motion} from 'framer-motion';
import weatherApp from '../../images/weatherApp.jpg'
import ticTacToeApp from '../../images/TicTacToe.png'
import portfolio from '../../images/portfolioThumbnail.png'


const projects = [
  {
    title: 'Weather App',
    description: 'An app that displays the current temperature of a city along with other relevant information!',
    image: weatherApp,
    sourceCodeLink: 'https://github.com/syedatharSG/PersonalProjects/tree/main/Weather-App',
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'A collaborative IDE app for interactive Tic-Tac-Toe gaming. Enjoy multiplayer fun together!!',
    image: ticTacToeApp,
    sourceCodeLink: 'https://github.com/syedatharSG/PersonalProjects/tree/main/Tic-Tac-Toe',
  },
  {
    title: 'Portfolio Website',
    description: "Explore the source code of the portfolio you're currently scrolling through!",
    image: portfolio,
    sourceCodeLink: 'https://github.com/syedatharSG/PersonalProjects/tree/main/Portfolio',
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