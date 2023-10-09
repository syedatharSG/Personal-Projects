
import inheritanceCodeExample from '../images/InheritanceCodeExample.png';
import abstractionCodeExample from '../images/AbstractionCodeExample.png';
import OOPArticelImage from '../images/OOPArticleImage.png';

const url = 'https://getlinkpreview.onrender.com/';
const requestUrl = 'https://www.youtube.com/watch?v=-OO1FqnjVuQ&ab_channel=TheMacLife'; // Replace with the URL you want to preview


// JSON request payload
const requestData = {
  url: requestUrl
};
let storedImageURL;
// Make a POST request using fetch
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
})
  .then(response => response.json())
  .then(data => {
    storedImageURL = data.image;
    // Handle the response data here
    doSomethingWithImageURL(storedImageURL);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  console.log("storedImageURL is: ", storedImageURL);

  function doSomethingWithImageURL(imageURL) {
    console.log('Image URL:', imageURL);
    console.log(storedImageURL);
  }

export const articleData = [ 
  
    {
        title: "Principles of Object Oriented Programming",
        date: "October 5th, 2023",
        content:     <>
        <p>
        There are four main principles or pillars of object oritented programming: Inheritance, Abstraction, Encapsulation, and Polymorphism. 
        This article is a quick guide that goes over the aforementioned principles in a consise way.
      </p>

      <h2 className="mt-4 mb-4 font-general-medium text-2xl">Inheritance:</h2>
      <p>In a Object-Oriented Programming language, we can inherit methods and attriutes from one class to another. This creates a relationship
      between the two classes — the original class and the class that's inheriting the original class. We call the original class the parent or superclass, whereas
      the inheriting class is called the child or subclass.
      </p>
      <img src={inheritanceCodeExample} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
      <p>The example above utilizes Java to showcase how Inheritance works — it allows the subclass to use the parent class' attributes and methods without  explicity defining in its own class.
      Hence, Inheritance promotes code reusability and allowing the subclass to define its own seprate methods, which is an to the parent class. </p>
      
      <h2 className="mb-4 mt-4 font-general-medium text-2xl">Abstraction:</h2>
      <p>Abstraction is used to hide internal details from a user and only display the essential information to them. In real life, we can take any machine or a piece of equipment to demonstrate abstraction. For instance, if we use a corded lawn mower, we plug it in the power outlet and turn on the machine to begin cutting grass.
      The individual who's using this machine does not need to know how the internals of the machine is operating — motors, wires, and metals, etc. The user merely needs to know a series of simple steps that are unrelated to the machine's internal operation.
      In OOP, we can achieve abstraction with abstract classes and interfaces. Abstract classes can't be instantiated to create objects, rather it has to be inherited by another class:
      </p>
       <img src={abstractionCodeExample} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
      <p>By inheriting the abstraction class, the <em>somePhone</em> class gets inherits the <em>Call</em> method. It does not how the <em>Call</em> methods. However, it has to provide the implementation of
      <em> Dial</em> method since it is an abstract method, and the class that inherits the abstract class must provide an implementation for the abstract methods.
      Once it provides a body for the aforementioned method, it calls upon the <em>Call</em> method. This is an example of 
      Abstraction as the <em>somePhone</em> utilizes <em>Call</em> method without knowing how it works internally!</p>
     <p>It is also worth mentioning an abstract class can have its own set of fields/attributes that can be accessed by the subclass.</p> 

      </>,
        imageUrl: OOPArticelImage,
    },
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
    {
        title: "Getting Started with Tailwind CSS",
        date: "August 8, 2023",
        content:(
            <div className="text-left">
              <p>
              There are so many extensions on the VS Code Marketplace that are helpful when doing software development, but to find
        the best among them will take some getting used to. The list provided here includes some of the best extensions,
        and it will be updated regularly to add more extensions that may come in the future. 
              </p>
              <img src={storedImageURL}/>
    
              {/* ... (more content) ... */}
            </div>
          ),
        imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80",
        imageUrl2: "https://i.ytimg.com/vi/-OO1FqnjVuQ/maxresdefault.jpg"
    },
]