// *****
//  ****
//   ***
//    **
//     *

let str = '';

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <=5; j++) {
        if(j>=i){
            str +='*';
        } else {
            str +=" ";
        }
    }
    str +="\n";
}
console.log(str);