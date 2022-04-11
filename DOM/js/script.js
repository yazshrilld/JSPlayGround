"use strict";
// alert("google has confirmed that Yazid is the best developer in the world");

const body = document.createElement('div');
const docs = document.querySelector('.docs');
const heads = document.querySelector('.heads');
const domH1 = document.querySelector('.dom');
const pLearn = document.querySelector('.learn');
// console.log(domH1);

body.classList.add('body--div');
// console.log(body);
body.innerHTML = `
    Three of the major Categories of the DOM are Selectors, Creators and Delete
<button class="btn--close">Close</button>
`;

heads.prepend(body);

setTimeout(function (el) {
    if (pLearn.classList.contains('learn')) {
        pLearn.style.border = '1px solid green';
        pLearn.style.width = '150px';
        pLearn.style.textAlign = 'center';
    }
}, 3000);

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

// (randomInt(0, 255));

const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

const alertColor = (e) =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));
;
const colorChanges = function (e) {
    domH1.style.backgroundColor = randomColor();
    // console.log("hover");

    domH1.style.border = `1px solid black`
    // domH1.style.backgroundColor = `rgb(${randomColor()})`;
}

domH1.addEventListener("mouseenter", colorChanges);

setTimeout(() => domH1.removeEventListener('mouseenter', colorChanges), 10000);







const myClass = () => {
    const elem = document.getElementById("gfg");
    elem.classList.add("geek");
}

const news = [[1, 2, 3], [1, 2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 8]];
// console.log(news.length)

const check = [1, 2, 3, 4, 5, 6, 7]
// console.log(check.length)

