const inputbox= document.getElementById("todo-input");
const listcontainer = document.getElementById("list-container");
//code input alert create li in ul
function AddTask(){
    if(inputbox.value === ''){
        alert("Plase write down your task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value ="";
    savaData();
}
//code check and romove task
listcontainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savaData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        savaData();
    }
},false);
//code store data
function savaData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
//code display data
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showTask();