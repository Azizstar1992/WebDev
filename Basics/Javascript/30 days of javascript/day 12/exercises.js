console.log('Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’')

let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /[0-9]+/g
let arr = text.match(pattern)

let sum = 0;
for(let key in arr)
{
    sum+=parseInt(arr[key])
}
console.log(sum)

console.log('The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.')
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let sortedPoints =  [88, 3, 1, 1, -8, 2, 4, 8]

let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
for(let i = 0; i < sortedPoints.length;i++)
{
    if(sortedPoints[i] > max) max = sortedPoints[i]
    if(sortedPoints[i] < min) min = sortedPoints[i]
}
console.log(Math.abs(max-min))


console.log('Write a pattern which identify if a string is a valid JavaScript variable')
let is_valid_variable = (text) =>
{
    pattern = /^[a-z]+_*[a-zA-Z]+$/g
    console.log(pattern.test(text))
}

is_valid_variable('first_name') 
is_valid_variable('first-name') 
is_valid_variable('1first_name') 
is_valid_variable('firstname') 
is_valid_variable('first_Name') 

console.log('Write a function called tenMostFrequentWords which get the ten most frequent word from a string?')
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(paragraph)
function greatAmount(paragraph) {
    paragraph =paragraph.replace(/[^a-zA-Z\s]/gi,"")
    let array = paragraph.split(' ')
   
    let map = new Map()
    var max_word = array[0];
    let max_number = 0
    for(let i =0; i < array.length;i++)
    {
        let word = array[i]
        
        
        if(map.has(word))
        {
            let amount = map.get(word)+1
          
            map.set(word,amount)
            
            if(amount > max_number)
            {
                max_number = amount
                max_word = word
            }

        }
        else{
            map.set(word,1)
        }
    }
   
    console.log(max_word)
}
greatAmount(paragraph)

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
sentence = sentence.replace(/[^a-zA-z\s,\.\?\!]/gi,"")
console.log(sentence)