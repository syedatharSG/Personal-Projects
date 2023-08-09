import React, { useState, Children, cloneElement } from 'react';

const Article = ({ title, imageUrl, date, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  let childrenArray = Children.toArray(content.props.children);
  const displayContent = expanded ? childrenArray : childrenArray[0].props.children.slice(0,200);


  return (
    <div className="bg-stone-50 dark:bg-gray-900 rounded-lg shadow-lg p-6 w-98 h-48 mb-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mb-4">
        <img src={imageUrl} alt={title} className="w-97 h-48 object-cover rounded-md mx-auto" />
      </div>
      <p className="text-gray-600 px-6 pb-2">{date}</p>
      <div className="prose max-w-none px-6">
        {displayContent}
        {childrenArray[0].props.children.length > 200 && (
          <button
            className="inline-block text-blue-500 hover:underline focus:outline-none"
            onClick={toggleExpand}
          >
            {!expanded && '.....'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Article;
