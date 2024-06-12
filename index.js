const context = document.getElementById("context");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const clear = document.getElementById("clear");

let counter = 0;

increase.onclick = function() {
    counter++
    context.textContent = counter
};

decrease.onclick = function() {
    counter--
    context.textContent = counter
}

clear.onclick = function() {
    counter = 0;
    context.textContent = counter
}
