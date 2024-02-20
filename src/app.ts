console.log("test");
let display: HTMLInputElement | null = document.getElementById('display') as HTMLInputElement;

function appendToDisplay(value: string): void {
    if (display) {
        display.value += value;
    }
}

function clearDisplay(): void {
    if (display) {
        display.value = '';
    }
}

function calculateResult(): void {
    if (display) {
        try {
            display.value = eval(display.value).toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
}
