
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
        There are four main principles, or pillars, of object-oriented programming: Inheritance, Abstraction, Encapsulation, and Polymorphism. 
        This article is a quick guide that goes over these principles concisely.
      </p>
      {/* The following paragraph explains each principle in more detail. */}
      <h2 className="mt-4 mb-4 font-general-medium text-2xl">Inheritance:</h2>
      <p>In Object-Oriented Programming languages, we can inherit methods and attributes from one class to another, creating a relationship 
      between the original class (parent or superclass) and the class that inherits from it (child or subclass).
      </p>

      <img src={inheritanceCodeExample} alt="Inheritance Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p>The example above uses Java to showcase how Inheritance works. It allows the subclass to use the parent class's attributes and methods without 
      explicitly defining them in its own class. Inheritance promotes code reusability and enables the subclass to define its separate methods, 
      which is an extension to the parent class.</p>
      
      
      <h2 className="mb-4 mt-4 font-general-medium text-2xl">Abstraction:</h2>
      <p>Abstraction is used to hide internal details from a user and present only the essential information. We can understand abstraction by using 
      everyday machines or equipment as examples. For instance, when using a corded lawn mower, the user doesn't need to know the machine's internal 
      workings, such as motors, wires, and metals. Instead, they follow a set of simple steps unrelated to the machine's internals. In OOP, abstraction 
      is achieved through abstract classes and interfaces.
      </p>

       <img src={abstractionCodeExample} alt="Abstraction Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p className="mb-8">By inheriting an abstract class, as shown in the example, a class like <em>somePhone </em> inherits the <em>Call </em> method without needing 
      to know its internal operations. It must provide an implementation for the <em>Dial </em> method since it's an abstract method, a requirement 
      for classes inheriting abstract classes.</p>
     <p>It is also worth mentioning an abstract class can have its own set of fields/attributes that can be accessed by the subclass.</p> 


     <h2 className="mb-4 mt-4 font-general-medium text-2xl">Encapsulation:</h2>
      <p>The general idea behind this principle is straightforward. For example, you may have an attribute that is not visible from the outside of an 
      object. You encapsulate or bundle it with methods that provide read or write access. Encapsulation allows you to conceal specific information and 
      regulate access to the object's internal state. In the realm of object-oriented programming, we refer to this functionality as getter and setter 
      methods. As the names suggest, a getter method retrieves an attribute, and a setter method modifies it.
      </p>

       <img src={encapsulationCodeExample} alt="Encapsulation Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p>  The example provided demonstrates that class attributes like <em>selection </em> and <em>quantity </em> cannot be accessed directly 
      but require the use of <em>getSelection </em>, <em>getQuantity </em>, and <em>setQuantity </em> methods. This technique enhances security by 
      limiting direct access to object attributes. </p>

     <h2 className="mb-4 mt-4 font-general-medium text-2xl">Polymorphism:</h2>
      <p>Polymorphism means "many forms" and in layman terms, it refers to classes that are related to one another by inheritance. It allows different 
      classes that inherit from a common parent to perform different tasks with methods of the same name. Consider the class below:
      </p>

       <img src={polymorphismCodeExample} alt="Polymorphism Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

       <p>The <em>Person</em> class has a method called <em>teach</em>, and the <em>Teacher</em> class has an identical method. Polymorphism utilzies the
       inheritance relationship to perform different tasks. Each class that inherits <em>Person</em> can have its own implementation of <em>teach</em> method. 
       For instance, we can also add a <em>Professor</em> class that has its own <em>teach</em> method with added parameters.</p>
       <p className="mb-8">Polymorphism is incredibly useful when there's different types of objects, and we write classes that can work with all those different 
       types since they all abide by the same API.
       On top of that, it comes in handy whenever we we want to add a new <em>Person</em> to the application without changing any of the existing 
       logic in code.
      </p>
       
      <p>In conclusion, Object-Oriented Programming Principles are powerful tools for developing efficient, scalable, and maintainable software solutions. 
      Embracing these principles empowers developers to write code that withstands the test of time and is easy to manage and modify in the long run.</p>
       
      </>,
        imageUrl: OOPArticelImage,
    },
    
    /* --------------------------------------------------SQL Basics Cheat Sheet Article ------------------------------------------------------*/
    {
        title: "SQL Basics Cheat Sheet",
        date: "October 10, 2023",
        content:     <>
        <p> Recently, I stumbled across a SQL cheat sheet that it worth including in an article. As developers, we often have to craft queries to 
        retrieve data and conduct some analysis. While complex data analysis may require the expertise of a seasoned data analyst, the SQL cheat sheet allow 
        developers to perform simple yet essential data analysis on tables in a database.
      </p>

      <img src={sqlCheatSheetP1} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
      <img src={sqlCheatSheetP2} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
    
      <p>The cheat sheet covers how to query from a single or multiple tables, filter output with null or non-null values, utilize wildcards, inequality
       signs, and specify ranges of values. It also demonstrates how to join multiple tables using the infamous JOIN operator. Additionally, it 
       illustrates how to harness the power of AGGREGATE functions (AVG, COUNT, MAX, MIN, SUM) and GROUP output by a specific column. Furthermore, it 
       shows how to use SET OPERATIONS such as UNION, INTERSECT, and EXCEPT to combine results from two or more queries. </p> 
      <p className="mb-8">If you'd like to access the cheat sheet in text form, you can access it <a href="https://learnsql.com/blog/sql-basics-cheat-sheet/" className="text-ternary-dark dark:text-ternary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
 target="_blank">here:</a>
     </p> 
     <p>All in all, this cheat sheet is a valuable tool that concisely covers the fundamentals of SQL. It also serves as an excellent refresher for 
     those already familiar with SQL and sets them up to learn more complex SQL commands. </p>
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

      <p className="mb-8">In the App component, we pass unique image, name, description, and artist values to the child component, Song. The child component takes props 
      as a function parameter and uses these values to populate the fields of the Song component. This way, the Song component can display content that 
      is specific to each song.</p>
      <p>It's important to note that the name "props" can be changed to any identifier you prefer. 
      However, using <em>props</em> as a naming convention is a good practice to easily identify that you are working with props.</p>
      <p>In terms of writing props, there are a couple of ways we can make the code concise in the <em>Song</em> component using the destructuring approach:</p>

      <img src={ChildComponentExample3} alt="Child Component Example 3" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <img src={ChildComponentExample4} alt="Child Component Example 4" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p className="mb-8">Both of these approaches yield the same output. Destructuring makes the code succinct and readable, however if you prefer the original approach, that is completletly acceptable as well.</p>
      <p>In summary, we now have a solid understanding of how props work in React JS. By harnessing the power of props, we can create web pages with 
      dynamic data outputs, making our applications more flexible and versatile. </p>

      </>,
        imageUrl: PropsReactJSArticleImage,
    },
]