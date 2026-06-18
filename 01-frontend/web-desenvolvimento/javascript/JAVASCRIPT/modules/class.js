/*
class
*/
// const person = {
//      name: "Roberto",
//      age: 28,
//      talk: function() {
//            console.log( `Hello, my name is ${this.name}`)
//        }
//    }

class Person {
    constructor(name, age){
        console.log(`Hello, I'm ${name}`)
        this.name = name
        this.age = age
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person("Roberto", 48)
const newPerson1 = new Person("Ricardo", 45)
const newPerson2 = new Person("Renata", 36)
const newPerson3 = new Person("Rebeca", 25)
const newPerson4 = new Person("Rayssa", 21)


newPerson.talk()
newPerson1.talk()
newPerson2.talk()
newPerson3.talk()
newPerson4.talk()





