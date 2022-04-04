"use strict";
// alert("google has confirmed that Yazid is the best developer in the world");

const body = document.createElement('div');
const docs = document.querySelector('.docs');
const heads = document.querySelector('.heads');

body.classList.add('body--div');
console.log(body);
body.innerHTML = `
    Three of the major Categories of the DOM are Selectors, Creators and Delete
<button class="btn--close">Close</button>
`;

heads.prepend(body);



const myClass = () => {
    const elem = document.getElementById("gfg");
elem.classList.add("geek");
}

