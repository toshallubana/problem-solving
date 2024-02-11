// let n = 5;
// let bit = '';
// while(n!=0) {
//     bit+=n&1;
//     n = n>>1;
// }
// console.log(bit);

let n = 5;
let ans = 0, i = 0;
let bit;
while(n!=0) {
    bit = n & 1;
    ans = (bit * Math.pow(10,i)) + ans
    n = n >> 1;
    i++;
}
console.log(ans);
