let users = [{name:'Ivan', age: 18}, {name:'Sveta', age: 21}, {name:'Roma', age: 2}];
let adult = [];

for(let user of users){
    if(user.age >=18){
    adult.push(user)}
}
console.log(adult);