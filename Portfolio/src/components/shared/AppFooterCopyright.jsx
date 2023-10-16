function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
			©
				<a
					href="https://github.com/syedatharSG/PersonalProjects/tree/main/Portfolio"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 mr-2 duration-500"
					target="_blank"
                  	rel="noopener noreferrer"
				>
					Software Engineer Portfolio 🖥️
				</a>
				  
				<a
					href="https://syedatharSG.github.io"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
					target="_blank"
                  	rel="noopener noreferrer"
				>
					SYED ATHAR 💼
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
