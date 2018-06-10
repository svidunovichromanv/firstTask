
class Person {
  constructor(name) { // Конструктор
    this._name = name;
  }
}
class Man extends Person {
  constructor(name) {
    super(name);
    this._maritalStatus = false;
    this._wife;
  }
  getMarry(pers) {
    if(pers instanceof Woman && !this._maritalStatus){
      this._maritalStatus = true;
      this._wife = pers._name;
      pers._maritalStatus = true;
      pers._husband = this._name;
      console.log("Совет да любовь!!!");
    }else{
      console.log("Окстись, окаянный!!!");
    }
  }
  isMarry(pers) {
    if(this._wife === pers._name){
      console.log("Да, мы же их женили");
    }else{
      console.log("Не-а");
    }
  }
}
class Woman extends Person {
  constructor(name) {
    super(name);
    this._maritalStatus = false;
    this._husband;
  }
  getMarry(pers) {
    if(pers instanceof Man && !this._maritalStatus){
      this._maritalStatus = true;
      this._husband = pers._name;
      pers._maritalStatus = true;
      pers._wife = this._name;
      console.log("Совет да любовь!!!");
    }else{
      console.log("Окстись, окаянная!!!");
    }
  }
  isMarry(pers) {
    if(this._husband === pers._name){
      console.log("Да, мы же их женили");
    }else{
      console.log("Не-а");
    }
  }
}

const vitaly = new Man('Vitaly');
const roman = new Man('Roman');
const anna = new Woman('Anna');
const sveta = new Woman('Sveta');
vitaly.getMarry(roman);
anna.getMarry(sveta);
vitaly.getMarry(anna);
roman.getMarry(sveta);
roman.isMarry(anna);
sveta.isMarry(vitaly);
roman.isMarry(sveta);
anna.isMarry(vitaly);