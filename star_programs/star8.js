//    1
//   121
//  12321
// 1234321

let str='';
for(let i = 1; i<=4; i++) {
    let num = 1;
    for(let j = 1; j<=7; j++) {
        if(j >=5-i && j<=3+i){
            str +=num;
            j < 4 ? num++ : num--;
        } else {
            str +=' ';
        }
    }
    str +="\n";
}
console.log(str);