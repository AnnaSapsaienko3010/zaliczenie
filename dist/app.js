console.log("test");
let display = document.getElementById('display');
function appendToDisplay(value) {
    if (display) {
        display.value += value;
    }
}
function clearDisplay() {
    if (display) {
        display.value = '';
    }
}
function calculateResult() {
    if (display) {
        try {
            display.value = eval(display.value).toString();
        }
        catch (error) {
            display.value = 'Error';
        }
    }
}
