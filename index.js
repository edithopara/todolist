const itemTemplate = document.querySelector(".item");
const addButton = document.getElementById("add");
const checked = document.getElementsByClassName("item-completed")





addButton.addEventListener("click", function(e) {  
let input = document.createElement('input');
input.placeholder = 'To do item...';
itemTemplate.appendChild(input);
input.classList.add('item-description', 'item');


});







    



