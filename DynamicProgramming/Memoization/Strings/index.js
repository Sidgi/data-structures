// all imports 
import { allConstruct } from "./Combinatoric_problem/allConstruct.js";
import { countConstruct, countConstructAlvin, countConstructMemoized } from "./Combinatoric_problem/countConstruct.js";
import { canConstruct, canConstructAlvin, canConstructAlvinMemoized, canConstructMemoized } from "./Decision_problem/canConstruct.js";

// Test decision problem can construct my algo

// console.log(canConstruct('', ['cat','dog','pig'])); // true
// console.log(canConstruct('abcdef', ['ab','abc','cd','def','abcd', 'ef' ])); // true
// console.log(canConstruct('sobka', ['s','k','ob','a','abcd' ])); // true
// console.log(canConstruct('sobka', ['s','k','ob','a','abcd' ])); // true
// // console.log(canConstructMemoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee', 'eeeee', 'eeeeee' ])); // false
// console.log(canConstruct('skateboard', ['ska','sk','boar'])); // false


// // Test decision problem can construct Alvin's algo

// console.log(canConstructAlvin('', ['cat','dog','pig'])); // true
// console.log(canConstructAlvin('abcdef', ['ab','abc','cd','def','abcd' ])); // true
// console.log(canConstructAlvin('sobka', ['s','k','ob','a','abcd' ])); // true
// // console.log(canConstructAlvinMemoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee', 'eeeee', 'eeeeee' ])); // false
// console.log(canConstructAlvin('skateboard', ['ska','sk','boar'])); // false


// // countConstruct my own solution if any and Alvin's + Memoized for both
// console.log(countConstruct('', ['cat','dog','pig'])); // true
// console.log(countConstruct('abcdef', ['ab','abc','cd','def','abcd', 'ef' ])); // true
// console.log(countConstruct('sobka', ['s','k','ob','a','abcd' ])); // true
// console.log(countConstructMemoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee', 'eeeee', 'eeeeee' ])); // false

// // Alvins' 

// console.log(countConstructAlvin('', ['cat','dog','pig'])); // true
// console.log(countConstructAlvin('abcdef', ['ab','abc','cd','def','abcd', 'ef' ])); // true
// console.log(countConstructAlvin('sobka', ['s','k','ob','a','abcd' ])); // true


console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd', 'ef' ])); 


