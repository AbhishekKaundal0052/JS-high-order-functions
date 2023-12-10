const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
let modifiedFood = [];
function slice(one,two){
  for(let i=0;i<foods.length;i++){
    if(i>=one && i<two-1){
      modifiedFood.push(foods[i])
    }
    }
    console.log(modifiedFood);
    return modifiedFood;
}

// Progression 2:
function spliced(){
    foods.splice(2,0,"noodles", "icecream")
    return foods;
}

// Progression 3:
function isEven(number){
  return number%2==0 ? true:false; 
}
function isPrime(number) {
  let prime = true;
  if(number<=1){
    prime = false;
    return prime;
  }
  for (let i = 2; i <= number/2; i++) {
    if (number % i == 0) {
      prime = false;
      return prime;
    }
  }
  return prime;
}
function checkNumber(numberArray, operation){
let changedNumbers = numberArray.filter(operation)
  return changedNumbers;
}
// Progression 4:
function reject(numberArray){
  let changedNumber = [];
  numberArray.forEach(number=>{
    isPrime(number) ? null : changedNumber.push(number)
  })
  return changedNumber;
}

function nonPrime(numberArray){
  let result = reject(numberArray);
  return result;
}
// Progression 5:

const isEvenUsingLambda = (number=>{
  return (number%2==0) ? true: false;
})
// Progression 6:
function square(n){
  return n*n;
}
const findSquareOfNumbers = (myArray =>{
  let squaredNumbers = myArray.map(square);
  return squaredNumbers;
})

// Progression 7:

function multiply(myArray){
  return myArray.reduce((multi, number)=>
    multi*number
)}
function sumOfSquares(myArray){
  return myArray.map(square).reduce((sum,number)=>
  sum+number
  )}