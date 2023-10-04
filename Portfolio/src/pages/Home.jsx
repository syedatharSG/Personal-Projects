import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Button from '../components/reusable/Button';
import WorkExperience from '../components/WorkExperience';
import ProjectsList from '../components/projects/ProjectList';
import AboutMe from '../components/AboutMe';
import ArticleList from '../components/ArticleList';
import ArticleDisplay from '../components/ArticleDisplay';
import { articleData } from '../data/ArticleData';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<AboutMe></AboutMe>
			<WorkExperience></WorkExperience>
			
			<ProjectsList></ProjectsList>
			<ArticleDisplay articles={articleData}></ArticleDisplay>
			
			<div className="mt-8 sm:mt-10 flex justify-center">
			</div>
		</div>
	);
};

export default Home;
