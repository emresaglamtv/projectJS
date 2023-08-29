//Add
const buttonAdd = document.getElementById("addButton");
const targetContainer = document.getElementById("container");

buttonAdd.addEventListener("click", function () {
    targetContainer.classList.add("fancy", "add", "addMetod");
    // const classNames = targetContainer.classList;
    // document.getElementById("pAdd").innerHTML = "Class ekledikten sonra liste: " + classNames;
})

//Remove
const buttonRemove = document.getElementById("removeButton");

buttonRemove.addEventListener("click",function(){
    targetContainer.classList.remove("fancy");
    
})

// //Replace
const buttonReplace = document.getElementById("replaceButton");

buttonReplace.addEventListener("click", function(){
    targetContainer.classList.replace("fancy", "glaudy");
})

//Item
const buttonItem = document.getElementById("itemButton")

buttonItem.addEventListener("click", function(){
    alert("İlk eklenen class: " + targetContainer.classList[0])
})

//Contains
const buttonContains = document.getElementById("containsButton");

buttonContains.addEventListener("click", function(){
    alert(targetContainer.classList.contains("fancy"))
})









