//Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 321, 5! = 54321. С помощью циклов вычислить факториал числа 10. Использовать for.

let number = 10; //до какого числа включительно считать произведение
let factorial = 1;

for(let i = 1; i <= number; i++){
    factorial *= i;
}
console.log(factorial);