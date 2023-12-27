let fruit = []  //creating empty array named fruit
console.log(fruit)
fruit.push("apple","banana","orange")//adding following fruits to the array
console.log(fruit)
fruit.splice(0,1) //removing the first fruit from the array we also use shift method to remove the first array element
console.log(fruit)
fruit.push("grape")//adding grape to the last of the array
fruit[1] = "pear"//updating second element of the array to the pear
console.log(fruit)


//question 2

let person = {

}
person.name = "john" //adding follwing values to the empty object name person
person.age = 30
person.city = "New York"
console.log(person) //checking the value is inserted in empty object
delete person.age;//removing the age from object person
console.log(person)
person.job = "Engineer"
console.log(person)
person.city = "San Francisco"//update the value of city to the object person
console.log(person)


//Question3
let cars = []
console.log(cars)
let car1 = {
    make: "Toyata",
    model: "Camary",
    year : "2018"

} 
let car2 = {
    make: "Honda",
    model: "Accord",
    year: 2020
}
let car3={
    make: "Ford",
    model: "Mustang",
    year: 2022
}
cars.push(car1,car2,car3)//adding 3cars to the empty array
console.log(cars)

cars.splice(0,1)//removing the first car object to the array
console.log(cars)

let newcar = {
    make: "Honda",
    model: "Civic",
    year: 2020
}
cars.push(newcar)//Adding new car to the array object
console.log(cars)
car3.model = "Accord"//updating second car  model  in array to Accord
console.log(cars) // final array object is printed