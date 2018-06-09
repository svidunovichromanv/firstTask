'use strict';

const readline = require('readline');

const result = {
    name:'',
    age:0,
    surname:'',
    patronymic:'',
    sex: ''    
}

let askName = () => {
    const rl = prompt();
    rl.question('Какое Ваше имя? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Имя не может быть пустым.');
            askName();
        }
        else {
            result.name = answer;
            askSurname();
        }
    });
}
let askSurname = () => {
    const rl = prompt();
    rl.question('Как Ваша фамилия? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Фамилия не может быть пустой.');
            askSurname();
        }
        else {
            result.surname = answer;
            askPatronymic();
        }
    });
}
let askPatronymic = () => {
    const rl = prompt();
    rl.question('Как Вашe отчкство? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Отчество не может быть пустым.');
            askPatronymic();
        }
        else {
            result.patronymic = answer;
            askAge();
        }
    });
}

let askAge = () => {
    const rl = prompt();
    rl.question('Какой Ваш возраст? ', (answer) => {
        rl.close();
        const age = +answer;
        if (isNaN(age)) {
            console.log('Возраст должен быть введен числом.');
            askAge();
        }
        else {
            result.age = age;
            askSex();
        }
    });
}
let askSex = () => {
    const rl = prompt();
    rl.question('Какой Ваш пол? ', (answer) => {
        rl.close();
        const sex = answer;
        if (sex === "м" || sex === "ж") {
            result.sex = sex;
            end();
        } else {
            console.log('Ваш пол должен быть введён так: "м" или "ж".');
            askSex();
        }
    });
}
let writeSex = () => {
  if (result.sex === "м"){
    return "мужской";
  } else {
    return "женский";
  }
}
let writePension = () => {
  if ((result.sex === "м" && result.age >= 63) || (result.sex === "ж" && result.age >= 58)){
    return "вы на пенсии";
  } else {
    return "вы не на пенсии";
  }
}
let prompt = () => readline.createInterface({ input: process.stdin,  output: process.stdout});


let end = () => {
    console.log(`Вы ввели: имя ${result.name}, фамилия ${result.surname}, отчество ${result.patronymic}, возраст ${result.age}, возраст через 5 лет ${result.age + 5}, возраст в днях: ${result.age*365.25}, ваш пол: ${writeSex()}, ${writePension()}`);
}

askName();
