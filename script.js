let num = prompt(' Input num');
if(isNaN(num) || num ===null){
    alert('inputed num is not a num or input Cancel');}
let sum = 0;
function getSum(num){
for(i=0; i<=num; i++){
    sum +=i;
    }
    console.log(sum);
}
getSum(num);