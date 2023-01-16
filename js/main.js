// console.log("hello");
const h1DOM = document.getElementsByTagName("h1")[0];
// console.log(h1DOM);

const text = h1DOM.innerText;
// console.log(text); // grazoma TIK teksta

const text2 = h1DOM.textContent;
// console.log(text2); // grazina teksta su tarpais

const newText = text.trim().replace("Hello", "Alloha");
h1DOM.innerText = newText;

console.log([h1DOM]);

console.log(h1DOM.classList);
for (const item of h1DOM.classList) {
  console.log(item);
}

// h1DOM.classList.add("green");

const colors = ["green", "red", "yellow"];
for (const color of colors) {
  h1DOM.classList.add(color);
}

h1DOM.classList.remove("yellow"); //pasalyna
h1DOM.classList.toggle("red"); //jeigu yra pasalyna, jeigu nera prideda.

const arTuri1 = h1DOM.classList.contains("cipolinas");
// console.log(arTuri1);
const arTuri2 = h1DOM.classList.contains("green");
// console.log(arTuri2);

// const buttonDOM = document.querySelectorAll("button");
// console.log(buttonDOM);

function labas() {
  console.log("labas...");
}

// buttonDOM.addEventListener("click",  () => {
//     console.log('Wowa Wiwa!');
// });

// buttonDOM.addEventListener("click", labas);
// h1DOM.addEventListener("click", labas);
// h1DOM.onclick = labas;
// const minusDom = buttonDom[0];
// const plusDom = buttonDom[1];

let score = 0;

const scoreDOM = document.querySelector(".score");

const [minusDOM, plusDOM] = document.querySelectorAll("button");

minusDOM.addEventListener("click", () => {
  scoreDOM.innerText = --score;
});

plusDOM.addEventListener("click", () => {
  scoreDOM.innerText = ++score;
});
