// alert('Yo!')
console.log("operation");


let student = "Dara";
// age = 30
// alert(student)

let Student = "f";
// alert(student)

const age = 30;

console.log(Student * 100);
console.log("This is", student);

document.getElementById('display').innerHTML += "<br>" + "Yo!"
// document.getElementById('display').style.color = "red"
// document.getElementById('display').style.fontSize = "20px"

document.getElementById('display').style.cssText = "color: red; font-size: 30px; margin: 10px"
document.getElementById('div').innerText = "You will never know shege!!"


document.getElementById('student').innerHTML += "<li>Jamal</li> <li>Victor</li>"

document.getElementById('newStudent').value;


function addStudent() {
    // console.log(document.getElementById('newStudent').value)
    document.getElementById('student').innerHTML += `<li>${document.getElementById('newStudent').value}</li>`
}

// Assignment
function add() {
    document.getElementById('pro').innerHTML += `<li>${document.getElementById('products').value}</li>`
}

// Practice
myFunction = (a, b) => a * b;

let result = myFunction(4,5);
document.getElementById('demo').innerHTML = "The result is " + result;

function sum(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let x = sum(4, 20, 100, 40);

document.getElementById('demo1').innerHTML = x;


// Variable lifecycle
var goodStudent = "Dara"

var goodStudent; // Initialization
goodStudent = "Dara" // Declaration

// var bestFriend = "Tolu"
// var bestFriend = "Tola"
// console.log(bestFriend)

const bestCity = 'Ogbomoso'
// bestCity = 'Ibadan'
console.log(bestCity);

// Area of a Circle
const pi = 22/7;
const radius = 4;
const areaOfACircle = ((pi) * (radius**2)).toFixed(2)
console.log("The area of a Circle: " + areaOfACircle);

// Area of a Triangle
const base = 10;
const height = 12;
const areaOfATriangle = 0.5 * base *height;
console.log("The area of a Triangle: " + areaOfATriangle)

// Area of a Triangle
// const ase = prompt("Input a value for the base of a Triangle: ");
// const eight = prompt("Input a value for the height of a Triangle: ");
// const reaOfATriangle = 0.5 * ase *eight;
// console.log("The area of a Triangle: " + reaOfATriangle)

// Area of a Square
const side = 10;
const areaOfASquare = side ** 2
console.log("The area of a Square: " + areaOfASquare)


// Area of a Parallelogram
const Base = 10;
const Height = 10;
const areaOfAParallelogram = Base * Height;
console.log("The area of a Parallelogram: " + areaOfAParallelogram)


// Area of a Quadrilateral
const firstDiagonal = 10;
const secondDiagonal = 10;
const sin = 10;
const areaOfAQuadrilateral = 0.5 * firstDiagonal * secondDiagonal * -0.5440
console.log("The area of a Quadrilateral: " + areaOfAQuadrilateral)


// The Body Mass Index (BMI)
const weight = 10;
const hei = 10;
const bodyMassIndex = weight / (hei * hei)
console.log("BMI: " + bodyMassIndex);