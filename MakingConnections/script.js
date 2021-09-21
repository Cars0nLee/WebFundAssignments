var newname = "Carson Lee";

function change() {
    document.querySelector(".user-card h1").innerText = newname;
    console.log(newname);
}

var count = 2;
var count2 = 500;


function remove() { 
    document.querySelector(".card-list-item").remove();
    count--;
    document.querySelector("#badge1").innerText = count;
    document.querySelector("#badge2").innerText = count2;
}

function add() {
    document.querySelector(".card-list-item").remove()
    count--;
    count2++;
    document.querySelector("#badge1").innerText = count;
    document.querySelector("#badge2").innerText = count2;
}

