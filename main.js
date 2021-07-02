// print function js
// alert("warning");

// print 2nd function js
// document.write("I warning you");

// print 3rd function js
// console.log("Last warning for you");

// typeof("rakib");//string
// typeof(2565559);//number
// typeof("true");//boolean

// variables
// var example ="messi";// dynamic intalize
// document.write(example);

// var age;
// var nam;

// age = 20;
// nam = "rik";

// document.write(nam);
// document.write(age);

// number method | toFixed | toPrecision

// var num1 = 4.45823825;

// console.log(num1.toFixed(3));// point after value see
// console.log(num1.toPrecision(2));// all charcter value see
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("55"));

// var num2 = "30";
// num2 = parseInt(num2);// int type parseInt and float type parseFloat

// console.log(typeof(num2));

// var num = 52;
// num = toString(num);

// console.log(typeof(num));
// Library functions for string
// var text = prompt("enter any word:");
// var len = text.length;
// document.write("number of char = " + len + "<br/>");

// var text1 = "Finland";
// var ch = text1.charAt(4);
// document.write(ch + " <br/>");
// document.write(text1.toUpperCase(ch));
// document.write(text1.toLowerCase(ch));
// document.write(text1.to(ch));

// var text2 = " is the happiest country";
// document.write(text1.concat(text2));
// document.write("<br/>" + text1.slice(3,6));// slice mean bad deya 6-3=3

// Arithmetic and assignment operator
// Arithmetic ------> {+,-,*,/,%(modulus),**(exponent),++(incriment),--(dicriment)} ++a(pre incriment), a++{post incriment};
// Assignment ------> {=,=+,=-,=*,=/,%=,**=}
//  var a = 9;
// a += 8;
// document.write(a);

// simple calclutor
// var x,y,z,a,resualt,add,sub,mul,div,rem,exp;

// x = prompt("enter first number: ");
// y = prompt("enter second number: ");
// z = parseInt(x,10);
// a = parseInt(y,10);

// add = z+a;
// sub = z-a;
// mul = z*a;
// div = z/a;
// rem = z%a;
// exp = z**a;

// document.write("Addition " + "( " + z + "+" + a + " ) " + "=" + add + "<br/>");
// document.write("Subtration "+ "( " + z + "-" + a + " ) " + "=" + sub + "<br/>");
// document.write("Multiplication " + "( " + z + "*" + a + " ) " + "=" + mul + "<br/>");
// document.write("Divison " + "( " + z + "/" + a + " ) " + "=" + div + "<br/>");
// document.write("Reminder " + "( " + z + "%" + a + " ) " + "=" + rem + "<br/>");
// document.write("Exponent " + "( " + z + "**" + a + " ) " + "=" + exp);

// Area of various shapes

// Square
// var base, height,area;
// base = parseFloat(prompt("Enter base number = "));
// height = parseFloat(prompt("Enter height number = "));
// area = base * height;
// document.write("Square Area =" + area);

// Trinagle
// var base, height,area;
// base = parseFloat(prompt("Enter base number = "));
// height = parseFloat(prompt("Enter height number = "));
// area = (base * height)/2;
// document.write("Triangle Area =" + area);

// Temperature formula
// var cel, fer;
// cel = parseFloat(prompt("Enter celsius number = "));
// fer = ((9/5) * cel) + 32;
// document.write("Cel to fer = " + fer);

// fahrenheit to celsius
// var cel, fer;
// fer = parseFloat(prompt("Enter fahrenheit number = "));
// cel = (fer-32) * (5/9);
// document.write("fahrenheit to celsius = " + cel);

// Relational and Logical Operator
// Relational-------> >,=>,<=,<,!=,==,===,!==
// Logical----------> &&,||,!

// letter grade
// var num

// vowel or consonant find use if,else
// var letter;
// letter = prompt("enter any letter :");
// letter = letter.toLowerCase();

// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
//     document.write("vowel");

// else
//     document.write("consonant");

// vowel or consonant find use switch
// var letter;
// letter = prompt("enter any letter :");
// letter = letter.toLowerCase();

// switch (letter) {
//     case "a":
//         document.write("vowel");
//         break;
//     case "e":
//         document.write("vowel");
//         break;
//     case "i":
//         document.write("vowel");
//         break;
//     case "o":
//         document.write("vowel");
//         break;
//     case "u":
//         document.write("vowel");
//         break;
//     default:
//         document.write("consonant");
// }
// multiple
// switch (letter) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         document.write("vowel");
//         break;
//     default:
//         document.write("consonant");
// }

// for loop
// Even number 2+4+6+8....+100
// for (var a = 2; a <=100 ; a=a+2) {
//     document.write(" " + a );
    
// }

// odd number 1+3+5+7+9....+99
// for (var a = 1; a <=99 ; a = a-2) {
//     document.write(" " + a );
    
// }

// while loop
// Even number 2+4+6+8....+100
// var i = 2;
// while (i<=100) {
//     document.write(" " + i );
//     i = i + 2;
// }

// odd number 1+3+5+7+9....+99
// var i = 1;
// while (i<=100) {
//     document.write(" " + i );
//     i = i - 2;
// }

// do while loop
// var x = 1;
// do {
//     document.write(" " + x );
//     x++;
// } while (x<=100);

// ternary operator
// var num = Number(prompt("enter any number"));
// var result = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// console.log(result);

