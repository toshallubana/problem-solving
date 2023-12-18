
// *******
//  *****
//   ***
//    *
   

let str='';
let k = 7;
let n = 7;
for(let i = 1; i<=4; i++) {
    console.log(i,k)
    i >= 2 && k--;
    for(let j = 1; j<=7; j++) {
        if(j >=i && j <= k ) {
            str += '*';
        } else {
            str +=' ';
        }
    }
    str +="\n";
}
console.log(str);