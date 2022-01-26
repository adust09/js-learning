var Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName=lastName;
};

var mem = new Member('John', 'Doe');
mem.getName = function(){
    return this.firstName + " " + this.lastName;
}