
import inheritanceCodeExample from '../images/InheritanceCodeExample.png';
import abstractionCodeExample from '../images/AbstractionCodeExample.png';
import encapsulationCodeExample from '../images/EncapsulationCodeExample.png';
import polymorphismCodeExample from '../images/PolymorphismCodeExample.png';
import sqlCheatSheetP1 from '../images/sql-basics-cheat-sheet-page-1.png';
import sqlCheatSheetP2 from '../images/sql-basics-cheat-sheet-page-2.png';
import OOPArticelImage from '../images/OOPArticleImage.png';
import SQLArticleImage from '../images/SQLArticleImage.jpg';
import PropsReactJSArticleImage from '../images/PropsReactJSArticle.png';
import ParentComponentExample from '../images/ParentComponentExample.png';
import ParentComponentExample2 from '../images/ParentComponentExample2.png';
import ParentComponentExample3 from '../images/ParentComponentExample3.png';

import ChildComponentExample from '../images/ChildComponentExample.png';
import ChildComponentExample2 from '../images/ChildComponentExample2.png';
import ChildComponentExample3 from '../images/ChildComponentExample3.png';
import ChildComponentExample4 from '../images/ChildComponentExample4.png';


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
      /* ----------------------------Principles of Object Oriented Programming Article ------------------------------------------------------*/
        title: "Principles of Object Oriented Programming",
        date: "October 5th, 2023",
        content:     <>
        <p>  
        There are four main principles or pillars of object oritented programming: Inheritance, Abstraction, Encapsulation, and Polymorphism. 
        This article is a quick guide that goes over the aforementioned principles in a consise way.
      </p>
      {/* The following paragraph explains each principle in more detail. */}
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


     <h2 className="mb-4 mt-4 font-general-medium text-2xl">Encapsulation:</h2>
      <p>The general idea of this mechanism is simple. For example, you have an attribute that is not visible from the outside of an object. You bundle it with methods that provide read or write access. 
      Encapsulation allows you to hide specific information and control access to the object's internal state. In the realm of object-oriented programming, we call this functionality as getter and setter methods. 
      As the names indicate, a getter method retrieves an attribute and a setter method changes it.
      </p>
       <img src={encapsulationCodeExample} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
      <p> The example above demonstrates the class attributes (<em>selection</em> and <em>quantity</em>) can't be accessed directly. 
      To access them, we have <em>getSelection</em>, <em>getQuantity</em>, and <em>setQuantity</em> methods that allows to change and accecss certain values.
      By doing so, the class has hidden a particular piece of information and has limited the access to its attributes. </p>

     <h2 className="mb-4 mt-4 font-general-medium text-2xl">Polymorphism:</h2>
      <p>Polymorphism means "many forms" and in layman terms, it refers to classes that are related to one another by inheritance. Consider the class below:
      </p>
       <img src={polymorphismCodeExample} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
       <p>The <em>Person</em> class has a method called <em>teach</em>, and the <em>Teacher</em> class has a method with the same name. Polymorphism utilzies the
       inheritance relationship to perform different tasks. Each class that inherits <em>Person</em> can have its own implementation of <em>teach</em> method. 
       For instance, we can also add a <em>Professor</em> class that has its own <em>teach</em> method with added parameters.</p>
       <p>Polymorphism is incredibly useful when there's different types of objects, and we write classes that can work with all those different types since they all abide by the same API.
       On top of that, it comes in handy whenever we we want to add a new <em>Person</em> to the application without changing any of the existing logic in code.
      </p>
       
      <p>Object-Oriented Programming Principles remain a powerful tool that allows us to develop efficient, scalable, and maintainable software solutions. By embracing these principles,
      we become equipped with the power to write good code that will not only stand the test of time, but also it will be much easier to manage and modify in the long haul. </p>
       
      </>,
        imageUrl: OOPArticelImage,
    },
    
    /* --------------------------------------------------SQL Basics Cheat Sheet Article ------------------------------------------------------*/
    {
        title: "SQL Basics Cheat Sheet",
        date: "October 10, 2023",
        content:     <>
        <p> Recently, I stumbled across a SQL cheat sheet that it worth including in an article. As developers, we often have to craft queries to 
        retrieve data and perhaps conduct some analysis. While complex data analysis may require the expertise of a seasoned data analyst, the SQL basics cheat sheet allow 
        developers to perform simple yet essential data analysis on tables in a database.
      </p>

      <img src={sqlCheatSheetP1} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
      <img src={sqlCheatSheetP2} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
    
      <p>The cheat sheet covers how to query from a single or multiple tables, filter output with null/non-nullables values, wildcards, inequality signs, and between a list of values.
      It also demonstrates how to join multiple tables using the infamous <em>JOIN</em> operator. We also see how we can utilize the power of <em>AGGREGATE</em> functions (AVG, COUNT, MAX, MIN, SUM) and <em>GROUPING</em> output 
      by a certain column, as well as using <em>SET OPERATIONS</em> as <em>UNION</em>, <em>INTERSECT</em>, <em>EXCEPT</em> to combine results from two or more queries. </p> 
      <p>If you'd like to access the cheat sheet in text form, you can access it <a href="https://learnsql.com/blog/sql-basics-cheat-sheet/" className="text-ternary-dark dark:text-ternary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
 target="_blank">here:</a>
     </p> 
     <p> All in all, the cheat sheet is a useful to tool that concisely covers the fundamentals of SQL. It also serves as a good refresher for people, who are already familiar with SQL and sets them up to learn more complex SQL commands. </p>
      </>,
        imageUrl: SQLArticleImage,
    },
        /* --------------------------------------------------Props in React JS Article ------------------------------------------------------*/
    {
        title: "Props in React JS",
        date: "October 12, 2023",
        content:     <>
        <p>
        React JS is arguably the most popular JavaScript library in recent years. Many real-world applications such as Amazon, Netflix, and Facebook 
        use React to create a seamless UI/UX experience for their users. In this article, I will explain the purpose of props, how to use them, and why 
        they are essential for mastering React. Props, short for "properties," play a crucial role in passing data into React components, 
        enabling these components to access specific, customized values provided through the input (props). Let's delve into a practical 
        example to better understand how props work.
      </p>
      <img src={ParentComponentExample} alt="Parent Component Example 1" className="mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto" />
      <p> In the code snippet, we have a parent component called <em>App</em>. It declares an <em>h1</em> with the text "Songs" and renders a child component called <em>Song </em>
        within a div. In React, components are ALWAYS passed from parent to child, never the other way around. Now, let's take a closer look at the child component to see how props are utilized:</p>

      <img src={ChildComponentExample} alt="Child Component Example" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p>The child component currently has an image, name, description, and the artist's name. If we render the <em>Song</em> component multiple times, the result would be identical each time, 
      which is not quite useful to us.</p>

      <img src={ParentComponentExample2} alt="Parent Component Example 2" className="mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto" />

      <p>The Song component will produce the same output every time it's rendered. But what if an application wants to use the Song component with 
      dynamic and flexible content, where the image, description, name, and artist fields can alter? This is where props come to the rescue! By passing customized 
      values from a parent component to a child component, we can render the Song component in distinct ways, obtaining a unique output each time 
      we provide different values to the component.</p>
      
      <img src={ParentComponentExample3} alt="Parent Component Example 2" className="mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto" />

      <img src={ChildComponentExample2} alt="Child Component Example 2" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p>In the App component, we pass unique image, name, description, and artist values to the child component, Song. The child component takes props 
      as a function parameter and uses these values to populate the fields of the Song component. This way, the Song component can display content that 
      is specific to each song.</p>
      <p>It's important to note that the name "props" can be changed to any identifier you prefer. 
      However, using <em>props</em> as a naming convention is a good practice to easily identify that you are working with props.</p>
      <p>In terms of writing props, there are a couple of ways we can make the code concise in the <em>Song</em> component using the destructuring approach:</p>

      <img src={ChildComponentExample3} alt="Child Component Example 3" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <img src={ChildComponentExample4} alt="Child Component Example 4" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p>Both of these approaches yield the same output. Destructuring makes the code succinct and readable, however if you prefer the original approach, that is completletly acceptable as well.</p>
      <p>In summary, we now have a solid understanding of how props work in React JS. By harnessing the power of props, we can create web pages with 
      dynamic data outputs, making our applications more flexible and versatile. </p>

      </>,
        imageUrl: PropsReactJSArticleImage,
    },
]