document.addEventListener('DOMContentLoaded', function() {
    fetch('datos.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            cardData = data;
            displayData(cardData);
        })
        .catch(function(error) {
            console.error('Error al cargar el archivo JSON:', error);
        });
});

let cardData = [];

function filtrar() {
    // Obtener los valores de los elementos HTML de los campos de entrada
    const valorminimo = parseInt(document.getElementById("valorminimo").value);
    const valormaximo = parseInt(document.getElementById("valormaximo").value);
    const ordenar = document.getElementById("ordenar").value;
    const categoria = document.getElementById("category").value;

    // Filtrar los datos basados en la categoría seleccionada
    // Si la categoría seleccionada es "all", se muestran todos los datos,
    // de lo contrario, se filtran los datos para mostrar solo los que coinciden con la categoría seleccionada
    let datosFiltrados = cardData.filter(function(data) {
        return categoria === "all" || data.category === categoria;
    });

    // Ordenar los datos según el criterio seleccionado
    switch (ordenar) {
        case "Mayor":
            datosFiltrados.sort(function(a, b) {
                return b.price - a.price; // Ordenar de mayor a menor precio
            });
            break;
        case "Menor":
            datosFiltrados.sort(function(a, b) {
                return a.price - b.price; // Ordenar de menor a mayor precio
            });
            break;
        default:
            break;
    }

    // Filtrar los datos basados en el rango de precios especificado
    // Si se especifica un valor mínimo, se muestran solo los datos con precios mayores o iguales a ese valor
    if (!isNaN(valorminimo)) {
        datosFiltrados = datosFiltrados.filter(function(data) {
            return data.price >= valorminimo;
        });
    }
    if (!isNaN(valormaximo)) {
        datosFiltrados = datosFiltrados.filter(function(data) {
            return data.price <= valormaximo;
        });
    }

    // Mostrar los datos filtrados y ordenados en la página
    displayData(datosFiltrados);
}

function displayData(data) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const card = document.createElement('div');
        card.className = 'col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12'; 
        card.innerHTML = `
            <div class="card m-3 border-light p-2 shadow rounded">
                <div class="marco">
                    <img src="${data[i].imgSrc}" class="card-img-top img-fluid img-thumbnail" style="width: 100%" alt="${data[i].title}">
                </div>
                <div class="card-body" style="width: 100%">
                    <h5 class="card-title text-center">${data[i].title}</h5>
                    <p class="card-text" style="width: 100%">${data[i].text}</p>
                    <a href="${data[i].link}" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    }
}

function limpiar() {
    // Restablecer los valores de los campos de entrada
    document.getElementById("valorminimo").value = "";
    document.getElementById("valormaximo").value = "";
    document.getElementById("ordenar").value = "default";
    document.getElementById("category").value = "all";

    // Mostrar todos los datos sin filtrar ni ordenar
    displayData(cardData);
}

