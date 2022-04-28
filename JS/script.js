
size=0
var btn = document.getElementById("btn");
var rain_img = document.getElementById("rain_img");
var table1 = document.getElementById("table1");
var table2 = document.getElementById("table2");
var table3 = document.getElementById("table3");
var table4 = document.getElementById("table4");
var body = document.getElementById("body");

function toggleBtn() {
    btn.classList.toggle("active");
    rain_img.classList.toggle("on");
}

function update(){
    var req_table = document.getElementById("update");
    var inputname = document.getElementById("your_name").value;
    var inputval = document.getElementById("entered_update").value;
    localStorage.setItem(localStorage.length, inputname);
    localStorage.setItem(localStorage.length, inputval);
    // document.write("Size = "+ size);
}

function one() {
    table1.style["backgroundColor"] = "rgb(63, 238, 171)";
    table2.style["backgroundColor"] = "#c01154";
    table3.style["backgroundColor"] = "rgb(63, 238, 171)";
    table2.style["color"] = "white";
    table1.style["transition"] = "0.2s";
    table2.style["transition"] = "0.2s";
    table3.style["transition"] = "0.2s";

}

function two() {
    table1.style["backgroundColor"] = "rgb(129, 107, 107)";
    table2.style["backgroundColor"] = "#7e9494";
    table3.style["backgroundColor"] = "rgb(129, 107, 107)";
    table2.style["color"] = "black";
    table1.style["transition"] = "0.2s";
    table2.style["transition"] = "0.2s";
    table3.style["transition"] = "0.2s";

}

function three() {
    table1.style["backgroundColor"] = "rgb(247, 187, 108)";
    table2.style["backgroundColor"] = " #084493";
    table3.style["backgroundColor"] = "rgb(247, 187, 108)";
    table2.style["color"] = "white";
    table1.style["transition"] = "0.2s";
    table2.style["transition"] = "0.2s";
    table3.style["transition"] = "0.2s";

}

function four() {
    table1.style["backgroundColor"] = "#f5778a";
    table2.style["backgroundColor"] = "#00c7aa";
    table3.style["backgroundColor"] = "#f5778a";
    table2.style["color"] = "black";
    table1.style["transition"] = "0.2s";
    table2.style["transition"] = "0.2s";
    table3.style["transition"] = "0.2s";

}

function five() {
    table1.style["backgroundColor"] = "#f2f3f4";
    table2.style["backgroundColor"] = "#0d0c0b";
    table3.style["backgroundColor"] = "#f2f3f4";
    table2.style["color"] = "white";
    table1.style["transition"] = "0.2s";
    table2.style["transition"] = "0.2s";
    table3.style["transition"] = "0.2s";

}

function small() {
    table1.style["fontSize"] = "small";
    table2.style["fontSize"] = "small";
    table3.style["fontSize"] = "small";
    table4.style["fontSize"] = "small";
    table1.style["transition"] = "0.2s";
    table2.style["transition"] = "0.2s";
    table3.style["transition"] = "0.2s";
    table4.style["transition"] = "0.2s";

}

function medium() {
    table1.style["fontSize"] = "large";
    table2.style["fontSize"] = "large";
    table3.style["fontSize"] = "large";
    table4.style["fontSize"] = "large";
    table1.style["transition"] = "0.2s";
    table2.style["transition"] = "0.2s";
    table3.style["transition"] = "0.2s";
    table4.style["transition"] = "0.2s";

}

function large() {
    table1.style["fontSize"] = "x-large";
    table2.style["fontSize"] = "x-large";
    table3.style["fontSize"] = "x-large";
    table4.style["fontSize"] = "x-large";
    table1.style["transition"] = "0.2s";
    table2.style["transition"] = "0.2s";
    table3.style["transition"] = "0.2s";
    table4.style["transition"] = "0.2s";

}

function bold() {
    table1.classList.toggle("textbold");
    table2.classList.toggle("textbold");
    table3.classList.toggle("textbold");
    table4.classList.toggle("textbold");
    table1.style["transition"] = "0.2s";
    table2.style["transition"] = "0.2s";
    table3.style["transition"] = "0.2s";
    table4.style["transition"] = "0.2s";

}

