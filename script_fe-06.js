let arr = [10, 25, 100];
let sum = 0;

for(let elem of arr){
    if(isNaN(elem) || elem === null){
        alert('Массив дожен состоят из цифр');
        break;
    }else{
        sum = sum + elem;
    }
}
console.log(sum);