function counter(num) {
    console.log(num)
    if (num > 1) {
        return counter(num - 1) 
   // } else {
       // return "Stop function!"
   // }
}
}

const result = counter(5)
console.log(result)

//function counter(num) {
   // console.log(num)
   // if (num > 1) {