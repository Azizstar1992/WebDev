


console.log('---------------------------------1.1---------------------------------------')
console.log('Declare an empty array;')
let arr = []
console.log('---------------------------------1.2---------------------------------------')
console.log('Declare an array with more than 5 number of elements')
arr = ["item",1,2,3,4]
console.log('---------------------------------1.3---------------------------------------')
console.log('Find the length of your array')
console.log(arr.length)
console.log('---------------------------------1.4---------------------------------------')
console.log('Get the first item, the middle item and the last item of the array')
console.log(arr[0]);
console.log(arr[Math.floor(arr.length/2)])
console.log(arr[arr.length-1])
console.log('---------------------------------1.5---------------------------------------')
console.log('Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5')
let mixedDataTypes = [1,"mixed",true,9.8,undefined,null]
console.log(mixedDataTypes)
console.log('---------------------------------1.6---------------------------------------')
console.log('Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon')
let itCompanies ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', ')
console.log('---------------------------------1.7---------------------------------------')
console.log('Print the array using console.log()')
console.log(itCompanies)
console.log('---------------------------------1.8---------------------------------------')
console.log('Print the number of companies in the array')
console.log(itCompanies.length)
console.log('---------------------------------1.9---------------------------------------')
console.log('Print the first company, middle and last company')
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length-1])
console.log('---------------------------------1.10---------------------------------------')
console.log('Print out each company')
let i = 0;
do(console.log(itCompanies[i]))
while(i++ < itCompanies.length-1)
console.log('---------------------------------1.11---------------------------------------')
console.log('Change each company name to uppercase one by one and print them out')
i = 0;


do(itCompanies[i] = itCompanies[i].toUpperCase())
while(i++ < itCompanies.length-1)
i = 0 

do(console.log(itCompanies[i]))
while(i++ < itCompanies.length-1)
console.log('---------------------------------1.12---------------------------------------')
console.log('Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.')
console.log(`${itCompanies} are big IT companies`)
console.log('---------------------------------1.13---------------------------------------')
console.log('Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found')
let index = itCompanies.indexOf("Microsoft") 

console.log('---------------------------------1.14---------------------------------------')
console.log('Filter out companies which have more than one \'o\' without the filter method')

console.log('---------------------------------1.15---------------------------------------')
console.log('Sort the array using sort() method')
console.log(itCompanies.sort())
console.log('---------------------------------1.16---------------------------------------')
console.log('Reverse the array using reverse() method')
console.log(itCompanies.reverse())
console.log('---------------------------------1.17---------------------------------------')
console.log('Slice out the first 3 companies from the array')
console.log(itCompanies.slice(3))
console.log('---------------------------------1.18---------------------------------------')
console.log('Slice out the last 3 companies from the array')
console.log(itCompanies.slice(0,3))
console.log('---------------------------------1.19---------------------------------------')
console.log('Slice out the middle IT company or companies from the array')
let mid = itCompanies.length/2
console.log(itCompanies.slice(0,mid).concat(itCompanies.slice(mid+1)))
console.log('---------------------------------1.20---------------------------------------')
console.log('Remove the first IT company from the array')
console.log(itCompanies.slice(1))
console.log('---------------------------------1.21---------------------------------------')
console.log('Remove the middle IT company or companies from the array')
itCompanies =itCompanies.slice(0,mid).concat(itCompanies.slice(mid+1))
console.log(itCompanies)
console.log('---------------------------------1.22---------------------------------------')
console.log('Remove the last IT company from the array')
itCompanies = itCompanies.slice(0,itCompanies.length-1)
console.log(itCompanies)
console.log('---------------------------------1.23---------------------------------------')
console.log('Remove all IT companies')
itCompanies = itCompanies.splice()
console.log(itCompanies)


console.log('---------------------------------2.1---------------------------------------')
console.log('Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file')
console.log(countries)


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
//removing all the punctuations
let string =text.replace(/[^w]/gi,'')
arr = text.split(" ")
console.log(arr)
console.log(arr.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']