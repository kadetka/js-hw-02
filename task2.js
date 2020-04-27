//Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let string = 'tseb eht ma i';
let newString = '';

for(let i = string.length -1; i >= 0; i--){
   newString += string[i];
}
console.log(newString);
