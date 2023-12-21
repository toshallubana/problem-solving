// A
// BA
// CBA
// DCBA

let str="";
let k = 0;
for(let i = 1; i <= 4; i++){
    for(let j = 1; j <= 4; j++) {
        if(j<=i) {
            str+=String.fromCharCode(65+k);
            k--;
        } else {
            str+=" ";
        }
    }
    k=i;
    str+="\n";
}
console.log(str);