
const element = document.getElementById('main');
element.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "____ is the champion!";
newHeader.className = "victory";