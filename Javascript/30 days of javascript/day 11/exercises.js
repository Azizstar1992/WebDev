console.log('Exercises: Level 1')
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries1 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

console.log('Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.')
const [e, pi,gravity,humanBodyTemp,waterBoilingTemp] = constants
console.log(e, pi,gravity,humanBodyTemp,waterBoilingTemp)

console.log('Destructure and assign the elements of countries array to fin, est, sw, den, nor')
let [fin, est, sw, den, nor] = countries1
console.log(fin, est, sw, den, nor)
console.log('Destructure the rectangle object by its properties or keys.')
let [width,height,area,perimeter] = Object.keys(rectangle)
console.log(width,height,area,perimeter)
let [width1,height1,area1,perimeter1] = Object.values(rectangle)
console.log(width1,height1,area1,perimeter1)
console.log('Exercises: Level 2')
console.log('Iterate through the users array and get all the keys of the object using destructuring')
let [person1,person2,person3,person4,person5,person6,person7] = Object.keys(users)
console.log(person6)
console.log('Find the persons who have less than two skills')
let array = []
for(let key in users)
{
    if(users[key].skills.length < 2) array.push(users[key])
}
console.log(array)
console.log('Exercises: Level 3')
console.log('Destructure the countries object print name, capital, population and languages of all countries')

let [Afghanistan,...restcountries] = countries
console.log(Object.entries(Afghanistan))
console.log('A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.')


console.log('A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.')
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [names, skills, [jsScore, ...reactScore]] = student

console.log(names, skills, jsScore, reactScore)


