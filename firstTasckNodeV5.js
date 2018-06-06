'use strict';

const readline = require('readline');

const result = {
    name:'',
    age:0
}

function askName() {
    const rl = prompt();
    rl.question('Какое Ваше имя? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Имя не может быть пустым.');
            askName();
        }
        else {
            result.name = answer;
            askAge();
        }
    });
}

function askAge() {
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
            end();
        }
    });
}

function prompt() {
    return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

function end() {
    console.log(`Вы ввели: имя ${result.name}, возраст ${result.age}`);
}

askName();
