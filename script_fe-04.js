let keys = ['a', 'b', 'c', 'd', 'e', 'f'];
let values = [1, 2, 3, 4, 5];
let obj = {};

function getObj(keys, values){
    for (let i = 0; i <= keys.length; i++) {
	    obj[keys[i]] = values[i]
}

console.log(obj);
}
getObj(keys, values);