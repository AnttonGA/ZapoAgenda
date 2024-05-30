
document.addEventListener('DOMContentLoaded', function() {
  fetch('datos.json')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          // Aquí puedes usar los datos cargados
          displayData(data); // Pasamos directamente los datos al mostrar
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

function displayData(cardData) {
  const cardContainer = document.getElementById('card-container');
  cardData.forEach(data => {
      const card = document.createElement('div');
      card.className = 'col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12'; 
      card.innerHTML = `
          <div class="card m-3 border-light p-2 shadow rounded">
              <div class="marco">
                  <img src="${data.imgSrc}" class="card-img-top img-fluid img-thumbnail" style="width: 100%" alt="${data.title}">
              </div>
              <div class="card-body" style="width: 100%">
                  <h5 class="card-title text-center">${data.title}</h5>
                  <p class="card-text" style="width: 100%">${data.text}</p>
                  <a href="${data.link}" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
      `;
      cardContainer.appendChild(card);
  });
}


  
      