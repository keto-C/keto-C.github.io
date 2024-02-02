
const body = document.body
const tasks = document.querySelector("#tasks");
const newTsks = document.querySelector(".newTasks");
const button = document.getElementById("push");
button.addEventListener("click", newElement); 
const inputField = document.getElementById("ini");
inputField.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
});

function newElement(){
    const div = document.createElement("li");
    div.className = "task"
    const boxy = document.createElement("INPUT");
    boxy.setAttribute("type", "checkbox");
    div.append(boxy);
    const inputVal = document.getElementById("ini").value;
    const t = document.createTextNode(inputVal);
    const delButton= document.createElement('button');
    delButton.innerText= "Delete";
    delButton.className="delete";
    delButton.addEventListener("click", function(){
        this.parentElement.remove();
    })
    if(inputVal == ""){
        alert("ra taski davamato aba me ravici" + '\n' + "chawere rame dzmurad");
    }
    else {
        const p = document.createElement("P");
        p.append(t);
        div.append(p);
        div.append(delButton);
        newTsks.append(div)
    }
    const ini = document.getElementById("ini");
    ini.value = "";
    ini.focus();

}

