// \*****/
// *\***/*
// **\*/**
// ***/***
// **/*\**
// */***\*
// /*****\


let str='';
let k = 0;
let n = 1;
for(let i = 1; i<=7; i++) {
    for(let j = 1; j<=7; j++) {
        if(j == i || j == 8 - i ) {
            if(i==8-j) {
                str +="/";
            } else {
                str +="\\";
            }
        } else {
            str +='*';
        }
    }
    str +="\n";
}
console.log(str);