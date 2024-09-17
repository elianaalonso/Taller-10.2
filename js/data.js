document.addEventListener('DOMContentLoaded', () => {
    // Obtener el valor del localStorage
    const storedData = localStorage.getItem('storedData');

    // Mostrar el valor en el elemento con id 'data'
    document.getElementById('data').textContent = storedData || 'No hay datos disponibles';
});
