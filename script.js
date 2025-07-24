const inputEle = document.querySelector(".input");

const bodyEle = document.querySelector("body");


inputEle.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if(inputEle.checked){
        bodyEle.style.backgroundColor = "black";
    }else{
        bodyEle.style.backgroundColor = "white";
    }
}

inputEle.addEventListener("input", ()=> {
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEle.checked));
}


