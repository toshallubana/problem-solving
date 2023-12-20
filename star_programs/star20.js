

//    A1
//   AB12
//  ABC123
// ABCD1234

let str = "";
let k = 0;
let n = 1;
for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 8; j++){
        if(j>=5-i && j<=4+i) {
            if(j <= 4) {
                str +=String.fromCharCode(65 + k);
                k++;
            } else {
                str += n;
                n++;
            }
        } else {
            str +=" ";
        }
    }
    k=0;
    n=1;
    str +="\n"
}
console.log(str);