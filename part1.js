// Part 1: 30%, you must create a repo for part 1, separate from part 2

// Why does React utilize the virtual-dom?
// React utilizes the virtual-dom because it manipulates the DOM very effciently. It enhances its performance

// 2a How is data flowed in React? 2b. Why is React architected this way?
//1. - Data is flowed in React from the top down (Aka one-way data flow),

//2b. - React was architected this way to make React more Performant and aslo making it easier to debug a React app.

// 3. What is the purpose for lifting state up in React? Give an example of this
//When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components

// 4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.
// - A startup might not have alot of money to start off with. By implementing React-Router they can still acheive what they want in a more cost effective manner. But also more notably because React Routing has a more seamless User Experience. This is beacuse React Router routing allows us to a build a single page web application with navingtion without the page refreshing as the user navigates

// 5. Can browsers read JSX? Why?
// No, because browsers can only read JavaScript Obj. JSX is not regular JavaScript. In order for us to have the browser read JSX we have to translate it into a JS fil. We can use the plugin Babel to do this.

// 6. What is the significance of keys in React?
//  - The significance of keys in React is keys help identify items in React which have changed, added, or removed.

// 7. What is the difference between Props and State?
// Props work by passing data from parent components to child components and are immutable. Once props are set the cannot be changed.

//State on the other hand is mutable. State is used to hold data that may change over time and to control the behavior after each change.

// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant.
// in the code below we see an array of numbers being mapped over, which will populate a new array with n + 1, we do this with arrow fucntion inside of the .map method.
//The return would be [2, 3, 4]

// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )

// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })

// 9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map()
// Show 3 test runs, with at least 2 edge cases.
// function properNames(names) {

// }

// 10. Given an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// Show 3 test runs, with at least 2 edge cases.
// Function smallWordsOnly(arr) {

// }
