

//    ****
//   ****
//  ****
// ****

let str = "";
for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 8; j++) {
        if(j>=5-i && j<=8-i){
            str+="*";
        }else {
            str+=" ";
        }
    }
    str +="\n";
}
console.log(str);