console.log('------------------------1.1----------------')
console.log('Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:\'You are old enough to drive\' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.')
let age = prompt('Enter your age')
age >= 19 ? console.log('you are old enough to drive') : console.log(`you need to wait ${18 - age} years to drive`)

console.log('------------------------1.2----------------')
console.log('Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.')
age < 30 ? console.log(`you are ${30 - age} years younger than me`) : age == 30 ? console.log('we are the same age') : console.log(`you are ${Math.abs(age - 30)} years older than me`)

console.log('------------------------1.3----------------')
console.log('If a is greater than b return \'a is greater than b\' else \'a is less than b\'. Try to implement it in to way')
console.log('using if else or ternary operator.')
let a = 4, b = 3;
a > b ? console.log(true) : console.log(false)
if (a > b) console.log(true)
else console.log(false)
console.log('------------------------1.4----------------')
console.log('Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?')
let num = prompt('Enter a number:')
num % 2 == 0 ? console.log(`${num} is even `) : console.log(`${num} is odd`)


console.log('------------------------2.1----------------')
console.log('Write a code which can give grades to students according to theirs scores')
let score = prompt('what is your score'), result = null
switch (true) {
    case score >= 80 && score <= 100:
        console.log('A')
        break;
    case score >= 70 && score <= 79:
        console.log('B')
        break;
    case score >= 60 && score <= 69:
        console.log('C')
        break;
    case score >= 50 && score <= 59:
        console.log('D')
        break;
    case score >= 0 && score <= 49:
        console.log('F')
        break;
    default:
        console.log('not an acceptable number')
        break;

}

console.log('------------------------2.2----------------')
console.log('Check if the season is Autumn, Winter, Spring or Summer. If the user input is :')
console.log('September, October or November, the season is Autumn.')
console.log('December, January or February, the season is Winter.')
console.log('March, April or May, the season is Spring')
console.log('June, July or August, the season is Summer')

let month = prompt('what month do you wish to check?').toLowerCase()

switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log('the season is Autumn')
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('the season is Winter')
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('the season is Spring')
        break;
    case 'June':
    case 'july':
    case 'august':
        console.log('the season is Summer')
        break;
    default:
        console.log('not a month')
        break;
}

console.log('------------------------2.3----------------')
console.log('Check if a day is weekend day or a working day. Your script will take day as an input.')
let weekday = prompt('what day of the  week do you wish to check?')
switch (weekday.toLowerCase()) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log('its a weekday')
        break;
    case 'saturday':
    case 'sunday':
        console.log('its a weekend');
        break;
    default:
        console.log('not a day of the week')
        break;
}
console.log('------------------------3----------------')
console.log('Write a program which tells the number of days in a month')


switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month} has 31 days`)
        break;
    case 'april':
    case 'june':
    case 'november':
    case 'september':
        console.log(`{${month}} has 30 days`)
        break;
    case 'february':
        console.log(`{${month}} has 28 days`)
        break;
    default:
        console.log('not a month')
        break;
}