let animal = {
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    __proto__:animal
};

rabbit.walk = function() {
    console.log("Rabbit hops");
};

rabbit.walk();
animal.walk();




var employee1 = {firstName: "John", lastName: "Rodson"};
var employee2 = {firstName: "Jimmy", lastName: "Baily"};

function invite(greeting1, greeting2) {
    console.log(
        greeting1+ " " + this.firstName+ " " + this.lastName + "," + greeting2
    );
}

invite.call(employee1,"Hello", "how are you");
invite.apply(employee2,["Hello", "how are you"]);

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("hello","how are you");
inviteEmployee2("hello","how are you");