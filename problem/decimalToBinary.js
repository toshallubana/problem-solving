// let n = 5;
// let bit = '';
// while(n!=0) {
//     bit+=n&1;
//     n = n>>1;
// }
// console.log(bit);


// decimal to binary
// let n = 213;
// let ans = 0, i = 0;
// let bit;
// while(n!=0) {
//     bit = n & 1;
//     ans = (bit * Math.pow(10,i)) + ans;
//     n = n >> 1;
//     i++;
// }
// console.log(ans);

// binary to decimal
// let n = 10101;
// let ans = 0, i = 0;
// while(n!=0) {
//     let digit = n % 10;
//     if(digit == 1) {
//         ans = ans + Math.pow(2,i);
//     }
//     n = Math.round(n / 10);
//     i++;
// }
// console.log(ans);


// reverse number
// let n = '34589';
// let ans = 0, i = 0;
// while(i < n.length) {
//     ans = (n[i] * Math.pow(10,i)) + ans;
//     i++;
// }
// console.log(ans);


// Arrays

// swap by 2
// const a = [1,3,2,7,11,8];

// for(let i = 0; i < a.length; i +=2) {
//     if(i + 1 < a.length) [a[i],a[i+1]] = [a[i+1], a[i]];
// }
// console.log(a);

// find unique

const a = [2,3,1,6,3,6,2];

let unique = [];

for(let i = 0; i < a.length; i++) {
    if(unique.includes(a[i])) {
        const index = unique.indexOf(a[i]);
        if (index > -1) {
            unique.splice(index, 1);
        }
    } else {
        unique.push(a[i]);
    }
}
console.log(unique);

// XOR
// a^a = 0

// optimize solution of XOR
let ans = 0;
for(let i = 0; i < a.length; i++) {
    ans = ans^a[i];
}
console.log(ans);