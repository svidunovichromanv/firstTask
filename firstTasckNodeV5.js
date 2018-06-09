'use strict';

var readline = require('readline');

var result = {
    name:'',
    age:0,
    surname:'',
    patronymic:'',
    sex: ''    
}

function askName() {
    var rl = prompt();
    rl.question('Какое Ваше имя? ', function (answer) {
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
function askSurname() {
    var rl = prompt();
    rl.question('Как Ваша фамилия? ', function(answer) {
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
function askPatronymic() {
    var rl = prompt();
    rl.question('Как Вашe отчкство? ', function(answer) {
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

function askAge() {
    var rl = prompt();
    rl.question('Какой Ваш возраст? ', function(answer) {
        rl.close();
        var age = +answer;
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
function askSex() {
    var rl = prompt();
    rl.question('Какой Ваш пол? ', function(answer) {
        rl.close();
        var sex = answer;
        if (sex === "м" || sex === "ж") {
            result.sex = sex;
            end();
        } else {
            console.log('Ваш пол должен быть введён так: "м" или "ж".');
            askSex();
        }
    });
}
function writeSex() {
  if (result.sex === "м"){
    return "мужской";
  } else {
    return "женский";
  }
}
function writePension() {
  if ((result.sex === "м" && result.age >= 63) || (result.sex === "ж" && result.age >= 58)){
    return "вы на пенсии";
  } else {
    return "вы не на пенсии";
  }
}
function prompt() { 
  return readline.createInterface({ input: process.stdin,  output: process.stdout});
};


function end() {
    console.log("Вы ввели: имя " + result.name + ', фамилия ' + result.surname +', отчество ' + result.patronymic + ', возраст ' + result.age + ', возраст через 5 лет ' + result.age + 5 + ', возраст в днях: ' + result.age*365.25 + ', ваш пол: ' + writeSex() + ", " + writePension());
}

askName();
