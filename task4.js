//На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let strn = 'JavaScript is a pretty good language';
let newStrn = '';

for(let i = 0; i < strn.length; i++){
    if(strn[i-1]===' '){
        newStrn += strn[i].toUpperCase();
    }else{
        newStrn += strn[i];
    }
}
newStrn = newStrn.split(' ').join('');

console.log(newStrn)