//                              Exercises: Level 1
console.log('-------------------------1.1---------------------')
console.log('Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.')
let firstName, lastName, country, city, age, isMarried, year
firstName ='Abdiaziz'
lastName  ='Mohamud'
city      ='Leicester'
age       =30
isMarried = false
year      =2023

console.log( typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)
console.log('-------------------------1.2---------------------')
console.log('Check if type of \'10\' is equal to 10')
console.log( '10' === 10)
console.log('-------------------------1.3---------------------')
console.log('Check if parseInt(\'9.8\') is equal to 10')
console.log(parseInt(9.8) === 10)
console.log('-------------------------1.4---------------------')
//Boolean value is either true or false.
console.log('Write three JavaScript statement which provide truthy value.')

console.log('Write three JavaScript statement which provide falsy value.')



console.log('------------------1.5--------------------')
console.log('Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()')
console.log(4 > 3 , 'true')
console.log(4 >= 3, 'true')
console.log(4 < 3,false)
console.log(4 <= 3,false)
console.log(4 == 4, 'true' )
console.log(4 === 4, true)
console.log(4 != 4,false)
console.log(4 !== 4, false)
console.log(4 != '4','false')
console.log(4 == '4', 'true')
console.log(4 === '4', 'true')
//Find the length of python and jargon and make a falsy comparison statement.
console.log('jargon'.length > 'python'.length)


console.log('-------------------------1.6---------------------')
console.log('Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()')
console.log(4 > 3 && 10 < 12, 'true')
console.log(4 > 3 && 10 > 12 , false)
console.log(4 > 3 || 10 < 12, 'true')
console.log(4 > 3 || 10 > 12, 'true')
console.log(!(4 > 3), 'false')
!console.log((4 < 3),'false')
console.log(!(false), 'true')
console.log(!(4 > 3 && 10 < 12),'false')
console.log(!(4 > 3 && 10 > 12), 'true')
console.log(!(4 === '4'), 'true')
console.log('There is no \'on\' in both dragon and python')
console.log('dragon'.includes('on') && 'python'.includes('on'))
console.log(!'dragon'.includes('on') && !'python'.includes('on'))


console.log('-------------------------1.7---------------------')
console.log('Use the Date object to do the following activities')
let item =  new Date()
console.log('What is the year today?')
console.log(item.getFullYear())
console.log('What is the month today as a number?')
console.log(item.getYear())
console.log('What is the date today?')
console.log(`${item.getDay()}/${item.getMonth()}/${item.getFullYear()} ${item.getHours()}:${item.getSeconds()}`)
console.log('What is the day today as a number?')
console.log(item.getDay())
console.log('What is the hours now?')
console.log(item.getHours())
console.log('What is the minutes now?')
console.log(item.getMinutes())
console.log('Find out the numbers of seconds elapsed from January 1, 1970 to now.')
console.log(item.getTime())


console.log('-------------------------2.1---------------------')
console.log('Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).')
let height = prompt('Enter height')
let base = prompt('enter width')
let answer =0.5 * base * height
alert(`your answer is ${answer}`)
console.log(`your answer is ${answer}`)

console.log('-------------------------2.2---------------------')
console.log("Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c")
let a = prompt("enter side A")
let b = prompt("enter side b")
let c = prompt("enter side c")
answer = parseInt(a)+parseInt(b)+ parseInt(c)
alert(`your answer is ${answer}`)
console.log(`your answer is ${answer}`)

console.log('-------------------------2.3---------------------')
console.log('Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))')
let length = prompt('what is the length')
let width = prompt('what is the height')
let area = length*width
let perimeter = 2*(width+length)
console.log(`the answer is ${perimeter}`)

console.log('-------------------------2.4---------------------')
console.log('Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.')
let radius = prompt('what is the radius')
console.log(`area = ${3.14 * (radius**2)} `)
console.log(`circumference = ${2 * (3.14*radius)}`)

console.log('-------------------------2.5---------------------')
console.log('Calculate the slope, x-intercept and y-intercept of y = 2x -2')

console.log('-------------------------2.6---------------------')
console.log('Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)')

console.log('-------------------------2.7---------------------')
console.log('Compare the slope of above two questions.')

console.log('-------------------------2.8---------------------')
console.log('Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.')

console.log('-------------------------2.9---------------------')
console.log('Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?')
let hours = prompt("how many hours do you work")
let rate = prompt('what is your salary')
console.log(`you earn ${hours*rate}`)
console.log('-------------------------2.10---------------------')
console.log('If the length of your name is greater than 7 say, your name is long else say your name is short.')
let name1 = prompt('what is your name').length
if(name1 > 7) console.log("your name is long");
else
{
    console.log("your name is short")
}
console.log('-------------------------2.11---------------------')
console.log('compare your first name length and your family name length and you should get this output.')
let fname = prompt('what is your first name')
let lname = prompt('what is your last name')
if(fname.length > lname.length)console.log("your first name is longer")
else console.log('your last name is longer')

console.log('-------------------------2.12---------------------')
console.log('Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.')

console.log('-------------------------2.13---------------------')
console.log('Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.')

console.log('-------------------------2.14---------------------')
console.log('Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years')
lage = prompt('how old are you')
console.log(`you are ${age * 60 * 60 *24 *365} seconds old`)

console.log('-------------------------2.15---------------------')
console.log('Create a human readable time format using the Date time object')
console.log("   YYYY-MM-DD HH:mm")
console.log(`${item.getFullYear()}-${item.getMonth()}-${item.getDate()} ${item.getHours()}:${item.getMinutes()}`)
console.log("   DD-MM-YYYY HH:mm")
console.log(`${item.getDate()}-${item.getMonth()}-${item.getFullYear()} ${item.getHours()}:${item.getMinutes()}`)
console.log("   DD/MM/YYYY HH:mm")
console.log(`${item.getDate()}/${item.getMonth()}/${item.getFullYear()} ${item.getHours()}:${item.getMinutes()}`)



console.log('-------------------------3.1---------------------')
console.log("Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )YYY-MM-DD HH:mm eg. 20120-01-02 07:05")
let date = new Date()
 month = date.getMonth() < 10? '0'+(date.getMonth()+1):date.getMonth()+1;
let second = date.getMinutes().length % 10 == 0 ? date.getMinutes() +'0':date.getMinutes();
console.log(`${date.getDate()}/${month}/${date.getFullYear()} ${date.getHours()}:${second}`)