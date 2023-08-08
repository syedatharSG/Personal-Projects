import React from 'react';
import ArticleCard from './ArticleCard';
const article = [ 
    {
        title: "Getting Started with Tailwind CSS",
        date: "August 8, 2023",
        content:     <>
        <p>
        Visual Studio Code (VS Code) is the most popular coding editor for developers made by Microsoft.
        It is a free and open source software made by developers for developers. According to the Stack Overflow
        2022 survey, VS Code is the IDE of choice across all developers.
      </p>
      
      {/* ... (content continues) ... */}
      
      <h2>Bracket Pair Colorizer</h2>
      <p>
        <em>Bracket Pair Colorizer</em> can highlight matching brackets in the editor, so developers can easily
        understand which 2 brackets belong to each other. By default <code>()</code>, <code>[]</code>, and <code>{}</code>
        are matched, but you can also configure custom bracket characters.
      </p>
      
      <h2>NPM</h2>
      <p>
        <strong>NPM</strong> is a super handy extension for VS Code that runs the npm scripts in your <code>package.json</code>
        file and also it validates the packages installed in your project, which are listed in the <code>package.json</code> file.
      </p>
      
      {/* ... (more content) ... */}
      
      <p>
        There are so many extensions on the VS Code Marketplace that are helpful when doing software development, but to find
        the best among them will take some getting used to. The list provided here includes some of the best extensions,
        and it will be updated regularly to add more extensions that may come in the future.
      </p>

      </>,
        imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80",
    },
]
const ArticleList = () => {
  return (
    <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-3 text-ternary-dark dark:text-ternary-light">
            Articles
		</p>
        <div className="flex justify-center items-center h-screen bg-gray-100">
        {article.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              imageUrl={article.imageUrl}
              date={article.date}
              content={article.content}
            />
          ))}
        </div>
    </div>
  );
};

export default ArticleList;