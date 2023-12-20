
//    A
//   ABA
//  ABCBA
// ABCDCBA
let str = "";
let k = 0;
for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 7; j++){
        if(j>=5-i && j<=3+i) {
            str +=String.fromCharCode(65 + k);
            j<4 ? k++ : k--;
        } else {
            str +=" ";
        }
    }
    k=0;
    str +="\n"
}
console.log(str);