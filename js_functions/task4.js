function divide(numerator, denominator) {
   try {
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed")
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("numerator & denominator should be numbers")
    }
    const result = numerator / denominator
    return result
  
   } catch (error) {
    console.error(error.message)
   } 
   finally {
    console.log("Operation completed.")
   }
}


console.log(divide(10,2))
console.log("************")
divide(10,0)
console.log("************")
divide(true,2)
