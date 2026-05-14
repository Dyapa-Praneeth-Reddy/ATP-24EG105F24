//6. Write a function that receives an array as arg and return their sum
let sumOfArray=(array)=>{
    let sum=0
    for(let value of array){
        sum += value
    }
    return sum
}
let result=sumOfArray([123,24,54,756])
console.log(result)

