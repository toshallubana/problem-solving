// *******
// *     *
// * *** *
// * * * *
// * *** *
// *     *
// *******
let str = "";
for(let i = 1; i <= 7; i++){
    for(let j = 1; j<= 7; j++) {
        if((i==1 || i==7 || j==1 || j==7) || (i >=3 && i<=5 && j>=3 && j<=5) && (i == 3 || i==5 || j == 3 || j == 5)){
            str+="*";
        } else {
            str +=" ";
        }
    }
    str+="\n";
}
console.log(str);