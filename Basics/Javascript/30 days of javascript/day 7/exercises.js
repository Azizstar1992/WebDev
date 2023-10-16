console.log("-------------------------------------------1---------------------------------------------")

console.log('1.Declare a function fullName and it print out your full name.')
function fullName() {
    console.log("Abdiaziz Mohamud")
}
fullName()

console.log('2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.')
function FullName(firstname, lastname) {
    console.log(firstname, lastname)
}
FullName("abdiaziz", 'Mohamud')
console.log('3.Declare a function addNumbers and it takes two two parameters and it returns sum.')
const sum = (parameter1, parameter2) => {
    return parameter1 + parameter2
}
console.log(sum(10, 12))
console.log('4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.')

const area = (length, width) => {
    console.log(length * width)
}
area(10, 12)
console.log('5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.')

const perimeter = (length, width) => {
    console.log(2 * (length + width))
}
perimeter(12, 10)
console.log('6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.')
function volume(length, width, height) {
    return length * width * height
}
console.log(volume(12, 12, 10))
console.log('7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle')

const areaOfCircle = (radius) => {
    console.log(3.14 * (radius ** 2))
}
areaOfCircle(5)
console.log('8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle')

let circumference = (radius) => {
    console.log(2 * (3.14 * radius))
}
circumference(10)
console.log('9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.')
let density = (mass, volume) => {
    console.log(mass / volume)
}
density(100, 10)
console.log('10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.')

function Speed(distance, time) {
    console.log(distance / time)
}
Speed(100, 3)
console.log('11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.')
let weight = (mass, gravity) => {
    console.log(mass * gravity)
}
weight(100, 9.81)

console.log('12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.')
const convertCelsiusToFahrenheit = (celsius) => {
    console.log(celsius * (9 / 5) + 32)
}
convertCelsiusToFahrenheit(100)
console.log('13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.')

const BMI = (kg, height) => {
    let bmi = kg / (height * height)
   
    switch (true) {
        case bmi < 18.5:
            console.log('Underweight: BMI is less than 18.5')
            break;
        case bmi <= 24.9:
            console.log('Normal weight: BMI is 18.5 to 24.9')
            break;
        case bmi <=29.9:
            console.log('Overweight: BMI is 25 to 29.9')
            break;
        case bmi >= 30:
            console.log('Obese: BMI is 30 or more')
            break;
        default:
            console.log("wrong number")

    }
}
BMI(110,1.83)


console.log('14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.')



console.log('15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.')

const findMax = (p1,p2,p3) =>
{
    let max = Math.max(p1,p2)
    max = Math.max(max,p3)
    console.log(max)
}
findMax(3,11,9)

console.log("-------------------------------------------2---------------------------------------------")

console.log('1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.')
const solveLinEquation = (a,b,c,x,y) =>
{
    console.log( (a*x) + (b*y)+c)
}
solveLinEquation(2,3,4,5,6)
console.log('2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.')

console.log('3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.')

console.log('4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.')

function showDate()
{
    let date = new Date()
    console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)
}
showDate()

console.log('5.Declare a function name swapValues. This function swaps value of x to y.')

console.log('6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don\'t use method).')

console.log('7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.')

console.log('8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item')

console.log('9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item')

console.log('10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.')

console.log('11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.')

console.log('12.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.')

console.log('13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.')

console.log('14.Write a function which takes any number of arguments and return the sum of the arguments')

function sumOfArguments() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    console.log(total)
}
sumOfArguments(1, 2, 3, 4, 5, 6, 7)

console.log('15.Write a function which generates a randomUserIp.')

console.log('16.Write a function which generates a randomMacAddress')

console.log('17.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.')

console.log('18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.')

