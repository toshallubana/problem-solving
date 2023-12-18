// ABCDCBA
// ABC CBA
// AB   BA
// A     A

let str='';
for(let i = 1; i<=4; i++) {
    let num = 0;
    for(let j = 1; j<=7; j++) {
        if(j <=5-i || j>=3+i){
            str +=String.fromCharCode(65+num);
            j < 4 ? num++ : num--;
        } else {
            str +=' ';
            j ==4 && num--;
        }
    }
    str +="\n";
}
console.log(str);