
//Slove fizzbuzz and solution is correct but dosent pass test case
// function fizzBuzz(n) {
//     // Write your code here
//     for(let i = 1; i<=100; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if(i % 3 === 0 && !(i % 5 === 0)) {
//            console.log("Fizz"); 
//         }
//         else if(!(i % 5 === 0) && !(i % 3 === 0)) {
//            console.log(i); 
//         }
//     }

// }

// fizzBuzz();

// javascript given an array of numbers find the index of the smallest array element (the pivot) for which the sums of all the element to the left and to the right are equal, the array may not be recorded

function balancedSum(arr, n) {
    // Write your code here
    
    // let arr = [1, 4, 2, 5];
    // let n = arr.length;
    
    let sumOfLeft = Array(n) .fill(0);
    sumOfLeft[0] = arr[0];
    for(let i = 1; i < n ; i++) {
        sumOfLeft[i] = sumOfLeft[i - 1] + arr[i]; 
    }
    
    let sumOfRight = Array(n) .fill(0);
    sumOfRight[n - 1] = arr[n - 1];
    for(let i = n -2; i >= 0 ; i--) {
        sumOfRight[i] = sumOfRight[i + 1] + arr[i]; 
    }
    
    //secure the point of equality
    for(i = 1; i < n - 1; i++) {
        if(sumOfLeft[i] == sumOfRight) {
            return arr[1];
        }
    }
}

balancedSum();
