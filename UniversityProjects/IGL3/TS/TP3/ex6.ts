// classe Person
class Person {
    name: string;
    age: number;
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new Person();
person.name = 'Ahmed';
person.age = 30;
person.greet();

// classe Student qui hérite de Person
class Student extends Person {
    school: string;
}
const student1 = new Student();
student1.name = 'Rayen';
student1.age = 20;
student1.school = 'University';
student1.greet();
console.log(`School: ${student1.school}`);

// classe abstraite Shape et ses implémentations
abstract class Shape {
    abstract area(): number;
}

// classes Circle et Rectangle
class Circle extends Shape {
    radius: number;
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle();
circle.radius = 5;
console.log(`Circle area: ${circle.area()}`);
class Rectangle extends Shape {
    width: number;
    height: number;
    area(): number {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle();
rectangle.width = 4;
rectangle.height = 6;
console.log(`Rectangle area: ${rectangle.area()}`);

// interface Drivable et classe Car
interface Drivable {
    drive(): void;
}
class Car implements Drivable {
    drive(): void {
        console.log('The car is driving.');
    }
}
const car = new Car();
car.drive();
