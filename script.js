let headTitle = document.querySelector('h1');
headTitle.innerText =headTitle.innerText+' procoder'
//change text 
let boxes =document.querySelectorAll('.box')
boxes[0].innerText ="bandita"
boxes[1].innerText ="bandita"
boxes[2].innerText ="bandita"
let newNum = 1
for(box of boxes){
    box.innerText=`bandita ${newNum}`
    newNum++;
};
//Add Element
let learnBtn =document.createElement('button')
learnBtn.innerText = 'Learn more';
let babitaArea = document.querySelector('.babita');
babitaArea.append(learnBtn);
babitaArea.prepend(learnBtn);
babitaArea.before(learnBtn);

//Add Element
/*function addFruits(nameFruits){
    const li = document.createElement('li');
    li.innerHTML =`$(nameFruits)`;

    document.querySelector('ul').appendChild(li);
}
addFruits('Guava');*/
//optimized way
function addFruitsOP(nameFruits){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nameFruits));
    document.querySelector('ul').appendChild(li);
}
addFruits('Orange');
addFruits('cherry');
//Edit
const editFruits = document.querySelector('li:first-child')
//console.log(editFruits)
editFruits.innerText = 'bluebarry'
editFruits.Textcontent = 'bity'
const newFruits = document.createElement('li')
newFruits.textcontent = 'strawberry'
editFruits.replaceWith(newFruits)
//Edit with tag
const editTag = document.querySelector('li:last-child')
editTag.outerHtml = '<p>Lemon</p>'
//Remove
editTag.remove();