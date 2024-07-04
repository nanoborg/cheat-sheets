console.log('object orientated')

// ====================================================
// Style -
// Encapsulation
// Inheritance
// Polymorphism

// By grouping all the relevant code into a class or object it is self organizing



// ====================================================
// Class
// ====================================================

class Car {
    constructor(brand, model) {
        this.brand = brand,
        this.model = model
    }

    setNewBrand(brand) {
        return this.brand = brand // should always return to not get undefined
    }


}

let car = new Car('vw', 'golf')

car.setNewBrand('Ford')