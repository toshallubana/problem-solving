
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

let str='';
let k = 0;
let n = 7;
for(let i = 1; i<=n; i++) {
    console.log(i,k)
    i <= (n+1) / 2 ? k++ : k--;
    for(let j = 1; j<=n; j++) {
        if(j >= 5 - k && j <= 3 + k ) {
            str += '*';
        } else {
            str +=' ';
        }
    }
    str +="\n";
}
console.log(str);