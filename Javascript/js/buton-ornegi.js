document.getElementById("btnClick").addEventListener("click", clicked);
function clicked(){
    alert("Butona Tıklandı");
} 

function myFunction() {
    var w = window.open();
    w.document.open();
    w.document.write("<h1>Hello World!</h1>");
    w.document.close();
}


function mySecondFunction(){
    document.getElementById("domain").innerHTML = "merhaba"
    document.body.style.backgroundColor = "orange";
    alert("butona tıkladın")
}


