"use strict";
// alert("everything good");

// let boss = new Object();
// boss.name = "Aderemi";
// boss.country = "Nigeria";
// boss.job = "Full Stack";
// boss.personality = function() {
//     console.log(this.job);
// };


// console.log(boss);

//using object literals

// let newBoss = {
//     names: "Aderemi",
//     country: "Nigeria",
//     job: "Full Stack",
//     personality() {
//         console.log(this.days);
//     }
// };


// let newBoss = {};
// Object.defineProperty(newBoss,
//     "country", {
//     writeable: false,
//     value: "Nigeria",
// },

// );

// console.log(newBoss.country);
// // newBoss.country = "Poland";// this throws an error as a rsult of line 30
// console.log(newBoss.country);

// //exploiting the accessor property
// let exam = {
//     year_: 2017,
//     subject: 1,
// }
// console.log(exam.year_);
// Object.defineProperty(exam, "year", {
//     get() {
//         return this.year_;
//     },
//     set(checkValue) {
//         console.log(`At getter, year_ is: ${checkValue}`);
//         if (checkValue > 2017) {
//             this.year_ = checkValue;
//             console.log(`This is the current year: ${checkValue}`);
//             this.subject = checkValue - 2017;
//         }
//     }
// });
// // console.log(exam.year);
// exam.year = 2020;
// // console.log(exam.year_);
// console.log(exam.subject);

// Merging Obects
// let place, store, result;
// result = {},
// place = {};
// store = {
//     id:"src",
//     ball:"soccer",
// }

// result = Object.assign(place,store); //there is order of preference here, it takes the first arguement as identical (===) 
// console.log(result.ball);
// console.log(store.ball);
// // console.log(store);
// console.log(result === store);

// let spoon, shoe, glass, res;
// spoon = {id:"first"};
// shoe = {id:"second"};
// glass = {id:"third"};

// res = Object.assign(spoon,shoe,glass);
// console.log(res);

//Object Identity and Equality
// console.log(true === 1);

//Property Value Shorthand
// let school = "ECLC";
// let yazid = {
//     school,
// }
// console.log(yazid.school);

// const genderKey = "male";
// const ageKey = "age";
// const schoolKey = "ECLC";
// const akaKey = "smooth";
// let uniqueToken = 0;

// function getUniqueKey(key) {
//     return `${key}_${uniqueToken}`;
// };

// let person = {
//     [getUniqueKey(genderKey)]: 'Matt',
//     [getUniqueKey(ageKey)]: 27,
//     [getUniqueKey(schoolKey)]: 'Software engineer',
//     [getUniqueKey(akaKey)]: 'Yazid'
// };

// console.log(person);

//Destructuring
// let student = {
//     classes: 'Grade-1',
//     age: 18
// };
// let { classes, job = 'Software engineer' } = student;
// console.log(classes);
// console.log(job);

// let personClass, personAges;
// let person = {
//     classes: 'Grade-2',
//     age: 27
// };
// ({ classes: personClass, age: personAges } = person);
// console.log(personClass, personAges);

//Nested Destructuring
//Partial Destructuring Completion
// let mySchool, myFood, mySubject;
// let yazid = {
//     school: 'ECLC',
//     totalSubject: 19
// };


// try {
//     ({ school: mySchool, totalSubject: mySubject, food: { rice: myFood } } = yazid);
// } catch (error) {

// }
// console.log(mySchool, mySubject, myFood);

//TASK-1{Pass and Copy all properties in one object to another object}

// let games, coach, clubs;
// games = {},
// coach = {
//     klopp:"premier league",
//     morinho:"la liga",
//     anceloti:"dutch",
// };
// clubs = {
//     england:"liverpool",
//     spain:"barcelona",
//     germany:"dortmund",
//     turkey:"besiktas",
//     brazil:"santos",
// }

// games = Object.assign(coach,clubs); //there is order of preference here, it takes the first arguement as identical (===) 
// console.log(games);
// console.log(games.germany);
// // console.log(store.ball);
// // console.log(store);
// console.log(games === coach);

//filter some values
// const filteredGames = Object.keys(games).filter(key => {
//     key.includes("spain")
// });


