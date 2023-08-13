import React, { useState, Children, cloneElement } from 'react';
import ArticleCard from './ArticleCard';
import { articleData } from '../data/ArticleData';
import {motion} from 'framer-motion';
import LinkPreview from '@ashwamegh/react-link-preview';
// If you're using built in layout, you will need to import this css


const ArticleList = () => {
    const [previewData, setPreviewData] = useState(null);

  const fetchLinkPreview = async () => {
    try {
      const response = await fetch('/preview?url=https://www.youtube.com/watch?v=8mqqY2Ji7_g');
      const data = await response.json();
      setPreviewData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching link preview:', error);
    }
  };

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
    >
    <div className="text-center">
        <p className="mt-8 font-general-medium text-2xl sm:text-4xl mb-8 text-ternary-dark dark:text-ternary-light">
            Articles
		</p>
        <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
        {articleData.map((articleData, index) => (
            <ArticleCard
              key={index}
              title={articleData.title}
              imageUrl={articleData.imageUrl}
              date={articleData.date}
              content={articleData.content}
            />
          ))}
        </div>
        </div>
    </div>

    <div>
      <button onClick={fetchLinkPreview}>Fetch Link Preview</button>
      {previewData && (
        <LinkPreview
          title={previewData.title}
          description={previewData.description}
          image={previewData.image}
          url={previewData.url}
        />
      )}
    </div>



    </motion.section>

  );
};

export default ArticleList;