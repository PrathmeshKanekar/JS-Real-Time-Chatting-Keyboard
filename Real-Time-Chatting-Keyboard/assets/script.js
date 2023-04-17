function home() {
    document.getElementById("mid").style.display = "none";
    // document.getElementById("mid").style.backgroundColor = "black";
}
function home1() {
    document.getElementById("mid").style.display = "block";

}


function text() {
    document.getElementById("keyboard").style.display = "block";
    document.getElementById("inp").style.top = "53px";
    // document.getElementById("keyboard").style.top = "0px";
}
function element(ctrl) {
    let target = document.getElementById("target");
    let value = target.value;
    target.value = value + ctrl.innerText;
}
// function upper(){
//     let text = document.getElementById("keyboard").innerHTML;
//     document.getElementById("keyboard").innerHTML = text.toUpperCase();
    
// }


//     let x = document.getElementById("case");
//    x.addEventListener("click",thirtyn);
// // document.getElementById("case").addEventListener("click",thirtyn);
//     function thirtyn() {
//         let text = document.getElementById("keyboard").innerHTML;
//         document.getElementById("keyboard").innerHTML = text.toLowerCase();
//     }
//     function stop(){
//         x.removeEventListener("dblclick",thirtyn);
//         // upper();
//     }



function thirtyse() {
    let back = document.getElementById("target").value;
    document.getElementById("target").value = back.slice(0, -1);
}
function thirtye() {
    document.getElementById("target").value += " ";
}

// let a = document.getElementById("target");
// document.addEventListener("keypress", (event) => {
//     a.value += event.key;
// })


let array = [];
function send() {
    // let array = [];
    let data = document.getElementById("target")

    // let p = document.getElementById("show").innerHTML = I;
    if (data.value == "") {
        alert("Please Enter MSG");
    }
    else {
        array.push(data.value);
        data.value = "";


    }
    display();


}

function display() {
    let text = "<ul>";
    for (let i = 0; i < array.length; i++) {
        text += "<li>";
        text += "Me: ";
        text += array[i];
        text += "</li>";


    }
    text += "</ul>";
    document.getElementById("show").innerHTML = text;
    console.log(text);
}