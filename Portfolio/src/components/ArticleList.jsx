import React, { useState, Children, cloneElement } from 'react';
import ArticleCard from './ArticleCard';
import { articleData } from '../data/ArticleData';
import {motion} from 'framer-motion';
import LinkPreview from '@ashwamegh/react-link-preview';
// If you're using built in layout, you will need to import this css


const ArticleList = () => {
    const [previewData, setPreviewData] = useState(null);

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
              imageUrl2={articleData.imageUrl2}
            />
          ))}
        </div>
        </div>
    </div>





    </motion.section>

  );
};

export default ArticleList;