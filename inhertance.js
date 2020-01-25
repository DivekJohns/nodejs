//Inhertance in  simple JS
// https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/
function Animal(dob, type){
this.dob = dob;
this.type = type;
}
Animal.prototype.talk = function(){
    console.log(this.sound);
}
 

function Dog(dob,type,name, location,sound){
    // here is the code that inherits Animal class using call
    Animal.call(this, dob, type)
    this.name = name;
    this.sound = sound;
    this.location = location;
}
// to make sure that all instances of Dog will have access to the methods
// on Animal.prototype.we should used our good friend Object.create here
Dog.prototype = Object.create(Animal.prototype);


let  shadow = new Dog('31/04/2017','Mammal','Shadow','Bangalore','Bow Bow...');
//Notice it gives you the Animal constructor even though shadow is a direct instance of Dog this is how to change it
console.log(shadow.constructor);

Dog.prototype.constructor = Dog;
shadow = new Dog('31/04/2017','Mammal','Shadow','Bangalore','Bow Bow...');
console.log(shadow.constructor);
console.log(shadow);
shadow.talk();


// ------------------ End of inheritance -----------//

//Explanation of Call 
let user = {
    firstName : 'Divek'
};

function callFunction(lastName){
    // this refers to current function scope
    return this.firstName + ' ' + lastName;
}
//call is used because the first parameter that call takes, is the context we want “this” to refer to
 console.log('Hello ' + callFunction.call(user,'John'));
 // ------------------ End of call -----------//

//Explanation of apply 
function applyFunction(lastName, age){
    // this refers to current function scope
    return this.firstName + ' ' + lastName + ' is ' + age +' year old';
}
//apply is used because the first parameter that call takesis the context.
// we want “this” to refer to but main difference is the way we can pass arguments. We can pass them as an array.
 console.log(applyFunction.apply(user,['john', '18']));
  // ------------------ End of call -----------//

//Explanation of bind 
function bindFunction(lastName, salary){
    // this refers to current function scope
    return this.firstName + ' ' + lastName + ' salary is ' + salary;
}

//bind works by returning a copy of the function, but with a different context.
 let newInstanceBind = bindFunction.bind(user);
 console.log(newInstanceBind('john', '18000'));


 //another way of using bind passing params intially
 let newInstanceBindAnother = bindFunction.bind(user,'s', '15000');
 console.log(newInstanceBindAnother());