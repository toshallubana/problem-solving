// const arr = [1, 5, 10, 19, 21, 90];
// const key = 21;

// let left = 0,
//   right = arr.length - 1,
//   mid = left + Math.round((right - left) / 2);
//   while(left <= right) {
//     if(arr[mid] == key) {
//         console.log(mid);
//     }
//     if(arr[mid] < key) {
//         left = mid + 1;
//     } else {
//         right = mid - 1;
//     }
//     mid = left + Math.round((right - left) / 2);
//   }
//   console.log(mid);


// find first occurence and last occurence

// const firstOccurence = (arr, key) => {
//     let left = 0, 
//         right = arr.length - 1, 
//         mid = left + Math.round((right - left) / 2);
//     let ans = -1;

//     while(left <= right) {
//         if(arr[mid] <= key) {
//             ans = mid;
//             right = mid - 1;
//         }
//         if(arr[mid] < key) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//         mid = left + Math.round((right - left) / 2);
//     }
//     return ans;
// }

// const lastOccurence = (arr, key) => {
//     let left = 0, right = arr.length - 1, mid = left + Math.round((right - left) / 2);
//     let ans = -1;

//     while(left <= right) {
//         if(arr[mid] <= key) {
//             ans = mid;
//             left = mid + 1;
//         }
//         if(arr[mid] < key) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//         mid = left + Math.round((right - left) / 2);
//     }
//     return ans;
// }

// const findOccurence = () => {
//     const arr = [1,3,3,3,4,5,6];
//     const key = 3;
//     const firstOccurenceResult = firstOccurence(arr, key);
//     const lastOccurenceResult = lastOccurence(arr, key);
//     console.log(firstOccurenceResult,lastOccurenceResult);
// }
// findOccurence();

// Peak index in Mountain array
// const arr = [3,4,5,1];
// let left = 0,
//     right = arr.length - 1,
//     mid = left + Math.round((right - left) / 2);

// while(left < right) {
//     if(arr[mid] < arr[mid + 1]) {
//         left = mid + 1;
//     } else {
//         right = mid;
//     }
//     mid = left + Math.round((right - left) / 2);
// }
// console.log(left);


// square root of number
// function sqr(n) {
//     let start = 0;
//     let end = n;
//     let mid = start + Math.round((end - start) / 2);
//     let ans = 0;
//     while(start<=end) {
//         let square = mid * mid;
//         console.log(square,n);
//         if(square == n) {
//             console.log(mid);
//             return mid;
//         }
    
//         if(square < n) {
//             ans = mid;
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//         mid = start + Math.round((end - start) / 2);
//     }
// }

// function morePrecision(n,precision, tempSol) {
//     let factor = 1;
//     let ans = tempSol;
//     for(let i = 0; i < precision; i++) {
//         factor = factor / 10;
//         for(let j = 0; j*j<n; j=j+factor) {
//             ans = j;
//         }
//     }
//     return ans;
// }

// let tempSol = sqr(8);
// console.log(morePrecision(8,3,tempSol));


// book allocation problem

