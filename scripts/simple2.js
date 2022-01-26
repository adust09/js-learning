var Member = function (firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.getName = function () {
        return this.firstName + " " + this.lastName;
    }
};

var mem = new Member("John", "Doe");
console.log(mem.getName());