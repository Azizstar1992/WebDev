//                          Exercise 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

//Print the string on the browser console using console.log()
console.log(challenge)

//Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//Change all the string characters to capital letters using toUpperCase() method
challenge = challenge.toUpperCase();
console.log(challenge)

//Change all the string characters to lowercase letters using toLowerCase() method
challenge = challenge.toLowerCase();
console.log(challenge)

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3))

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('script'))

//Split the string into an array using split() method
let arr1 = challenge.split('')
console.log(arr1)

//Split the string 30 Days Of JavaScript at the space using split() method
let arr = challenge.split(" ")
console.log(arr)

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(str.split(" "))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let newstr =  '30 Days Of JavaScript'
newstr =newstr.replace('JavaScript','Python')
console.log(newstr)

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
newstr =  '30 Days Of JavaScript'
console.log(newstr.charAt(15))
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()


//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(newstr.indexOf('J'))

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(newstr.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
sentence =' 30 Days Of JavaScript '
console.log(sentence.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
sentence ='30 Days Of JavaScript'
console.log(sentence.startsWith('30'))
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(sentence.endsWith('JavaScript'))
//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(sentence.match('a'))
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of '+'JavaScript')
//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(sentence.repeat(2))


/** 
 * exercise 2
 * Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

 */
console.log('\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

/**
 * "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
 */

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log( parseInt('10'))

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Math.ceil(parseFloat(9.8)))

//Check if 'on' is found in both python and jargon
let jargon = 'jargon'
let python = 'python'
console.log(jargon.includes('on') && python.includes('on'))
//Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*101))
//Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random()*51)+50)
//Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256))

//Access the 'JavaScript' string characters using a random number.
let ja ='JavaScript'
let l = Math.floor(Math.random() *ja.length )
console.log(ja[l])

//Use console.log() and escape characters to print the following pattern.
//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')



//                                  exercise 3 
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence2.match(/love/gi).length)
//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.match(/because/gi).length)
//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let string3 = sentence1.replace(/[^A-Za-z0-9' ']/gi,'').match(/[a-zA-z]+/gi)
console.log(string3)

console.log('Calculate the total annual income of the person by extracting the numbers from the following text. \'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.')

let sen = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(/[0-9]+/gi)
let sum = 0
for(let i = 0; i < sen.length;i++)
{
    sum+= parseInt(sen[i])
}
console.log(sum)
