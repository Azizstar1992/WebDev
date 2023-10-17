
let title
const ul = document.querySelector('ul')
ul.style.margin = "0"
ul.style.padding="0"
ul.style.display ="flex"
ul.style.flexWrap= "wrap"
for(let i = 0 ; i < 101 ; i++)
{
    title = document.createElement('li')
    title.style.padding = "50px"
    title.style.margin = "2px"
    title.textContent =`${i}`
    title.style.listStyle="none"

    if(isPrime(i))
    {
        title.style.backgroundColor="red"
    }
    else if(i %2 ==0 )
    {
        title.style.backgroundColor="green"
    }
    else
    {
        title.style.backgroundColor="yellow"
    }
    ul.append(title)


}

function isPrime(number)
 { 
   if (number <= 1)
   return false;

   // The check for the number 2 and 3
   if (number <= 3)
   return true;

   if (number%2 == 0 || number%3 == 0)
   return false;

   for (var i=5; i*i<=number; i=i+6)
   {
      if (number%i == 0 || number%(i+2) == 0)
      return false;
   }

   return true;
 }