// Write your code here!

const element = document.querySelector('main')
element.remove()
const newHeader = document.createElement('h1')
newHeader.innerHTML = ('victory')
newHeader.id = 'victory'
document.body.appendChild(newHeader)
newHeader.innerHTML += 'Roman is the champion'
console.log("log \/")
//console.log(element)