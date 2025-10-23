class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`welcome to mr ${this.name}`);
    }

    info(){
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

class Rectangle {
  constructor(width, height) {
    this.width = width; // Calls the setter
    this.height = height;
  }

  set width(value) {
    if (value <= 0) {
      throw new Error('Width must be positive');
    }
    this._width = value; // Stores the value in a "private" property
  }

  get width() {
    return this._width; // Returns the stored value
  }

  get area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.width); // 5
rect.width = 8; // Calls the setter, updates _width
console.log(rect.width); // 8
console.log(rect.area); // 8 * 10 = 80

// const rect = new Rectange(10, 20);
// console.log(rect.width);
// console.log(rect.area);
/* 
Here’s how the flow works for console.log(rect.width):

When you create the object:
const rect = new Rectange(10, 20);

The constructor runs:
this.height = 10;
this.width = 20;
Setting this.width = 20 calls the set width(value) method, which sets this._width = 20.
When you do console.log(rect.width):

This calls the get width() method, which returns this._width.
Since this._width was set to 20 in the constructor, it prints 20.
If you see // 5 in an example, it means the width was set to 5 when creating the object.
//  In your code, rect.width will print 20 because you set it to 20 in the constr
*/



/* 

Explanation:

When you assign rect.width = 8, the set width(value) method runs, which sets this._width = 8.
When you access rect.width, the get width() method runs, which returns this._width.
Using this._width inside the setter avoids calling the setter again (which would cause an infinite loop 
if you used this.width = value inside the setter).
This pattern allows you to add validation or logic when setting a property, 
while still letting users use rect.width as if it were a normal property.
*/

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
// console.log(temp.fahrenheit);
// temp.fahrenheit = 86;
// console.log(temp.fahrenheit);



/* 
Here’s a practice problem for you:

Create a class called BankAccount with the following:

A private property _balance (use the convention with underscore).
A getter balance that returns the current balance.
A setter balance that only allows setting the balance if the value is not negative (throw an error if negative).
A method deposit(amount) that adds to the balance using the setter.
A method withdraw(amount) that subtracts from the balance using the setter (throw an error if insufficient funds).
Test your class by:

Creating an account with a balance of 1000.
Depositing 500.
Withdrawing 300.
Trying to set the balance to -100 (should throw an error).
Printing the final balance using the getter.
Try to implement this and test all the cases!
*/


class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    set balance(value) {
        if (value < 0) {
            throw new Error('negative value not allowed!');
        }
        this._balance = value;
    }

    get balance() {
        return this._balance;
    }

    deposit(amount) {
        this.balance = this._balance + amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            throw new Error('Insufficient funds!');
        }
        this.balance = this._balance - amount;
    }
}

// Test cases
const acc = new BankAccount(1000);
acc.deposit(500);      // 1500
acc.withdraw(300);     // 1200
try {
    acc.balance = -100; // Should throw error
} catch (e) {
    console.log(e.message); // negative value not allowed!
}
console.log(acc.balance); // 1200