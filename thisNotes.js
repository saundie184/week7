//to refert o global scope


//in an object
var Car = {
  make: 'Volkswagen',
  model: 'Jetta',
  getType: function() {
    console.log(this.make + ' ' + this.model);
  }
};

// console.log(Car.getType());

var otherObject = {
  make: 'Epson',
  model: 'v1232',
  getType: Car.getType
};

//Explict Binding
// setTimeout(otherObject.getType, 0); //undefined undefined

var thirdMachine = {
  make: 'Osterizer',
  model: '123'
};

var wrapper = function(){
  return otherObject.getType.call(thirdMachine);
};

// setTimeout(wrapper, 10);
// otherObject.getType.call(thirdMachine);


var Value = function(value){
  this.foo = value;
};

var otherThing = {
  value: Value
};


//new bind this to new object
var myValue = new otherThing.value('test');
console.log(otherThing.foo);
console.log(myValue.foo);
