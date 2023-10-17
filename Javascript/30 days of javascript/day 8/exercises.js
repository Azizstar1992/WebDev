
console.log('-------------------------------1----------------------------------------')
console.log('Create an empty object called dog')
const dog = {
    name: 'doggy',
    age: 3
}
console.log('Print the the dog object on the console')
console.log(dog)
console.log('Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof')
dog.name = "gerald"
dog.legs = 4
dog.color = "red"
dog.age = 8
dog.bark = 'loud'
console.log(dog)
console.log('Get name, legs, color, age and bark value from the dog object')
console.log(dog.name, dog.legs, dog.color, dog.bark)
console.log('Set new properties the dog object: breed, getDogInfo')
dog.breed = "pitbull"
dog.getDogInfo = function () {
    return `name: ${dog.name}, age: ${dog.age}, legs: ${dog.legs}, color: ${dog.color}, dog.bark: ${dog.bark}, breed: ${dog.breed}`
}
console.log(dog.getDogInfo())



const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

console.log('-------------------------------2----------------------------------------')
console.log('Find the person who has many skills in the users object.')
let max = 0
let result = users[0]
for(key in users)
{
    if(users[key].skills.length > max)
    {
        result = key
        max = users[key].skills.length
    }
    
}
console.log(result)

console.log('Count logged in users, count users having greater than equal to 50 points from the following object.')

let userCountLoggedIn = 0,userCountGreaterThan50=0
for(key in users)
{
    if(users[key].isLoggedIn == true) userCountLoggedIn++;
    if(users[key].points >= 50) userCountGreaterThan50++;
}
console.log(userCountGreaterThan50,userCountLoggedIn)
users.Alex = "Abdiaziz"
console.log(users)