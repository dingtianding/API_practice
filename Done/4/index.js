// Using the Github API, fetch repositories from the Google organization.
// Given the first 100 results (whatever order doesn't matter, at least not at first)
// Return an object of all the language values and the number of results of each language.

// Example output: (Though these values may not be accurate to what you get)
// {​
// Java: 10,
// Ruby: 3,
// null: 8,
// Python: 15,
// JavaScript: 17,
//'C++': 10,
// TeX: 1,
// Go: 5,
// Dart: 17,
// C: 5,
// HTML: 2,
// Shell: 1,
//'Common Lisp': 1,
//'Objective-C': 1,
//MATLAB: 1,
//CSS: 1,
//'Vim script': 2
// }​

// const fetch = require('node-fetch');

async function main() {
    try {
        await fetch("https://api.github.com/or11gs/google/repos?per_page=100"); // try the fetch action
    } catch (error){
        console.error(error,"Fetch error!") //added simple error handling
        return
    } finally { 
        const result = await fetch("https://api.github.com/orgs/google/repos?per_page=100") // added Query parameters of 100 results
        const res = await result.json() //parse into usable array
        let output = {} //creates object
        res.forEach(repo => { //iterates through all results
            let lang = repo.language //DRY code
            if (lang in output){ // if repo is in Object
                output[lang] += 1 //increment that language key's value by 1
            } else {
                output[lang] = 1 //if not, then create the key/value pair in the object
            }
    });
        console.log(output);// return the output object
    }
};

main();