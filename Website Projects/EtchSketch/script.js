


const maincontainer = document.createElement('div')
maincontainer.className="mainContainer"




for(let i = 0; i <2500; i++)
{
    const container = document.createElement("div")
    container.className="con";
    
    

    container.addEventListener("mousedown",() =>
    {
        container.style.backgroundColor="black"
    })
    

    maincontainer.append(container)
}

document.body.append(maincontainer)