const buttons = document.querySelectorAll('.button');
const result = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'AC') {
            result.innerText = '';
        } else if (value === '⌫') {
            result.innerText = result.innerText.slice(0, -1);
        } else if (value === '=') {
            try {
                result.innerText = eval(result.innerText
                    .replace('×', '*')
                    .replace('÷', '/')
                    .replace('−', '-'));
            } catch {
                result.innerText = 'Error';
            }
        } else {
            result.innerText += value;
        }
    });
});
