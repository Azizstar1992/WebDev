console.log('Store you first name, last name, age, country, city in your browser localStorage.')
localStorage.setItem("firstname","Abdiaziz")
localStorage.setItem("lastname","Mohamud")
localStorage.setItem("age",30)
localStorage.setItem("city","Leicester")

console.log('Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.')
const student =
{
    firstname:"Aziz",
    lastname:"Moha",
    age:24,
    skills:["skill1","skill2"],
    country:"UK",
    enrolled: true
}

let arr = Object.entries(student)
for(let i = 0; i <arr.length;i++)
{
    localStorage.setItem(arr[i][0],arr[i][1])
}

console.log('Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.')

const personAccount= {
    firstnames:"Mark",
    lastnames : "Test", 
    incomes:10000, 
    expenses:3000,

    totalIncome:function()
    {
        return this.incomes
    }, 
    totalExpense: function() { return this.expenses}, 
    accountInfo:function() { return `total income:${this.incomes}  total expense: ${this.expenses} profit:${this.incomes-this.expenses}`},
    addIncome:function(amount){ this.incomes +=amount }, 
}
personAccount.addIncome(5000)
arr = Object.entries(personAccount)
for(let i = 0; i <arr.length;i++)
{
    localStorage.setItem(arr[i][0],arr[i][1])
}