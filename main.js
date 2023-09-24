// ----------Fibonacci sequence
// we want to create function like Fibonacci sequence which is (each number is the sum of the two preceding ones)

// my solution
// function fibonacci(n){
//     let arr = [0 , 1] ; 
//     if ( n < 2 ) return "less than 2";
//     if ( n === 2 ) return arr ;
    
//     for(let i = 0 ; i < n ; i++){
//         if(i >= 2) {
//             arr.push(arr[i-1] + arr[i-2])
//         }   
//     }
//     return arr
// }

// console.log(fibonacci(2))//[0,1]
// console.log(fibonacci(3))//[0,1,1]
// console.log(fibonacci(7))// [0,1,1,2,3,5,8]

// Vishwas Solution 
// function fibonacci(n){
//     let arr = [0 , 1] ; 
//     for(let i = 2 ; i < n ; i++){
//         arr[i] = arr[i-1] + arr[i-2]   
//     }
//     return arr
// }

// console.log(fibonacci(2))//[0,1]
// console.log(fibonacci(3))//[0,1,1]
// console.log(fibonacci(7))// [0,1,1,2,3,5,8]

// ------- Factorial of a number
// Problem - Give an integer 'n', find the factorial of that integer

// my solution 
// function factorial(n){
//     for(let i = n - 1 ; i > 0 ; i--){
//         n = n * i
//     }
//     if (n === 0) return 1;
//     return n;
// }

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(4))
// console.log(factorial(5))

// Vishwas Solution
// function factorial(n){
//     let result = 1;
//     for(let i = 2 ; i <= n ; i++){
//         result = result * i
//     }
//     return result;
// }

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(4))
// console.log(factorial(5))

// ---- Prime Number
// Problem - Give a natural number 'n', determine if the number is prime or not

// my solution
// function isPrime(n){
//     if ( n < 2) return false
//     for(let i  = 2 ; i < n ; i++){
//         if(n % i === 0) return false
//     }
//     return true
// }

// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))

// Vishwas Solution
// function isPrime(n){
//     if ( n < 2) return false
//     for(let i  = 2 ; i < n ; i++){
//         if(n % i === 0) return false
//     }
//     return true
// }

// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))

// optimized solution
// function isPrime(n){
//     if ( n < 2) return false
//     for(let i  = 2 ; i <= Math.sqrt(n) ; i++){
//         if(n % i === 0) return false
//     }
//     return true
// }

// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))

//-------Power of Two 
//Problem - Give a positive integer 'n', determine if the number is a power of 2 or not

// my solution 
// function isPowerOfTwo(n){
//     if(  n % 2 === 0 || n === 1) return true
//     return false
// }

// console.log(isPowerOfTwo(1)) // true
// console.log(isPowerOfTwo(2)) // true
// console.log(isPowerOfTwo(5)) // false
// console.log(isPowerOfTwo(8)) // true

// Vishwas Solution
// function isPowerOfTwo(n){
//     if(n < 1) return false
//     while(n>1){
//         if (n%2 !== 0) return false
//         n = n /2
//     }
//     return true
// }

// console.log(isPowerOfTwo(1)) // true
// console.log(isPowerOfTwo(2)) // true
// console.log(isPowerOfTwo(5)) // false
// console.log(isPowerOfTwo(8)) // true

// optimized solution ( Bitwise operator) ( see video () at 6:04 to understand)
// function isPowerOfTwoBitWise(n){
//     if(n < 1) return false
//     return ( n & ( n-1))  === 0
// }

// console.log(isPowerOfTwoBitWise(1)) // true
// console.log(isPowerOfTwoBitWise(2)) // true
// console.log(isPowerOfTwoBitWise(5)) // false
// console.log(isPowerOfTwoBitWise(8)) // true

//---------Recursive Fibonacci sequence 
// Problem - Give a number 'n', find the nth element of the Fibonacci sequence

// my solution ( but this is not Recursive solution)
// function recursiveFibonacci(n){
//     let arr = [0 , 1] ; 
//     for(let i = 2 ; i <= n ; i++){
//         arr[i] = arr[i-1] + arr[i-2]   
//     }
//     return arr[n]
// }

// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(6))

// Vishwas Solution
// function recursiveFibonacci(n){
//     if(n < 2 ) return n // Base case
//     return recursiveFibonacci(n-1) + recursiveFibonacci( n-2 ) // Recursive Step
// }

// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(6))

// -------Recursive Factorial of a number
// Problem - Give an integer 'n', find the factorial of that integer

// function recursiveFactorial(n){
//     if(n === 0 ) return 1; // base case
//     return n * recursiveFactorial(n - 1); // Recursive Step
// }

// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(1))
// console.log(recursiveFactorial(5))

//--------- Linear Search
// Problem - Given an array of 'n' elements and a target element 't', 
//find the index of 't' in the array. Return -1 if the target element is not found.

// function linearSearch(arr , n) {
//     for(let i = 0; i < arr.length; i++){
//         if(n == arr[i]) return i
//     }
//     return -1
// }

// console.log(linearSearch([-5, 2, 10, 4, 6],10))
// console.log(linearSearch([-5, 2, 10, 4, 6],6))
// console.log(linearSearch([-5, 2, 10, 4, 6],20))

