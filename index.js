const myRemovedList = document.getElementsByTagName("LI");

for (let i = 0; i < myRemovedList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("Remove");
    span.className= "removeBtn";
    span.appendChild(txt);
    myRemovedList[i].appendChild(span);
} 
 

const removeBtn = document.getElementsByClassName("removeBtn");

for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

const list = document.querySelector("ul");

list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

function addElement() {
    const li = document.createElement("li");
    const userInput = document.getElementById("userInput").value;
    const newText = document.createTextNode(userInput);

    li.appendChild(newText);

    if (userInput === "") {
        alert("You should input something!");
    } else {
        document.getElementById("myList").appendChild(li);
    }

    document.getElementById("userInput").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("Remove");
    span.className= "removeBtn";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}