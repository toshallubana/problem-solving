// *
// **
// ***
// ****
// *****
let str='';
for(let i = 0; i<=4; i++) {
    for(let j = 0; j<=4; j++) {
        if(j <= i){
            str +="*";
        } else {
            str +=' ';
        }
        
    }
    str +="\n";
}
console.log(str);