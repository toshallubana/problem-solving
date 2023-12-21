

let str = "";
let k = -1;
let n = -1;
for(let i = 1; i <= 21; i++) {
    i<12 ? k++ : k--;
    for(let j = 1; j <= 21; j++) {
        if(j>=12-k && j<=10+k) {
            j < 12 ? n++ : n--;
            str+=n%10;
        } else {
            str+=" "
        }
    }
    str+="\n";
}
console.log(str);