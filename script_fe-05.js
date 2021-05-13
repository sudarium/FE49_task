let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,]; 

let array_size = 3;

let sliced_array = [];

function getArr(array, array_size){
for (let i = 0; i <array.length; i += array_size) {
    sliced_array.push(array.slice(i, i + array_size));
}

console.log(sliced_array);
}
getArr(array, array_size);