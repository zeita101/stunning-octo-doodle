//1.Why does React utilize the virtual-dom?
//React utilizes the virtual-dom to speed or make more efficient the proccess of detecting state and prop changes

//2a How is data flowed in React? 2b. Why is React architected this way?
//The state is passed to the view and th child components, the actions are then triggered by the view

//3. What is the purpose for lifting state up in React? Give an example of this
//  the purpose of lifting state in React is to have one state with multiple child components,
//this way the data isn't inconsistent and coming from one or fewer sources
//EX.
// handler(updatedValue){ 
//     this.setState({key: updatedValue}) 
// }
// render() {
//     return(
//         <Child propName={handler.bind(this)}>
//     )
// }

//4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.
// If the startup has already implemented React, React-Routing is one of the best ways to go for a few reasons:
//- most startups have multiple tabs on pages and have lots of images and videos displaying their work , with react-routing users can naviggate through pages without refresing the entire page
//- "keeps the UI in sync with the URL"

//5. Can browsers read JSX? Why?

//JSX is a syntax extions and not actual JavaScript, meaing web browsers can't read it directly 
//Fro browsers to reads the jsx file it'll need to be translated into regular JS

//6. What is the significance of keys in React? 
//Keys help React identify which items have changed, been added, or removed

//7. What is the difference between Props and State?
//Props- an object of "arbitrary inputs a React function component accepts as the first argument"
//State- data that changes of time 

//8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 

// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )

// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })


//9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map() 
// Show 3 test runs, with at least 2 edge cases. 
let arr = [];
function properNames(names) {

    return arr.map(a => a.charAt(0).toUpperCase() + a.substr(1));
}


// 10. Given an array of strings, return a new array that only includes those that are 6 characters
// or fewer in length. Must use .filter()
// Show 3 test runs, with at least 2 edge cases. 


function smallWordsOnly(arr) {
    console.log(arr.filter(function (arr) {
        return arr.length < 6; // 
    }));
        // return arr.filter(arr) {
        //  return in.length < 6;
        //});
        //}
// } 
