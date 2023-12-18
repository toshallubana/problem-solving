
//    1
//   232
//  34543
// 4567654
   

let str='';
let k = 4;
let n = 0;
for(let i = 1; i<=4; i++) {
    for(let j = 1; j<=7; j++) {
        if(j >= k && j <=  3 + i ) {
            j <= 4 ? n++: n--;
            str += n;
        } else {
            str +=' ';
        }
    }
    k--;
    str +="\n";
}
console.log(str);