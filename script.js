targetBottom = document.querySelector(".bottom");
targetInput = document.querySelector(".input-name")

function addPeople() {
    let name = targetInput.value;
    targetInput.value = "";
    if (name === "") { return }
    let newElem = document.createElement('div');
    newElem.setAttribute('class', 'float');

    //IMAGE
    let newAvatar = document.createElement("img");
    newAvatar.src = "./images/avatar.png";

    //NAME
    let newName = document.createElement('p');
    newName.innerHTML = name;
    newName.setAttribute('class', 'name');

    //REMOVE
    let newDel = document.createElement('button');
    newDel.innerHTML = 'x';
    newDel.setAttribute('class', "del");
    newDel.addEventListener("click", function handleClick(event) {
        targetBottom.removeChild(event.target.parentElement);
    });


    newElem.appendChild(newAvatar);
    newElem.appendChild(newName);
    newElem.appendChild(newDel);
    targetBottom.appendChild(newElem);
}