//На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let str = 'i am in the easycode';
let newStr = '';

for(let i = 0; i < str.length; i++){
    if(str[i-1]===' ' || str[i] === str[0]){
        newStr += str[i].toUpperCase();
    }else{
        newStr += str[i];
    }
}
console.log(newStr)