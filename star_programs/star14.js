
// 6543210
// 543210
// 43210
// 3210
// 210
// 10
// 0
   

let str='';
let k = 7;
let n = 6;
for(let i = 1; i<=7; i++) {
    for(let j = 1; j<=7; j++) {
        if(j <= k ) {
            str += n;
            n--;
        } else {
            str +=' ';
        }
    }
    k--;
    n=k-1
    str +="\n";
}
console.log(str);