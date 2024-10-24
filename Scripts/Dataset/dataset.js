window.onscroll = function() { scrollFunction() };

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.querySelector(".navbar").classList.add("transparent");
    document.querySelectorAll(".navbar *").forEach(function(el) {
      el.style.opacity = "0";
    });

  } else {

    document.querySelector(".navbar").classList.remove("transparent");
    document.querySelectorAll(".navbar *").forEach(function(el) {
      el.style.opacity = "1";

    });

  }

}

const overlay = document.getElementById('overlay');

function createCard(imageUrl, title, description, pageUrl) {

  return `
    
    <div class="col-md-13 mb-2">
 
      <div class="card mb-4">
 
        <img src="${imageUrl}" class="card-img-top tall-image" alt="...">
 
        <div class="card-overlay"></div>
 
        <div class="card-body">
 
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          
          <div class="text-right">
 
            <a id= "button_first_card" href="${pageUrl}" class="btn btn-primary btn-hover-shadow" style="border-radius: 24px; background-color: #272727; border: 2px solid #272727; color: white;"><i class="fas fa-arrow-right"></i> Download</a>

          </div>
 
         </div>
 
      </div>
 
    </div>
  `;

}

function create_cards(data) {
  var column1 = $('#column1');
  var column2 = $('#column2');
  var column3 = $('#column3');

  column1.empty();
  column2.empty();
  column3.empty();

  data.forEach(function(item) {

    var cardHTML = createCard(item.imageUrl, item.title, item.description, item.url);

    if (item.id % 3 === 1) {

      column1.append(cardHTML);

    } else if (item.id % 3 === 2) {

      column2.append(cardHTML);

    } else {

      column3.append(cardHTML);

    }

  });

}

const jsonFilePath = 'Data/DatasetImages.json';

async function loadData() {

  const response = await fetch(jsonFilePath);
  const data = await response.json();
  return data;

}

async function init() {

  try {

    var json_file = await loadData();
    create_cards(json_file);

  } catch (error) {
    console.error('Erro ao carregar os dados:', error);

  }

}

init();