//---------Binary Search 
// Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. 
// Return -1 if the target element is not found.

// My solution ( but not 100% Binary search because first and second half also should be divided)

// function binarySearch(arr , n) {
//     let sorrtedArr = arr.sort((a,b)=> a - b)
//     if(arr.length === 0 ) return -1
//     if(arr.length % 2 !== 0) {
//         const middleIndex = Math.floor(arr.length / 2)
//         const firstHalf = sorrtedArr.slice(0,middleIndex)
//         const secondHalf = sorrtedArr.slice(middleIndex + 1)
//         if(sorrtedArr[middleIndex] === n ) return sorrtedArr[middleIndex]
//         if( n < sorrtedArr[middleIndex]) {
//             for(let i = 0; i < firstHalf.length; i++ ){
//                 if(firstHalf[i] === n ) return `${firstHalf[i]} from First Half`
//             }
//         } else if(n > sorrtedArr[middleIndex]){
//             for(let i = 0; i < secondHalf.length; i++ ){
//                 if(secondHalf[i] === n ) return `${secondHalf[i]} from second Half`
//             }
//         }
//     }
//     return -1
// }

// console.log(binarySearch([],10))
// console.log(binarySearch([-5, 2, 10, 4, 6],10))
// console.log(binarySearch([-5, 2, 10, 4, 6],4))
// console.log(binarySearch([-5, 2, 10, 4, 6],-5))
// console.log(binarySearch([-5, 2, 10, 4, 6],20))

// Vishwas Solution
// function binarySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//             if (target === arr[middleIndex]) {
//             return middleIndex
//         }
//         if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
// console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
// console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1

//---------Recursive Binary Search

// my solution
// function recursiveBinarySearch(arr, target , lIndex  , rIndex) {
//     let leftIndex = lIndex || 0
//     let rightIndex = rIndex || arr.length - 1

//     if(leftIndex > rightIndex) return -1 // base case 

//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (target === arr[middleIndex]) {
//             return middleIndex
//         }
//         if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1
//         } else if(target > arr[middleIndex]) {
//             leftIndex =  middleIndex + 1
//         }
//     return recursiveBinarySearch(arr , target , leftIndex , rightIndex ) // Recursive Step
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 2)) // 1
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], -20)) // -1

// Vishwas Solution
// function recursiveBinarySearch(arr, target) {
//         return search(arr, target, 0, arr.length - 1)
//     }
    
//     function search(arr, target, leftIndex, rightIndex) {
//         if (leftIndex > rightIndex) {
//             return -1
//         }
    
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (target === arr[middleIndex]) {
//             return middleIndex
//         }
    
//         if (target < arr[middleIndex]) {
//             return search(arr, target, leftIndex, middleIndex - 1)
//         } else {
//             return search(arr, target, middleIndex + 1, rightIndex)
//         }
// }

//   console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
//   console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
//   console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1

//---------Bubble Sort 

// my solution
// function bubbleSort(arr){
//     let notSorted = true; 
//     while(notSorted){
//         for(let i = 0; i < arr.length - 1; i++){
//             notSorted = false;
//             if(arr[i] > arr[i+1]) {
//                 [arr[i], arr[i+1]] = [arr[i+1] , arr[i]];
//                 notSorted = true;
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([-6,20,8,-2,4]))

// Vishwas Solution
// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//             let temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//             swapped = true
//             }
//         }
//     } while (swapped)
// }

// const arr = [8, 20, -2, 4, -6]
// bubbleSort(arr)
//   console.log(arr) // [-6, -2, 4, 8, 20]

//---------------Insertion Sorting

// my solution 

// function insertSort(arr){
//     for(let i = 0; i < arr.length-1; i++){
//         let nti = arr[i+1];
//         for(let x = i; x >= 0; x--){
//             if(arr[x] > nti){
//                     arr[x + 1] = arr[x] 
//                     arr[x] = nti
//                     console.log(arr)
//                 }
//             }
//         }
//     return arr
// }


// console.log(insertSort([5,2,3,4,1]))
// console.log(insertSort([5,4,3,2,1]))
// console.log(insertSort([-6, 20, 8, -2, 4]))

// Vishwas Solution
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let numberToInsert = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > numberToInsert) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//             console.log(arr)
//         }
//         arr[j + 1] = numberToInsert
//     }
// }

// const arr = [8, 20, -2, 4, -6]
// const arr = [5,4,3,2,1]
// insertionSort(arr)
// console.log(arr) // [-6, -2, 4, 8, 20]


//--------------quick Sorting ( recursive) 

// function quickSort(arr){
//     if(arr.length < 2) return arr; // base case
//     const pivot = arr.pop();
//     let leftArr = [];
//     let rightArr = [];
//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }
//     return [ ...quickSort(leftArr) , pivot , ...quickSort(rightArr) ] // recursive step
// }

// console.log(quickSort([-6, 20, 8, -2, 4]))


//-----------Merge Sorting 

function mergesort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergesort(leftArr), mergesort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
}

const arr = [8, 20, -2, 4, -6]
console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]
