// 1
// 3*2
// 4*5*6
// 10*9*8*7
// 11*12*13*14*15

let str = "";
let n = 1;
for(let i = 1; i <= 5; i++) {
    let flag = 1;
    for(let j = 1; j <= 9; j++) {
        if(j<=2*i - 1) {
            if(flag == 1) {
                str+="#";
            } else {
                str+="*";
            }
            flag=1 - flag;
        } else {
            str+=" ";
        }
    }
    str+="\n";
}
console.log(str);