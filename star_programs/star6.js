//         *
//       *   *
//     *   *   *
//   *   *   *   *
// *   *   *   *   *

let str='';
let flag;
for(let i = 1; i<=5; i++) {
    flag = true;
    for(let j = 1; j<=9; j++) {
        if(j >= 6-i && j<= 4 + i && flag){
            str +="*";
            flag=false;
        } else {
            str +=' ';
            flag=true;
        }
    }
    str +="\n";
}
console.log(str);