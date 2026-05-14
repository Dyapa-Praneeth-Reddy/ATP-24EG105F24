//5. Write a function that receives 3 number arguments and  return the big number 
const greatest=(a,b,c)=>{
    console.log(a>b&&a>c?`${a} is greater`:b>c?`${b} is greater`:`${c} is greater`)
}
greatest(234,546,324)