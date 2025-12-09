const display = document.getElementById('display');

function appendNumber(n) { 
    display.value += n; 
}

function appendOperator(op) {
    if (op === '^') display.value += '**';
    else if (op === '%') display.value += '/100';
    else display.value += op;
}

function clearDisplay() { 
    display.value = ''; 
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace(/×/g,'*').replace(/÷/g,'/'));
    } catch {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

// Keyboard support
document.addEventListener('keydown', function(e) {
    const key = e.key;

    if (key === 'Enter') {
        e.preventDefault();
        calculateResult();
        return;
    }

    if (!isNaN(key)) appendNumber(key);
    else if (key === '+' || key === '-' || key === '*' || key === '/') appendOperator(key);
    else if (key === '^') appendOperator('^');
    else if (key === '%') appendOperator('%');
    else if (key === 'Backspace') display.value = display.value.slice(0, -1);
    else if (key === '.') appendNumber('.');
    else if (key.toLowerCase() === 'c') clearDisplay();
});
