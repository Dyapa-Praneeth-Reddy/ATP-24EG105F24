//4. Find the smallest element in marks array
let marks=[65,87,79,57];
let minimum_marks=marks[0]
for(let mark of marks){
    if(mark<minimum_marks){
        minimum_marks=mark
    }
}
console.log(minimum_marks)
