let myName: string = "Hawk";
let color: string = "green";

let statement: string = `Hello, my name is ${myName} and I like the color ${color}.`

console.log(statement)


//___________________________________________________________________________
//VARIABLE DEMO
//let varName: Type = initialValue;


//___________________________________________________________________________
//BOOLEAN
// let isRaining: boolean = false;
// let isComplete: boolean = true;


//___________________________________________________________________________
//NUMBER
// let num: number = 3;
// let hexNum: number = 0x0f0d;
// let binNum: number = 0b10010;
// let octNum: number = 0o756;


//___________________________________________________________________________
//STRING
// let myName: string = "Hawk";

//TEMPLATE STRING
// let myName: string = "Hawk";
// let color: string = "green";

// let statement: string = `Hello, my name is ${myName} and I like the color ${color}.`

// console.log(statement)


//___________________________________________________________________________
//ARRAY TYPES

//ARRAY[]
// let colors: string[] = ['red', 'blue', 'green']

//Array<elementType>
// let myFavoriteSuperheroes: Array<string> = ['Batman', 'Iron Man', 'The Flash'];


//___________________________________________________________________________
//ENUM
// enum Role { Administrator, HR, Developer };
// let newRole: Role = Role.Developer;

//ENUM OUT OF ORDER
// enum Role { Administrator = 2, HR = 1, Developer = 3 };
// let newRole: Role = Role.Developer;


//___________________________________________________________________________
//ANY
// let myCode: any = 456454;
// myCode = "myCode is now a string";
// myCode = true; // myCode now is a boolean


//___________________________________________________________________________
//VOID
// function myConsolePrint(): void {
//     console.log("This function does not have a return type")
// }


//___________________________________________________________________________
//TYPE ASSERTION

//ANGLE BRACKET TYPE ASSERTION
// let userVal: any = "I got a value from the user and it is of the type string";
// let len: number = (<string>userVal).length;

//AS SYNTAX TYPE ASSERTION
// let userVal: any = "I got a value from the user and it is of the type string";
// let len: number = (userVal as string).length;


//___________________________________________________________________________
//FUNCTIONS TYPED
//Named Function
// function add(a: number, b: number): number{
//     return a + b;
// }

// //Anonymous Function
// let sum = function (a: number, b: number): number { return a + b; };

// //Lambda Function
// let sum2 = (a: number, b: number): number => a + b;


//___________________________________________________________________________
//OPTIONAL AND DEFAULT FUNTION PARAMETERS
// function fullName (firstName: string, middleName: string, lastName: string)
// {
//     //we are using template strings here
//     return `The full name is ${firstName} ${middleName} ${lastName}.`;
// }

// console.log(fullName ("Bob", "Hawk", "Nelson")); //correct function call 
// console.log(fullName ("Bob", "Hawk"));//not enough parameters 
// console.log(fullName ("Bob", "Hawk", "Nelson", "McGraw"));//too many parameters

//OPTIONAL
// function fullName (firstName: string, middleName: string, lastName?: string)
// { 
//     if (lastName){
//         //we are using template strings here
//         return `The full name is ${firstName} ${middleName} ${lastName}.`;
//     } else {
//         //we are using template strings here
//         return `The full name is ${firstName} ${middleName}.`;
//     }
// }

// console.log(fullName ("Bob", "Hawk", "Nelson")); //correct function call 
// console.log(fullName ("Bob", "Hawk"));//still works
// console.log(fullName ("Bob", "Hawk", "Nelson", "McGraw"));//too many parameters

//DEFAULT VALUE
// function fullName (firstName: string, middleName: string, lastName = "Rainman")
// { 
//     //we are using template strings here
//     return `The full name is ${firstName} ${middleName} ${lastName}.`;
// }

// console.log(fullName ("Bob", "Hawk", "Nelson")); //correct function call 
// console.log(fullName ("Bob", "Hawk"));//still works, but will now return "The full name is Bob Hawk Rainman"
// console.log(fullName ("Bob", "Hawk", "Nelson", "McGraw"));//too many parameters


//___________________________________________________________________________
//CLASSES
// class Greeting {
//     name: string;
//     constructor(greeterName: string) {
//         this.name = greeterName;
//     }
//     greet(): string {
//         return `Hello ${this.name}!`;
//     }
// }

// let newGreeting = new Greeting ("James");
// console.log(newGreeting.greet());

//INHERITANCE IN CLASSES
// class Animal {
//     onTheMove(){
//         console.log('The animal is on the move!');
//     }
// }

// class Cat extends Animal {
//     meow(){
//         console.log('Meow!')
//     }
// }

// let cat = new Cat();
// cat.onTheMove();
// cat.meow();

//CLASS WITH CONSTRUCTORS AND TYPE DEFINITIONS
// class Animal {
//     name: string;

//     constructor(animalName: string) {
//         this.name = animalName;
//     }

//     move(distance: number = 0) {
//         console.log(`${this.name} moved ${distance} units.`);
//     }
// }

// class Cow extends Animal {
//     constructor(name: string) {
//         super(name);
//     }

//     move(distance = 2) {
//         console.log('Mooing along....');
//         super.move(distance);
//     }
// }

// let Bob = new Cow("Bob");
// Bob.move();


//___________________________________________________________________________
//INTERFACES
// interface nameInterface {
//     name: string;
// }

// function namePrint(givenObject: nameInterface) {
//  console.log(givenObject.name);
// }

// let myObject = { name: "Hawk", address: "123 ABC Ave" };
// namePrint(myObject)


//___________________________________________________________________________
//OPTIONAL PROPERTIES IN AN INTERFACE
// interface Square {
//     color?: string;
//     length?: number;
// }

// function makeSquare(newSquare: Square): { color: string, perimeter: number } {
//     let mySquare = { color: "black", perimeter: 20 };
//     if (newSquare.color){
//         mySquare.color = newSquare.color;
//     }
//     if (newSquare.length){
//         mySquare.perimeter = newSquare.length * 4;
//     }
//     return mySquare;
// }

// let createdSquare = makeSquare({ color:"blue" });


//___________________________________________________________________________
//USING CLASSES WITH INTERFACES
// interface ContactInterface {
//     fullName: string;
//     phoneNumber: string;
// }

// class Contact implements ContactInterface {
//     fullName: string = 'Bob';
//     phoneNumber: string = '123-456-1234';
//     email: string = 'test@abc.com';
// } 

//INTERFACE WITH METHODS
// interface ContactInterface {
//     fullName: string;
//     setfullName(name: string): void;
//     getfullName(): string;
// }

// class Contact implements ContactInterface {
//     fullName: string = 'Bob';
//     phoneNumber: string = '123-456-1234'
        
//     setfullName(name: string){
//         this.fullName = name;
//     }

//     setphoneNumber(phone: string){
//         this.phoneNumber = phone;
//     }

//     getfullName(): string{
//         return this.fullName;
//     }

//     getphoneNumber(): string{
//         return this.phoneNumber;
//     }
// } 


//___________________________________________________________________________
//ITERATORS
// let superheroes = ["Batman", "Superman", "Wonder Woman"];

// for (let hero of superheroes) {
//     console.log(hero);
// }

// for (let hero in superheroes) {
//     console.log(hero);
// }


//___________________________________________________________________________
//DECORATORS
// "experimentalDecorators": true,
//In TypeScript, decorators are functions that can be attached to classes and their members, such as functions/methods and properties. When applying decorators, we use the form @fuctionName where functionName represents the function. These functions are invoked at runtime.