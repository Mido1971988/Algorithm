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

function linearSearch(arr , n) {
    for(let i = 0; i < arr.length; i++){
        if(n == arr[i]) return i
    }
    return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6],10))
console.log(linearSearch([-5, 2, 10, 4, 6],6))
console.log(linearSearch([-5, 2, 10, 4, 6],20))
