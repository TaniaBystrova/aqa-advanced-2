//Function Declaration
function calculateArea1(width, heigth) {
    return width * heigth
}
console.log(calculateArea1(5,10))

// Function Expression
const calculateArea2 = function(width, heigth) {
    return width * heigth  
}
console.log(calculateArea2(20,50))

// Arrow Function
const calculateArea3 = (width, heigth) =>{
    return width * heigth  
} 
console.log(calculateArea3(2,4))