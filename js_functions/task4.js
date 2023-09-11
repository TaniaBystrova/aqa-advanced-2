function devide(numerator, denominator) {
   try {
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed")
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Please enter number")
    }
    const result = numerator / denominator
    return console.log(result)
  
   } catch (error) {
    console.error(error.message)
   } 
   finally {
    console.log("Operation completed.")
   }
}


devide(10,2)
console.log("************")
devide(10,0)
console.log("************")
devide(true,2)
