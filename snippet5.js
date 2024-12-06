class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(name){
        console.log(`welcome to mr ${this.name}`);
    }

    info(name,age){
        console.log(`hi my name is ${this.name} and i'm ${this.age} years old.`)
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age)
        this.jobTitle = jobTitle;
    }
    work(){
        console.log(`my name is ${this.name} and working as ${this.jobTitle}`);
    }
}
// const jon  = new Person('jon', 18);
// const jane = new Employee('jane', 21, 'Backend Developer');
// jane.greet();
// jane.info();
// jane.work();
// jon.greet();
// jon.info();

// ========================================================================================================//


//  static method: static  method is defined  using static keyword, they are called on the class itself
// not instance  of the class.

class MathUtils {
    static add(a, b){
        return a + b;
    }
}

// console.log(MathUtils.add(2,4));


// super keyword:  it is often used in constructor of derived class to initialize the parent class.

// ========================================================================================================//
//  getter and setters:  in javascript class: -  a
/* Getters and Setters are specials methods that provides a way  to access and update  the properties of an
object. they  defined using the get and set keyword */

class Rectange {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.height * this.width;
    }

    
    set width(value){
        if(value <= 0){
            console.error('width mst be positive .');
        }else {
            this._width = value;
        }
        
    }

    get width(){
        return this._width;
    }
} 

// const rect = new Rectange(10, 20);
// console.log(rect.width);
// console.log(rect.area);

// ========================================================================================================//

/* Example: Tempreture Conversion:
This example demonstrates a Temperature class that allows getting and setting temperature in both Celsius
and Forenheit.
 */

class Temperature {
    constructor(celsius){
        this.celsius = celsius;
    }

    // Getter for Tempretrue in Forenheit.
    get fahrenheit(){
        return this.celsius * 9/5 + 32;
    }

    // Setters for Tempreture in Forenheit.
    set fahrenheit(value){
        this.celsius = (value - 32) * 5/9;
    }

    // Getter for tempreture in celsius
    get celsius(){
        return this._celsius;
    }
    // setter for celsius
    set celsius(value){
        if(value <-273.15){
            console.error(`tempreture can not be  below  absolute zero !`);
        }
        else{
            this._celsius = value;
        }
    }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.fahrenheit);


