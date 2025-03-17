// 1. Reverse of a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); 


// 2. String is palindrome
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));   

// 3. maximum number in array
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 1, 4, 1, 5, 9])); 

// 4. Remove duplicates from an array
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

// 5. factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

// 6. Fibonacci series upto n terms
function fibonacci(n) {
    if (n <= 0) return []; 
    if (n === 1) return [0]; 
    if (n === 2) return [0, 1]; 

    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
}

console.log(fibonacci(5));

// 7. check if two strings are anagrams.
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false; 

    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(areAnagrams("listen", "silent")); 

// 8. second largest number in an array.
function secondLargest(arr) {
    let uniqueSortedArr = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSortedArr.length < 2 ? null : uniqueSortedArr[1];
}
console.log(secondLargest([10, 20, 4, 45, 99])); 

// 10. count the occurrences of each character in a string.
function countOccurrences(str) {
    return str.split("").reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}
console.log(countOccurrences("hello")); 

// OUTPUT BASED
// QUESTION 1
console.log(1 + "2" + "2");  //"122"
console.log(1 + +"2" + "2"); //"32"
console.log(1 + -"1" + "2"); //"02"
console.log(+"1" + "1" + "2");//"112"
console.log("A" - "B" + "2");//"NAN2"
console.log("A" - "B" + 2);//NaN

// QUESTION 2
console.log(0.1 + 0.2 === 0.3);//False

// QUESTION 3
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

// QUESTION 4
function foo() {
    return
    {
        name: "John"
    };
}
console.log(foo()); //undefined

// QUESTION 5
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(sum(2)(3)(4)); // 9

// QUESTION 8
console.log(typeof NaN); //number

// QUESTION 9
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));          // true
console.log(isEmpty({ key: "value" })); // false 

// QUESTION 10
function test() {
    console.log(a);
    var a = 5;
    console.log(a);
}
test();//5