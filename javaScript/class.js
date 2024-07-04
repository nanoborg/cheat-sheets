console.log('class exercise')

class Person {
    constructor(name, age) {
        this.age = age,
        this.name = name
    }

    getName(personName) {
        if (personName !== this.name) {
            return personName
        } else {
            
            return this.name
        }
    }
}

// let p1 = new Person('Tim', 37)

// console.log(p1.getName('James'))

class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    getName() {
        return this.name
    }

    getAge(userAge) {
        return userAge
    }
}

p1 = new Person('Tim', 37)

// console.log(p1.name)

console.log(p1.getName(), p1.getAge(41))