// calling funtion
// function square(num) {
//     var num = num * num;
//     console.log(num);
// }
// square(5);
// square(6);
// var num1 = Number(prompt("enter 1st number"));
// var num2 = Number(prompt("enter 2nd number"));

// function square(num1,num2) {
//     var num = num1 * num2;
//     return num;
// }
// console.log(square(num1,num2));

// Array one formula
// var country = new Array(5);
// country[0]="Pakistan";
// country[1]="India";
// country[2]="Iran";
// country[3]="Iraq";
// country[4]="Vitnam";
// console.log(country);

// Array second formula
// var country = ["Nepal","Butan","Uk","Us","Turkey"];
// console.log(country);
// country.push("Bangladesh");
// country.push("Japan");
// console.log(country);
// country.pop()
// console.log(country);

// Array related methods
// var num = [2,10,5,5,-6,0,50,60,20,40,55,40,-5];
// num.sort(function(a,b) {
//     // 1. < 0 ..... a comes first
//     // 2. 0 ..... nothing will be changed
//     // 3. > 0 ..... b comes first
//     return a-b;
// })
// console.log(num);

// var num = [2,10,5,5,-6,0,50,60,20,40,55,40,-5];
// num.sort();
// console.log(num);
// var num = ["me","She","anik","lol","OP",5];
// num.sort();
// console.log(num);

// Array Loop
// var num = [10,50,60,20,40,55];
// var sum = 0;
// for (var i=0 ; i<6; i++) {
//     console.log(num[i]);
//     sum = sum + num[i];
// }
// console.log("sum = " + sum);

// object
// function Student(name,age,cgpa,lang) {
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;

//     this.display = function () {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);
//     }
// }
// var studentOne,studentTwo,studentThree;
// studentOne = new Student("Rakibul Islam",20,5,["bengali","hindi","english"]);
// studentTwo = new Student("Nazrul Islam",22,4.5,["bengali","hindi","english"]);
// studentThree = new Student("Sakib Islam",21,4.8,["bengali","hindi","english"]);
// studentOne.display();
// studentTwo.display();
// studentThree.display();

// math object

// Guessing Game
// var guessNumber,randomNumber,youWon,youLoss;
// youWon = 0;
// youLoss = 0;
// for (var i = 0; i <= 9; i++) {
//     guessNumber = parseInt(prompt("Enter a number from 1 to 10"));
//     randomNumber = Math.floor(Math.random() * 9) +1;
// if (guessNumber == randomNumber) {
//     console.log("you won the game & you are a lucky person");
//     youWon++;
// }
// else{
//     console.log("you lost the game & you are a unlucky person " +" random number is = "+ randomNumber);
//     youLoss++;
// }
// }
// document.write("Total number of won = " + youWon + '<br/>');
// document.write("Total number of loss = " + youLoss );

// Date time methods
// var year,day,month,min,hour,sec,date;
// date = new Date();
// console.log(date);
// year = date.getFullYear();
// console.log("year = " + year);
// day = date.getDay();
// console.log("day = " + day);
// month = date.getMonth();
// console.log("month = " + month);
// min = date.getMinutes();
// console.log("min = " + min);
// hour = date.getHours();
// console.log("hours = " + hour);
// sec = date.getSeconds();
// console.log("sec = " + sec);

// DOM document object model
// document.getElementsByTagName("h1")[0].innerHTML = "Hello";
// document.getElementById('he').innerHTML = "He";
// document.getElementsByClassName("she")[0].innerHTML = "She";
// // query selector
// var lol = document.querySelector("a");
// lol.innerHTML = "Contact";
// document.querySelector(".menu li a small").innerHTML = "knock me";
// document.querySelector("#lol li a ").innerHTML = "bangla";
// practise
// document.write("<h4 style='display:inline-block;margin:0;padding:10px;'>Name:</h4> Rakibul Islam <br/>");
// document.write("<h4 style='display:inline-block;margin:0;padding:10px;'>Institute:</h4> Dhaka Polytechnic")
// var y,sum;
// y = 1;
// sum = 0;

// while (y<=100) {
//     if (y % 4 == 0 && y % 6 == 0) {
//         sum = sum + y;
//         document.write(" " + y + "+" );
//     }
//     y = y + 1;
    
// }
// document.write(" sum= " + sum );

// 2+4+6+8+10=?
// var i,sum;
// i = 2;
// sum=0;
// while (i<=10) {
//     document.write(" sum= " + sum );
//     sum = sum+i;
// }
// largest number
// var one_num = Number(prompt("enter one number"));
// var sec_num = Number(prompt("enter sec number"));
// var thid_num = Number(prompt("enter thid number"));

// var result = one_num > sec_num ? "One large" : sec_num > thid_num ? "Sec large" : "Thid large";
// console.log(result)
// var btnOne = document.querySelector("#on");
// function clickMe(){
//     btnOne.src = "bulb2.png";
// }

// function clickMe1(){
//     btnOne.src = "bulb1.png";
// }
// var photos = ["portfolio1.jpg","portfolio2.jpg","portfolio3.jpg"];
// var imgTag = document.querySelector("#imgtag");
// var count = 0;
// function next() {
//     count++;
//     if (count >= photos.length) {
//         count = 0;
//         imgTag.src = photos[count];
//     }
//     else{
//         imgTag.src = photos[count];
//     }
    
// }
// function previous() {
//     count--;
//     if (count < 0) {
//         count = photos.length -1;
//         imgTag.src = photos[count];
//     }
//     imgTag.src = photos[count];
// }