/*7. Write a function that receives an array & search element as args and returns the index of that 
 search element in the array. It should return "not found" when search element not found.*/
let searchElement=(array, search_element)=>{
    for(let value of array){
        if(value===search_element){
            return "element found at "+array.indexOf(value)
        }   
    }
    return "element not found"
}       
let result=searchElement([123,24,54,756], 54)
console.log(result)
