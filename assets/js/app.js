

// Problem 4: Remove Duplicates 

function removeDuplicates (arr) {
    let numbers = [] ;
    for (let i = 0 ; i < arr.length ; i++) {
        if (!numbers.includes(arr[i])) {
            numbers.push(arr[i]);
        }
    }
    return numbers ;
}
let arr1 = [1, 2, 2, 3, 1, 4] ; 
console.log(removeDuplicates(arr1)); 


// Problem 5: Array Average  

function avgNumbers (arrNum) {
    if (arrNum.length === 0) return 0
    let result = 0
    for (let i = 0 ; i < arrNum.length ; i++) {
        result += arrNum[i];
    }
    return (result / arrNum.length).toFixed(2);
}
let arr2 = [10,20,30,40,50,60]
console.log(avgNumbers(arr2));  
let arr3 = []
console.log(avgNumbers(arr3));  

// Problem 12: Array Filter Function 
function myFilter (numbers ,callback) {
    newNmbers = [];
    for (let i = 0 ; i < numbers.length ; i++) {
        if (callback(numbers[i] , numbers)) {
            newNmbers.push(numbers[i]);
        }
    }
    return newNmbers;
}
let array = [1,2,3,4] 
let filtered = myFilter (array , function(x) {
    return x > 2 ;
} ) 
console.log(filtered);

// Problem 13: Palindrome Checker 


// Problem 14: FizzBuzz Array 

function makeArray (n) {
    let numbers = [] ;
    for (let i = 1 ; i <= n ; i++) {
        if ( i % 3 === 0 && i % 5 === 0 )  numbers.push('FizzBuzz')
        else if ( i % 3 === 0 ) numbers.push('Fizz')
        else if ( i % 5 === 0 ) numbers.push('Buzz')
        else numbers.push(i)
    }
    return numbers 
}
console.log(makeArray(15));