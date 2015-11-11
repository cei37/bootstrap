function Person(_person) {
    var _firstName = _person.firstName;
    var _lastName = _person.lastName;
    
    this.getFirstName = function() {
        return _firstName;
    }
    
    this.getLastName = function() {
        return _lastName;
    }
}

var per = new Person({firstName:'Vicente', lastName:'Villegas'});
console.log(per);
console.log(per.getFirstName());
console.log(per.getLastName());


function greet(whattoSay) {
    return function(name) {
        return function(other) {
            console.log(whattoSay + ' ' + name + ' ' + other );
        };
    };
}

greet('Hola')('Vicente')('Villegas');

var f = greet('yeah');
var s = f('si');
s('ok');