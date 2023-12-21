//    1
//   212
//  32123
// 4321234

let str="";
let k = 1;
for(let i = 1; i <= 4; i++){
    k = i;
    for(let j = 1; j <= 7; j++) {
        if(j>=5-i && j<= 3+i) {
            str+=k
            j <4 ? k-- : k++;
        } else {
            str+=" ";
        }
    }
    str+="\n";
}
console.log(str);