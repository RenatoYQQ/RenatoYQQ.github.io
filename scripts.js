

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('message').style.display = 'block';
});

function validateSurvey() {
    // Obtener las selecciones
    const favoriteCharacter = document.getElementById('favorite-character').value;
    const movieRating = document.getElementById('movie-rating').value;

    // Verificar si se han seleccionado opciones
    if (!favoriteCharacter || !movieRating) {
        alert('Por favor, selecciona una opción en todas las categorías antes de enviar.');
        return false; // Evita que el formulario se envíe
    }

    return true; // Permite que el formulario se envíe
}