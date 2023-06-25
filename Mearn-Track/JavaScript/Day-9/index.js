//factory pattern

// function employee(id,nm,sal){

//     return {
//         id:id,
//         name:nm,
//         salary:sal
//     }
// }

// var emp5=employee(1,"ali",1000)
// var emp2=employee(2,"salma",2000)

// ---------------------------------------------------------

//constructor function

// function Employee(id,nm,sal){

//     this.id=id;
//     this.name=nm;
//     var salary=sal;//private member variable

//     this.getSalary=function(){
//         return salary
//     }
//     this.setSalary=function(val){
//      if(typeof val=='number'){
//         salary=val;
//      }
//     }

//     function privateFun(){//private method
//         console.log(this);
//         console.log(this.id,salary);
//     }
//     privateFun.call(this)

// }

// Employee.prototype.display=function(){
//         console.log(this.name,this.id);
//     }

// Employee.prototype.x=function(){//function overloading
//     if(arguments.length==2){
//         if(typeof arguments[0]=='number'&&typeof arguments[1]=='number'){
//             console.log(arguments[0]+arguments[1]);
//         }else{
//             console.log(arguments[0] , arguments[1]);
//         }
//     }else if(arguments.length==0){
//         console.log("there is no arguments");
//     }

// }

// var emp1=new Employee(1,"ali",2000)
// var emp2=new Employee(2,"lara",3000)

// {
//     id:1,
//     name:"ali",
//     salary1;2000,
//     display:function(){
//         console.log(this.name,this.id);
//     }
// }

// var emp2=new Employee(2,"a55li",2000)

// {
//     id:2,
//     name:"ddd",
//     salark:252,
//     display:function(){
//         console.log(this.name,this.id);
//     }
// }

// function test(a,b){
//     console.log("first test",a,b);
// }

// function test(x){
//     console.log("second test",x);
// }

// test(2,5,2)

///////////////////////////////////////////////////////////

function Person(nm, ag) {
  if (this.constructor == Person) {
    throw "This is Abstract";
  }
  this.name = nm;
  this.age = ag;
}
Person.prototype.printData = function () {
  console.log(this.name, this.age);
};

// var p1=new Person("no name",20)

function Student(nm, ag, id, deg) {
  Person.call(this, nm, ag);
  this.id = id;
  this.degree = deg;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.displayStudent = function () {
  console.log(this.id, this.degree);
};
//overriding
Student.prototype.printData = function () {
  console.log("test");
};
//static
Student.y = 0;
Student.printY = function () {
  console.log(Student.y);
};

Student.prototype.constructor = Student;

var std1 = new Student("ali", 19, 1, 80);
