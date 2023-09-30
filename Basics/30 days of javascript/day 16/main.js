
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`


console.log('Change skills array to JSON using JSON.stringify()')
let skill = JSON.stringify(skills)
console.log(skill)
console.log('Stringify the age variable')
age = JSON.stringify(age)
console.log(age)
console.log('Stringify the isMarried variable')
isMarried = JSON.stringify(isMarried)
console.log(isMarried)
console.log('Stringify the student object')
let studen = JSON.stringify(student)
console.log(studen)

console.log('2. Stringify the students object with only firstName, lastName and skills properties')
studen = JSON.stringify(student,['firstName','lastName','skills'])
console.log(studen)

let users = JSON.parse(txt)

let max = Number.MIN_SAFE_INTEGER;
let res = undefined;
for (const key in users)
{
     const user = users[key];
     console.log(user.skills.length)
     if (user.skills.length > max)
    {
         max = user.skills.length;
         res = user;
     }
}

//Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName','Abdiaziz')
localStorage.setItem('lastName','Mohamud')
localStorage.setItem('age',30)
localStorage.setItem('country','United Kingdom')
localStorage.setItem('city','Leicester')

//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

class student1 {
    constructor(){
    this.firstName ="Abdiaziz"
    this.lastName="Mohamud"
    this.age=24
    this.skills= ['CSS','HTML']
    this.country='UK'
    this.enrolled=true
    }
}

student1 = new student1()
localStorage.clear()

let arr = Object.entries(student1)
for(let i = 0; i <arr.length;i++)
{
    localStorage.setItem(arr[i][0],arr[i][1])
}