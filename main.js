// function v_1
function string (arr, str) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j < restrictedList.length; j++) {
      if (arr[i] === restrictedList[j]) {
        arr.splice(i, 1);
        i--;
        arr.toString();
      }
    } 
  } console.log(arr.join(''));
}

restrictedList = ['!', 'g', '_', '/']
console.log(restrictedList);

console.log('-----------------------------');

let str1 = 'dk!hjytgu_///ng*/';
console.log(str1);

let arr1 = str1.split('');

res1 = string (arr1, str1);

console.log('-----------------------------');

let str2 = 'vbfbv!!!f_rg*/e/*e/g/eo3u3if';
console.log(str2);

let arr2 = str2.split('');
res2 = string (arr2, str2);

console.log('-----------------------------');

let str3 = 'ndvgjhf!/k_k_k/K';
console.log(str3);

let arr3 = str3.split('');
res3 = string (arr3, str3);



// long v_2
// restrictedList = ['!', 'g', '_', '/']
// console.log(restrictedList);

// console.log('-----------------------------');

// let str1 = 'dk!hjytgu_///ng*/';
// console.log(str1);

// let arr1 = str1.split('');
// // console.log(arr1);

// for (let i = 0; i <= arr1.length - 1; i++) {
//   for (let j = 0; j < restrictedList.length; j++) {
//     if (arr1[i] === restrictedList[j]) {
//       arr1.splice(i, 1);
//       i--;
//       arr1.toString();
//     }
//   } 
// } console.log(arr1.join(''));

// console.log('-----------------------------');

// let str2 = 'vbfbv!!!f_rg*/e/*e/g/eo3u3if';
// console.log(str2);

// let arr2 = str2.split('');
// // console.log(arr2);

// for (let i = 0; i <= arr2.length - 1; i++) {
//   for (let j = 0; j < restrictedList.length; j++) {
//     if (arr2[i] === restrictedList[j]) {
//       arr2.splice(i, 1);
//       i--;
//       arr2.toString();
//     }
//   } 
// } console.log(arr2.join(''));

// console.log('-----------------------------');

// let str3 = 'ndvgjhf!/k_k_k/K';
// console.log(str3);

// let arr3 = str3.split('');
// // console.log(arr3);
// for (let i = 0; i <= arr3.length - 1; i++) {
//   for (let j = 0; j < restrictedList.length; j++) {
//     if (arr3[i] === restrictedList[j]) {
//       arr3.splice(i, 1);
//       i--;
//       arr3.toString();
//     }
//   } 
// } console.log(arr3.join(''));
