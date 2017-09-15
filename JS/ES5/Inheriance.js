(function() {

    var person = {
        sayName: function() {
            console.log('my name is ' + this.name);
        }
    };

    var bob = Object.create(person);
    bob.name = 'bob';

    var teacher = Object.create(person);

    teacher.saySomething = function() {
        this.sayName();
        console.log('who are you?');
    };

    var sam = Object.create(teacher);
    sam.name = 'sam';
    sam.saySomething();

    bob.sayName();

    console.log(teacher.isPrototypeOf(sam));
    console.log(Object.getPrototypeOf(sam) === teacher);
    console.log(person.isPrototypeOf(teacher));

    // multi level
    // person -> teacher -> sam
    console.log(person.isPrototypeOf(sam));

})();