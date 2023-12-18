//     1
//    12
//   123
//  1234
// 12345
//  1234
//   123
//    12
//     1


let str='';
let k = 0;
let n = 1;
for(let i = 1; i<=9; i++) {
    i<6 ? k++ : k--;
    for(let j = 1; j<=5; j++) {
        if(j >= 6-k ) {
            str += n;
            n++;
        } else {
            str +=' ';
        }
    }
    n=1
    str +="\n";
}
console.log(str);