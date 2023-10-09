import React, { useState, Children, cloneElement } from 'react';

const ArticleCard = ({ title, imageUrl, date, content, imageUrl2 }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  let childrenArray = Children.toArray(content.props.children);
  const displayContent = expanded ? childrenArray : childrenArray[0].props.children.slice(0,200);


  return (
    <div className="bg-stone-50 dark:bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 text-ternary-dark dark:text-ternary-light lg:w-98 lg:h-48 sm:max-w-md">
      <h2 className="mb-1 font-general-medium text-4xl">{title}</h2>
      <div className="mb-4">
        <img src={imageUrl} alt={title} className="w-97 h-48 object-cover rounded-md mx-auto" />
      </div>
      <p className="font-general-medium text-xl text-gray-600 px-6 pb-2">{date}</p>
      <div className="font-general-regular prose max-w-none px-6">
        {displayContent}
        {childrenArray[0].props.children.length > 200 && (
          <button
            className="inline-block text-blue-500 hover:underline focus:outline-none"
            onClick={toggleExpand}
          >
          {!expanded && '.....'}
          </button>
        )}
        <img src={expanded && imageUrl2} className="w-97 h-48 object-cover rounded-md mx-auto" />
        
      </div>
    </div>
  );
};

export default ArticleCard;
