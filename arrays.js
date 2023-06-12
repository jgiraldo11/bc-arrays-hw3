console.log("-------------Question 1---------------")
// Object Constructor 2 parameters
// return an object containing all of arguements
// Bonus: make another function which adds the object to the end of an array

function objCon(a,b) {
    return {a, b}
}
const numCon = objCon("strawberry","grapes");
console.log(numCon)

const myArray = ["twix", "snickers", "reese's"];


//Bonus: make another function which adds the object to the end of an array
function objCon2(orange) {
    
    myArray.push(orange);
}

const food = objCon2 (numCon);
console.log(myArray);
    

console.log("-------------Question 2---------------")
// Find Nth Element
//parameter: number N
//return the Nth element of an array - Not the value at index N
// Bonus: make the function work with any array

function numEle(n) {
    const amountN = myArray[n];
    return amountN
}

const numIndex = numEle(1);





