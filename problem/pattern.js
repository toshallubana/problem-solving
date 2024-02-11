// 123
// 123
// 123

// let i = 1;
// let n = 3;
// let str = ''
// while(i <=n) {
//     let j = 1;
//     while(j <=n ){
//         str+=n-j+1
//         j++;
//     }
//     str+='\n';
//     i++;
// }
// console.log(str);


// 123
// 456
// 789

// let i = 1, n = 3, str = '', count = 1;
// while(i <=n ){
//     let j = 1
//     while(j<=n) {
//         str+=count;
//         count++;
//         j++;
//     }
//     str+='\n';
//     i++;
// }
// console.log(str);


// *
// **
// ***
// ****

// let i = 1, n = 4, str = '';

// while(i <= n) {
//     let j = 1;
//     while(j <= i ) {
//         str+='*';
//         j++; 
//     }
//     str+="\n";
//     i++;
// }
// console.log(str);

// 1
// 22
// 333
// 4444

// let i = 1, n = 4, str = '';

// while(i <= n) {
//     let j = 1;
//     while(j <= i ) {
//         str+=i;
//         j++; 
//     }
//     str+="\n";
//     i++;
// }
// console.log(str);


// 1
// 12
// 123
// 1234

// let i = 1, n = 4, str = '';

// while(i <= n) {
//     let j = 1;
//     while(j <= i ) {
//         str+=i;
//         j++; 
//     }
//     str+="\n";
//     i++;
// }
// console.log(str);

// 1
// 23
// 456
// 78910

// let i = 1, n = 4, str = '', count = 1;
// while(i <= n) {
//     let j = 1;
//     while(j <= i ) {
//         str+=count;
//         count++;
//         j++; 
//     }
//     str+="\n";
//     i++;
// }
// console.log(str);

// 1
// 23
// 345
// 4567

// let i = 1, n = 4, str = '', count = 1;
// while(i <= n) {
//     let j = 1;
//     while(j <= i ) {
//         str+=i+j-1;j++; 
//     }
//     str+="\n";i++;
// }
// console.log(str);


// 1
// 21
// 321
// 4321

// let i = 1, n = 4, str = '', count = 1;
// while(i <= n) {
//     let j = 1;
//     while(j <= i ) {
//         str+=i-j+1;j++; 
//     }
//     str+="\n";i++;
// }
// console.log(str);

// AAA
// BBB
// CCC

// let i = 1, n = 3, str = '', count = 1;
// while(i <= n) {
//     let j = 1;
//     while(j <= n ) {
//         str+=String.fromCharCode(64+i);j++;
//     }
//     str+="\n";i++;
// }
// console.log(str);

// ABC
// ABC
// ABC

// let i = 1, n = 3, str = '', count = 1;
// while(i <= n) {
//     let j = 1;
//     while(j <= n ) {
//         str+=String.fromCharCode(64+count);count++;j++;
//     }
//     str+="\n";i++;
// }
// console.log(str);


// ABC
// BCD
// CDE

// let i = 1, n = 3, str = '', count = 1;
// while(i <= n) {
//     let j = 1;
//     while(j <= n ) {
//         str+=String.fromCharCode(64+i+j-1);j++;
//     }
//     str+="\n";i++;
// }
// console.log(str);

// A
// BB
// CCC

// let i = 1, n = 3, str = '', count = 1;
// while(i <= n) {
//     let j = 1;
//     while(j <= i ) {
//         str+=String.fromCharCode(64+i);j++;
//     }
//     str+="\n";i++;
// }
// console.log(str);


// A
// BC
// DEF
// GHIJ

// let i = 1, n = 4, str = '', count = 1;
// while(i <= n) {
//     let j = 1;
//     while(j <= i ) {
//         str+=String.fromCharCode(64+count);
//         count++;
//         j++;
//     }
//     str+="\n";i++;
// }
// console.log(str);


// A
// BC
// CDE
// DEFG

// let i = 1, n = 4, str = '';
// while(i <= n) {
//     let j = 1;
//     let k = i;
//     while(j <= i ) {
//         str+=String.fromCharCode(64+k);
//         k++;
//         j++;
//     }
//     str+="\n";i++;
// }
// console.log(str);



// D
// CD
// BCD
// ABCD

// let i = 1, n = 10, str = '';
// while(i <= n) {
//     let j = 1;
//     let k = n+1;
//     while(j <= i ) {
//         str+=String.fromCharCode(64+k-i);
//         k++;
//         j++;
//     }
//     str+="\n";i++;
// }
// console.log(str);


//    *
//   **
//  ***
// ****

// let i = 1, n = 4, str = '';
// while(i <= n) {
//     let j = 1;
//     let space = n - i;
//     while(space) {
//         str+=' ';
//         space--;
//     }
//     while(j<=i ) {
//         str+='*';
//         j++;
//     }
//     str+="\n";i++;
// }
// console.log(str);

// 1111
//  222
//   33
//    4

// let str = '';
// for(let i = 1; i <=5; i++) {
//     for(let j = 1; j <=5; j++) {
//         if(j<=i ) {
//             str+=' ';
//         } else {
//             str+=i;
//         }
//     }
//     str+='\n';
// }
// console.log(str);

//    1
//   22
//  333
// 4444

// let str = '';
// for(let i = 1; i < 5; i++) {
//     for(let j = 1; j < 5; j++) {
//         if(j<=4-i ) {
//             str+=' ';
//         } else {
//             str+=i;
//         }
//     }
//     str+='\n';
// }
// console.log(str);

// 1234
//  234
//   34
//    4

// let str = '';
// for(let i = 1; i <=5; i++) {
//     for(let j = 1; j <=5; j++) {
//         if(j>=i ) {
//             str+=i;
//         } else {
//             str+=' ';
//         }
//     }
//     str+='\n';
// }
// console.log(str);


//     1
//    23
//   456
//  78910

// let str = '';    let k = 1;
// for(let i = 1; i <=4; i++) {
//     for(let j = 1; j <=4; j++) {
//         if(j>=5-i ) {
//             str+=k;
//             k++;
//         } else {
//             str+=' ';
//         }
//     }
//     str+='\n';
// }
// console.log(str);


//    1
//   121
//  12321
// 1234321

// let str = '';
// for(let i = 1; i <=4; i++) {
//     let k = 1;
//     for(let j = 1; j <=7; j++) {
//         if(j>=5-i && j<=3+i ) {
//             str+=k;
//             j>=4 ? k-- : k++;
//         } else {
//             str+=' ';
//         }
//     }
//     str+='\n';
// }
// console.log(str);

// let i = 1, n = 4, str = '';

// while(i<=n) {

//     // print space
//     let space = n - i;
//     while(space) {
//         str+=" ";
//         space = space - 1;
//     }

//     // print 1st triangle
//     let j = 1;
//     while(j <= i) {
//         str+=j;
//         j++;
//     }

//     // print second triangle
//     let start = i - 1;
//     while(start) {
//         str+=start;
//         start--;
//     }
//     str+='\n';
//     i++
// }
// console.log(str);


// 1234554321
// 1234**4321
// 123****321
// 12******21
// 1********1
// let str = '';
// for(let i = 1; i <= 5; i++) {
//     let k = 1;
//     for(let j = 1; j <= 10; j++) {
//         if(j==6)  k--;
//         if(j <= 6-i || j >=5+i) {
//             str+=k;
//             j <= 5 ? k++ : k--;
//         } else {
//             str+='*';
//         }
//     }
//     str+='\n';
// }
// console.log(str);

