var square = x => x*x;
console.log(square(9));

var user = {
    name: 'Ian',
    //ES6 does not allow use of 'this' or proper use of 'arguments' keyword in arrow functions...
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    //...but in ES6, methods can be written like below to get around that
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1,2,3);