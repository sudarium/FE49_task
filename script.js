let line = prompt('Введите строку');

let arr = line.split(' ');
let resultTemp =[];
let result = [];
console.log(arr);
for(i=0; i<arr.length; i++){
    resultTemp = (arr[i])[0].toUpperCase() + (arr[i]).slice(1);
    result[i] = resultTemp;
    }
let str = result.join(' ');
console.log(str);