console.log("hello");
const h1DOM = document.getElementsByTagName("h1")[0];
console.log(h1DOM);

const text = h1DOM.innerText;
console.log(text); // grazoma TIK teksta

const text2 = h1DOM.textContent;
console.log(text2); // grazina teksta su tarpais

const newText = text.trim().replace("Hello", "Alloha");
h1DOM.innerText = newText;
