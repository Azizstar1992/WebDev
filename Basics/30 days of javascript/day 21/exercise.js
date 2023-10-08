
//center div
const body = document.querySelector('body')
body.style.display = 'flex'
body.style.justifyContent="center"

const wrap = document.querySelector("div")
wrap.style.display='flex'
wrap.style.flexDirection = "column"

//get rid of list style
document.querySelector('ul').style.listStyle="none"


//set all red
const li = document.querySelectorAll('li')
li.forEach((item) => item.style.backgroundColor ="red")
//change first and second
li[0].style.backgroundColor="green"
li[1].style.backgroundColor='yellow'

for(let i = 0; i < li.length;i++)
{
    li[i].style.paddingTop = "10px"
    li[i].style.paddingBottom="10px"
    li[i].style.borderWidth="2px"
    li[i].style.borderColor="black"
    li[i].style.borderStyle="solid"
}

const firsthead = document.querySelector('h1')
const secondhead = document.querySelector('h2')
secondhead.style.fontSize="12px"
secondhead.style.paddingTop = "10px"
secondhead.style.paddingBottom="10px"
secondhead.style.alignSelf="center"
//updates time 
let choice = 0;
let string = "2020"
function updatetime()
{
    let time = new Date()
    let timeString = ` ${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    secondhead.innerHTML = '30DaysOfJavaScript Challenge'+ timeString
    const colorArray=["red",'green','blue','yellow']
    
    secondhead.style.backgroundColor=  colorArray[choice]
    choice = (choice+1)%colorArray.length
    string.style.color = colorArray[choice]
    firsthead.innerHTML ="Bsabeneh Yetayeh challenges in " +string
    

}
setInterval(updatetime,1000)



const ul = document.querySelector("ul")
ul.style.padding ="0"
ul.style.margin="0"