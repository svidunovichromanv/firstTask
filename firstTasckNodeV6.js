function toNormalCase(str){
      str = str.toLowerCase()
      return str[0].toUpperCase() + str.slice(1);
    };
    function isFail(str){
      if (str==" " || !isNaN(str)){
      var n = 0;
      while ( n <= 2 ) {
        str = prompt("Введите, пожалуйста, корректно", " ");
        if (str!==" " && isNaN(str)) break;
        n++;
        }
      }
      if (str==" " || !isNaN(str)) return str = "FAIL";
      return str;
    };
    function getFullName(s, n, p){
      s = toNormalCase(s);
      n = toNormalCase(n);
      p = toNormalCase(p);
      return s + " " + n + " " + p;
    };
    var surname = prompt("Введите вашу фамилию", " ");
    surname = isFail(surname);
    var name = prompt("Введите ваше имя", " "); 
    name = isFail(name);
    var patronymic = prompt("Введите вашу отчество", " ");
    patronymic = isFail(patronymic);
    var age = prompt("Введите ваше количкство полных лет", " ");
    if (isNaN(age) || age <= 0 || age > 150){
      age = prompt("Введите корректно", " ");
      if (isNaN(age) || age <= 0 || age > 150) age = "FAIL";
    }
    age = Math.floor(+age);
    var after5 = age + 5; 
    var ageDay =  Math.floor(age*365.25); 
    var sex = confirm("Вы мужчина?");
    if (sex == true){
      if (age >= 63) {
        var pension = "да";
      } else {
        pension = "нет";
      }    
    } else {
      if (age >= 56){
        pension = "да";
      } else {
        pension = "нет";
      } 
    }
    if (sex == true){
      sex = "мужской";
    } else {
      sex = "женский";
    }
    document.body.innerHTML ="<p>ваше ФИО: " + getFullName(surname, name, patronymic) + "</p>" + "<p>ваш возраст в годах: " + age + "</p>" + "<p>ваш возраст в днях: " + ageDay + "</p>" + "<p>через 5 лет вам будет: " + after5 + "</p>" + "<p>ваш пол: " + sex + "</p>" + "<p>вы на пенсии: " + pension + "</p>";