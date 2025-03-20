// Adds numbers or operators to the display
function appendToDisplay(value) {
    let display = document.getElementById("display");
    display.value += value;  // Append the clicked button value to the input field
}

// Clears the display completely
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Deletes the last character (like a backspace)
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Evaluates the mathematical expression
function calculateResult() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value); // JavaScript's built-in eval() function
    } catch (error) {
        alert("Invalid Expression!");
    }
}
