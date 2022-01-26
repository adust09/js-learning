var Member = function (firstName, lastName) {

    ifp(!(this instanceof Member)){
        return new Member(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
};

var m = Member('John', 'Doe');
console.log(m);
console.log(firstName);
console.log(m.firstName);


