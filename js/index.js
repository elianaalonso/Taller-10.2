document.getElementById('buttonText').addEventListener('click', () => {
    // Obtener el valor del input
    const inputValue = document.getElementById('inputText').value;

    // Almacenar el valor en localStorage
    localStorage.setItem('storedData', inputValue);
});
