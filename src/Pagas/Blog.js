import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-20">
            <div className="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                <div className="card-body">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <p>01.Using Immutable Data Structures</p>
                    <p>02.Dependency optimization</p>
                    <p>03.Avoid Inline Function Definition in the Render Function.</p>
                    <p>04.Avoid using Index as Key for map.</p>
                    <p>05.Avoiding Props in Initial States.</p>
                    <p>06.Spreading props on DOM elements.</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>Diffrent way to manage state in React is to use the Class property. Once the class is instantiated in the memory all the properties of the class are created so that we can read these properties in the render function.Here is an example. I created a component called Bussiness and created a class property called state and use the state in the render function.
                    </p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Unit testing is a level of software testing where individual units/components of a software are tested. In the React world this means testing an individual React Component or pure functions. Testing is essential to guarantee a stable application
                    </p>
                    <p>This helps to detect and protect against bugs in the future. Sometimes developers write unit tests first, then write the code. This approach is also known as test-driven development (TDD). In TDD, requirements are turned into specific test cases, then the software is improved to pass the new tests.</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>JavaScript Objects have a property called [prototype] In modern JavaScript the property is __proto__ By following the prototypical inheritance system objectA can borrow some method from objectB There is no class feature in core JavaScript, But class in ES6 (JS) is specially a syntactical sugar over javascript's prototypical inheritance. Class instances can extend their methods from another instances with the help of __proto__ method</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                <div className="card-body">
                    <h2 className="card-title">Why you do not set the state directly in React.</h2>
                    <p>Firstly, We use state in a react app, so that we can rerender the DOM efficiently and effectively. State or useState hook causes rerendering the DOM If you write code products = [...] in this way, our DOM will not be rerendered, and we will not see any changes or effects on the UI And If we use setProducts([...]) like that our DOM will be rerendered and we experience dynamic user inteface (UI)</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;