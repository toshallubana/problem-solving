// 1
// 10
// 101
// 1010
// 10101
// 101010
let str = '';
let k = 1;
for(let i = 1; i <=6; i++) {
    let flag = true;
    for(let j = 1; j <=6; j++) {
        if(j<=i) {
            if(flag) {
                str +=1;
                flag=false;
            } else {
                str+=0
                flag=true;
            }
        } else {
            str +=" "
        }
    }
    str+="\n"
}
console.log(str);