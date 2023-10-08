const body = document.querySelector("body")
const header = document.createElement("h1")
header.textContent = "World Countries list"
body.append(header)

body.style.display = "flex";
body.style.flexDirection="column"
body.style.justifyContent = "space-around"


header.style.alignSelf = "center"

header.style.margin = "0"
const head2 = document.createElement("h2")

head2.style.alignSelf ="center"
head2.style.padding = "0"
head2.style.margin = "0"

head2.textContent = `there are ${countries.length} countries`
body.append(head2)

const list = document.createElement("ul")
list.style.listStyle ="none"
list.style.padding="0"

for(let i = 0 ; i <countries.length;i++)
{
    let li = document.createElement("li")
    li.style.margin ="4px"
    li.style.padding ="50px"
    li.textContent = countries[i]
    li.style.border ="1px solid black"
    
    
    list.append(li)
    
}

list.style.display="flex"
list.style.flexWrap ="wrap"
list.style.alignItems="center"
list.style.flexBasis ="auto"
list.style.marginLeft ="10%"
body.append(list)
list.style.alignItems="center"
