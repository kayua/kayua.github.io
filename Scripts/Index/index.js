window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.querySelector(".navbar").classList.add("transparent");
    document.querySelectorAll(".navbar *").forEach(function (el) {
      el.style.opacity = "0.0";

    });

  } else {

    document.querySelector(".navbar").classList.remove("transparent");
    document.querySelectorAll(".navbar *").forEach(function (el) {
      el.style.opacity = "1"; });

  }

}

const overlay = document.getElementById('overlay');

function createCard(imageUrl, title, description, pageUrl) {

  return `

    <div class="col-md-13 mb-2">

      <div class="card mb-4">

        <img src="${imageUrl}" class="card-img-top tall-image" alt="..."> <!-- Adiciona a classe "tall-image" -->

        <div class="card-overlay"></div>

        <div class="card-body">

          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          
          <div class="text-right">

            <a id= "button_first_card" class="btn btn-primary btn-hover-shadow" style="border-radius: 24px; background-color: #272727; border: 2px solid #272727; color: white;"><i class="fas fa-arrow-right"></i> Saiba Mais</a>

          </div>

         </div>

      </div>

    </div>
  `;

}


function distributeCards(data) {

  var column1 = $('#column1');
  var column2 = $('#column2');
  var column3 = $('#column3');

  column1.empty();
  column2.empty();
  column3.empty();

  for (var key in data) {

    var cardHTML = createCard(data[key].imageUrl, data[key].title, data[key].description, data[key].id);

    if (parseInt(key) % 3 === 0) {
      column1.append(cardHTML);

    } else if (parseInt(key) % 3 === 1) {

      column2.append(cardHTML);
    } else {

      column3.append(cardHTML);
    }

  }

}

var data_2 = {
  "1": {
    "title": "Análise de Dados",
    "imageUrl": "https://img.freepik.com/premium-photo/lovable-fluffy-kitten-ai-generated_860599-4573.jpg",
    "description": "Descubra como analisar e interpretar grandes conjuntos de dados.",
    "id": "4289032049832409238480908"
  },
  "2": {
    "title": "Visão Computacional",
    "imageUrl": "https://img.freepik.com/fotos-premium/raposa-fantasia_928869-5141.jpg",
    "description": "Explore o mundo da visão computacional e suas aplicações.",
    "id": "1234567890123456789012345"
  },
  "3": {
    "title": "Previsão de Dados",
    "imageUrl": "https://img.freepik.com/free-photo/mermaid-ocean_71767-129.jpg",
    "description": "Aprenda a prever tendências e comportamentos com base em dados históricos.",
    "id": "9876543210987654321098765"
  },
  "4": {
    "title": "Previsão de Dados",
    "imageUrl": "https://blog.pareto.io/wp-content/uploads/2023/07/imagem-2.png",
    "description": "Aprenda a prever tendências e comportamentos com base em dados históricos.",
    "id": "1357924680246813579135792"
  },
  "5": {
    "title": "Previsão de Dados",
    "imageUrl": "https://www.designi.com.br/images/preview/10781886-m.jpg",
    "description": "Aprenda a prever tendências e comportamentos com base em dados históricos.",
    "id": "9876543210987654321098765"
  },
  "6": {
    "title": "Previsão de Dados",
    "imageUrl": "https://images.nightcafe.studio/jobs/owUuVKbZNEBcxRhMqm81/owUuVKbZNEBcxRhMqm81--1--3pf3m.jpg?tr=w-1600,c-at_max",
    "description": "Aprenda a prever tendências e comportamentos com base em dados históricos.",
    "id": "1357924680246813579135792"
  },

};

distributeCards(data_2);

const audio = document.getElementById('meuAudio');
const playButton = document.getElementById('playButton');

  playButton.addEventListener('click', function() {
  if (audio.paused) {
  audio.play();
  playButton.innerHTML = '<a id=\'playButton\' class="btn btn-secondary btn-hover-shadow" style="border-radius: 24px; margin-bottom: 24px; background-color: #272727;\n' +
      '            border: 2px solid #272727; color: white;"><i class="fas fa-play"></i> Podcast</a>';
} else {
  audio.pause();
  playButton.innerHTML = '<a id=\'playButton\' class="btn btn-secondary btn-hover-shadow" style="border-radius: 24px; margin-bottom: 24px; background-color: #272727;\n' +
      '            border: 2px solid #272727; color: white;"><i class="fas fa-pause"></i> Podcast</a>';
}
});