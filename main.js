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