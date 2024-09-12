function display(value) {

    document.getElementById("display").value += value;
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
// app.js
document.getElementById('switch1').addEventListener('click', () => {
    let themeStylesheet = document.getElementById('themeStylesheet');

    // Mövcud href-i yoxlayaraq temanı dəyiş
    if (themeStylesheet.getAttribute('href') === './light.css') {
        themeStylesheet.setAttribute('href', './dark.css');
    } else {
        themeStylesheet.setAttribute('href', './light.css');
    }
});

