console.log('1.Create an Animal class. The class will have name, age, color, legs properties and create different methods')

class Animal 
{
    constructor(name, age, color, legs)
    {
        this.name = name, 
        this.age = age, 
        this.color = color, 
        this.legs = legs
    }

    getName()
    {
        return this.name
    }
    getAge()
    {
        return this.age
    }
    saySomething()
    {
        console.log('im an animal')
    }
}

console.log('Create a Dog and Cat child class from the Animal Class.')
console.log('2.Override the method you create in Animal class')

class Dog extends Animal
{

    saySomething()
    {
        console.log('im a dog')
    }
}

class Cat extends Animal
{
    saySomething()
    {
        console.log('im a cat')
    }
}

let dog = new Dog()
let cat = new Cat()
let animal = new Animal()

dog.saySomething()
cat.saySomething()
animal.saySomething()



console.log('Let\'s try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.')

console.log('Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.')
