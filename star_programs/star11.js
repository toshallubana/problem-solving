
//      *
//      **
//      ***
//      ****
//      ***
//      **
//      *

let str='';
let k = 0;
let n = 7;
for(let i = 1; i<=7; i++) {
    console.log(i,k)
    i <= (n+1) / 2 ? k++ : k--;
    for(let j = 1; j<=4; j++) {
        if(j <=k ) {
            str += '*';
        } else {
            str +=' ';
        }
    }
    str +="\n";
}
console.log(str);