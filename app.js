function display(value) {

    document.getElementById("display").value += value;

    var audio = document.getElementById("buttonSound");
    audio.play();

}
function AC(value) {
    document.getElementById("display").value = ""
}
function del(value) {
    document.getElementById("display").value += value.slice(0, -1);

}
function del() {
    let display = document.getElementById("display");
    let halhazirkideyer = display.value;
    let yenideyer = display.value.slice(0, -1);
    display.value = yenideyer;
}
function solve() {


    const result = document.getElementById('display').value;
    display.value += result;

}
function solve() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value) || "Geçersiz işlem";
    } catch {
        display.value = "Hata";
    }
}

document.getElementById('switch1').addEventListener('click', () => {
    let themeStylesheet = document.getElementById('themeStylesheet');


    if (themeStylesheet.getAttribute('href') === './light.css') {
        themeStylesheet.setAttribute('href', './dark.css');
    } else {
        themeStylesheet.setAttribute('href', './light.css');
    }
});


