
document.getElementById('name-input').addEventListener('input', function() {
    const inputElement = document.getElementById('name-input');
    const outputElement = document.getElementById('name-output');
    const trimmedValue = inputElement.value.trim();

    outputElement.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});