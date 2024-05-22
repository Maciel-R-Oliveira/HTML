function insert(num) {
    var tela = document.querySelector(".tela");
    var x = tela.innerHTML;
    var u = document.createElement("audio")
    u.setAttribute("src" ,"st.mp3")
    u.play()

    if (x === "0") {

        if(num !== 0) {
            tela.innerHTML = num;
        }
    } else if(tela.innerHTML.length >= "14") {
    } else {

        tela.innerHTML = x + num;
    }
}

function clean() {
    document.querySelector(".tela").innerHTML = "0";
    
    var u = document.createElement("audio")
    u.setAttribute("src" ,"st.mp3")
    u.play()

    
}

function calcular() {

    var y = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = eval(y)

    var u = document.createElement("audio")
    u.setAttribute("src" ,"st.mp3")
    u.play()

}

function back() {
    var n = window.document.querySelector(".tela").innerHTML

    document.querySelector(".tela").innerHTML = n.substring(0, n.length -1);

    var u = document.createElement("audio")
    u.setAttribute("src" ,"st.mp3")
    u.play()


}

let v = window.document.querySelector(".tela")
let m = window.document.querySelector(".apagar")
let l = window.document.querySelector(".igual")


m.addEventListener("click", z)

function z() {
    if(v.innerHTML.length == 0 ) {
        v.innerHTML = "0"
    } 
}
