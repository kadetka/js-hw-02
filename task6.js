//Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();  
    }
}
console.log(list)