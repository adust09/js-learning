var Animal = function () { };

Animal.prototype = {
    walk: function () {
        console.log("walk");
    }
};

var SuperAnimal = function () { };
SuperAnimal.prototype = {
    walk: function () {
        console.log("walk");
        console.log("walk");
    }
};

var Dog = function () { };
Dog.prototype = new Animal();
var d1 = new Dog();
d1.walk();

Dog.prototype = new SuperAnimal();
var d2 = new Dog();
d2.walk();
d1.wark();