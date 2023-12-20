

//    1
//   12A
//  123AB
// 1234ABC
let str="";
let k = 0;
let n = 1;
for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <=7; j++) {
        if(j>=5-i && j<=3+i){
            if(j<=4) {
                str +=n;
                n++;
            } else {
                str += String.fromCharCode(65+k);
                k++;
            }
        } else {
            str+=" "
        }
    }
    k=0;
    n=1;
    str+="\n";
}
console.log(str);