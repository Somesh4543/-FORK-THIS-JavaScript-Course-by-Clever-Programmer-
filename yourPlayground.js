// console.log('hello world')
// console.log('somesh')

// let name = 'Peter Pan'
// console.log(name)

// let sentence = 'How are you doing today!'
// console.log(sentence)

//operators
// fruit = prompt('what is your favorite fruit?')
// console.log(fruit)

// food = Number(prompt('how much was the food?'))
// tipPercentage = Number(prompt('how much you want to tip %?')) / 100
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log('total:', total)
// alert(tipAmount)

//user Input  

//Baby weather app
//if rain: 'Grab your umbrella'
//else: 'Wear your sunglasses'

// let weather = prompt('How is the weather?')

// if (weather == 'rainy') {
//   console.log('Grab your umberalla')
// } else {
//   console.log('Grab your sunglasses')
// }

//Functions
//this is a function called 'sayMyName'
//and it has 0 arguments
//it logs the name to the console
// function sayMyName() {
//   console.log('Qazi')
// }
// sayMyName()

//this is a function called sayMyname2
//it has 1 argument called `name`
//it logs the name to the console
// function sayMyName2(name) {
//   console.log(name)
// }
// sayMyName2('Lance')

// function greeting(name) {
//greet = 'hj ' + name + ', nice to meet ya!.'
// greet = `hi ${name}, nice to meet ya!`
// console.log(greet)
// }

// greeting('Jonny')

// function sum(a, b) {
//return
//   return a + b
// }

// num1 = sum(1, 2)
// console.log(num1)

// function calculateFoodTotal(food, tip) {
//   const tipPercentage = tip / 100
//   const tipAmount = food * tipPercentage
//   const total = sum(food, tipAmount)
//   return total
// }

// console.log(calculateFoodTotal(300, 60))

//ES6 Arrow function with an explicit return
// const sumArr = (a, b) => {
//   return a + b
// }
// console.log(sumArr(10, 50))

//arrow function with implicit return
//Important: remove curly braces
// const sumArrow = (a, b) => a + b

// console.log(sumArrow(100, 300))

// Arrays
// const groceries = ['banana', 'apple', 'orange', 'pear']
// console.log(groceries)

//grab the 3rd index(item)
// console.log(groceries[3])

//array method
// groceries.push('cookie')
// console.log(groceries)

// groceries.push('chocolate')
// console.log(groceries)

//Array Slice
//start from 0 INCLUSIVE and Up to 2 [0, 1]
// console.log(groceries.slice(1, 4))

//array methods (slice, push, indexOf, length)
// console.log(groceries.indexOf('pear'))
// console.log(groceries.length)

//OBJECTS
//Key: value pairs
// const person = { name: 'Leonardo', shirt: 'white' }

//access object: dot notation vs bracket notation
// console.log(person.name)
// console.log(person.shirt)

//bracket notation
// console.log(person['name'])
// console.log(person['shirt'])

//assign object
// person.phone = '1-22-333-444'
// console.log(person.phone)

// console.log(person)

// const person2 = { name: 'Somesh', tshirt: 'green' }
// console.log(person2.name)
// console.log(person2.tshirt)
// console.log(person2)


//es6 arrow function
//objects
//template literals
//methods Math.floor()
// const introducer = (name, tshirt) => {
//   const person3 = {
//     name: name,
//     tshirt: tshirt,
//     assets: 400,
//     debt: 1000000,
//     netWorth: function() {
//       return this.assets - this.debt
//     }
//   }
//   const intro = `My name is ${person3.name} and the color of t-shirt is ${person3.tshirt} and my net worth is Rs${person3.netWorth()}.`

//   return intro
// }
// console.log(introducer('Somesh', 'Green'))
// console.log(introducer('Leonardo', 'White'))


// const fruits = ['banana', 'apple', 'orange', 'pear']
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//   console.log(fruit)
// }

// const numbers = [1, 2, 3, 4, 5, 6]

//sum up all numbers in the array
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// const double = (numbers) => {
//   let result = []
//   for (const num of numbers) {
//     result.push(num * 2)
//   }
//   return result
// }

// console.log(double([2, 3, 4, 5, 6, 7]))

// const square = (numbers2) => {
//   let result = []
//   for (const num2 of numbers2) {
//     result.push(num2 ** 2)
//   }
//   return result
// }
// console.log(square([1, 2, 3, 4, 5, 6, 7]))

// const letterCounter = (phrase) => {

//   let result = 0;

//   for (const index in phrase) {
//     console.log(Number(index) + 1)
//     result = Number(index) + 1
//   }
//   return { result }
// }
// const phrase = prompt('Write your phrase')

// console.log(letterCounter(phrase))

// const sumArray = (numbers) => {
//   let result = 0;
//   //for loop
//   for (const sum of numbers) {
//     console.log(sum)
//     result += sum
//   }
//   return { result }
// }
// const nums = [1, 2, 3, 4, 5]
// console.log(sumArray(nums))

const max = (numbers) => {
  let result = numbers[0]

  for (const num of numbers) {
    if (num > result) {
      result = num
    }
  }
  return { result }
}
// console.log(max([1, 2, 3, 4, 1, 2, 3, 20 , 30]))

const letterFrequency = (phrase) => {
  console.log(phrase)
  //make a frequency object{}
  let frequency = {}
  for (const letter of phrase) {
    //check if letters exist in the frequency 
    if (letter in frequency) {
      //increment the value by +1
      frequency[letter] += 1
      // otherwise, set the value to 1
    } else {
      frequency[letter] = 1
    }
  }
  return frequency
}

// console.log(letterFrequency('lol, what are you doing later tonight, haha!'))

// incremental operators
//++, --, +=, 

//wordFrequency()
const wordFrequency = (phrase) => {
  const words = phrase.split(' ')
  return letterFrequency(words)
}

// const userInput = prompt('Write your sentences')
// console.log(wordFrequency(userInput))

//higher order filter
//map - loops and returns an array
//filter - loops and returns an array with matching conditions
//reducer

const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}
// console.log(doubleMap([1, 2, 3]))

//filter([1, 2, 3, 4, 5, 6], 3) [4, 5, 6]
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    } else {

    }
  }
  return result
}
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], 3))

const nums = [1, 2, 3, 4, 5, 6]
// console.log(nums.filter(num => num > 2 || num < 2))

const actors = [
  { name: 'johnny', networth: 100000000 },
  { name: 'amber', networth: 6000000 },
  { name: 'matt', networth: 170000000 },
  { name: 'brad', networth: 300000000 },
  { name: 'leonardo', networth: 26000000 }
]
// let result = actors.filter(actor => actor.networth > 6000000)
// console.log(result)
// let names = result.map(actor => actor.name).join(', ')
// console.log(actors.reduce((prev, curr) => prev + curr.networth, 0))

// playground.innerHTML= `<h1>${names}</h1>`

//reduce

//sum all of the net worths
//SUM: Think reduce
//reduce loops and give you back your accumulator

function sum(a, b) {
  //return
  return a * b
}

// const nu = [1, 2, 3, 4]
// const result = nu.reduce((a, b) => a + b, 0) 
// console.log(result)

// randomFruit([1, 2]) :- 2
// randomFruit([1, 2]) :- 1
const randomFruit = (fruits) => {
  const randomNumber = Math.floor(Math.random() * fruits.length)

  return fruits[randomNumber]
}

let fruits = ['banana', 'apple', 'orange', 'pear']
console.log(randomFruit(fruits))

