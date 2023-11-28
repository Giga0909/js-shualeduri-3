console.log ('test')

// ობიექტების მასივი

const arrayOfUsers = [ { userName: 'giga', age: 16},
{ userName: 'nika', age: 17},
{ userName: 'mari', age: 18}];

const totalAge = arrayOfUsers.reduce((accumulator, user) =>  accumulator + user.age, 0);

console.log(totalAge);


// console.log ში ინპუტების გამოყვანა


function getInputValue() {

    let email = document.getElementById('email').value;
    console.log("email ",  email);

    let password =document.getElementById('password').value;
    console.log('password', password);

    let gender =document.querySelector('select').value
    console.log('gender:', gender )
    
}

// find longest word

const wordsArr = ['batumi', 'tbilisi', 'kutaisi'];

function findLongestWord(words)
{
 longestWord ='';
for(let i= 0; i < words.length; i++)
{ const word = words[i];

    if( word.length > longestWord.length){
        longestWord = word;
    }
    
}
return longestWord;
}
const longestWordInArray = findLongestWord(wordsArr);

console.log('Longest Word in the Array:', longestWordInArray);














