
// window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").classList.add("transparent");
    document.querySelectorAll(".navbar *").forEach(function(el) {
      el.style.opacity = "0.0";

    });
  } else {
    document.querySelector(".navbar").classList.remove("transparent");
    document.querySelectorAll(".navbar *").forEach(function(el) {
      el.style.opacity = "1";

    });
  }
}
const slider = document.getElementById('slider');
const overlay = document.getElementById('overlay');



function createCard(imageUrl, title, description, pageUrl) {
  return `

  <div class="col-md-13 mb-2">

    <div class="card mb-4 d-flex align-items-start">

      <div class="d-flex">
        <!-- Imagem alinhada à esquerda -->
        <img src="${imageUrl}" class="tall-image" alt="..." style="width: 40%; object-fit: cover; margin-right: 20px;">

        <!-- Texto alinhado à direita -->
        <div class="card-body" style="width: 60%;">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>

          <div class="text-right">
            <a href="${pageUrl}" class="btn btn-primary btn-hover-shadow" style="border-radius: 24px; background-color: #272727;
            border: 2px solid #272727; color: white;"><i class="fas fa-arrow-right"></i> Saiba Mais</a> 
          </div>
        </div>
      </div>

    </div>

  </div>
`;
}

function distributeCards(data) {
  var column1 = $('#column1');

  column1.empty();

  for (var key in data) {
    var cardHTML = createCard(data[key].imageUrl, data[key].title, data[key].description, data[key].url);
    if (parseInt(key) % 3 === 0) {
      column1.append(cardHTML);
    }
  }
}

var data_2 = {
    "0": {
      "title": "Publicação no SBSeg 2024 (Trilha principal)",
      "imageUrl": "Images/Sbseg_trilha_principal.png",
      "description": "Artigo curto na trilha principal SBSeg 24º edição.",
      "url": "https://sol.sbc.org.br/index.php/sbseg/article/view/30072"
    },
    "1": {
      "title": "Publicação no SBSeg 2024 (Salão de ferramentas)",
      "imageUrl": "Images/Sbseg_salao_de_ferramentas.png",
      "description": "Artigo para o VIII Salão de Ferramentas do SBSeg",
      "url": "https://sol.sbc.org.br/index.php/sbseg_estendido/article/view/30126"
    },
    "2": {
      "title": "Capítulos de livro nos minicursos da ERAD/RS",
      "imageUrl": "Images/minicurso.png",
      "description": "Capítulo de livro DinD-Bench: Impacto de Contêineres Docker em Docker para a Programação Paralela nos  minicursos da XXIV Escola Regional de Alto Desempenho da Região Sul ",
      "url": "https://books-sol.sbc.org.br/index.php/sbc/catalog/book/137"
    },
    "3": {
      "title": "Artigo publicado na Escola Regional de Redes de Computadores edição XX",
      "imageUrl": "Images/errc.png",
      "description": " Artigo AutoDroid: disponibilizando a ferramenta DroidAugmentor como serviço publicado na XX edição Escola Regional de Redes de Computadores",
      "url": "https://sol.sbc.org.br/index.php/errc/article/view/26020"
    }, 
    "4": {
      "title": "Artigo publicado no SBSeg edição XXIII",
      "imageUrl": "Images/sbseg_2023.png",
      "description": " Artigo DroidAugmentor: uma ferramenta de treinamento e avaliação de cGANs para geração de dados sintéticos",
      "url": "https://sol.sbc.org.br/index.php/sbseg_estendido/article/view/27273"
    }
};

distributeCards(data_2);


// Helper function to hide all cascades
function hideAllCascades() {
  document.getElementById("first_cascade").style.display = "none";
  document.getElementById("second_cascade").style.display = "none";
  document.getElementById("third_cascade").style.display = "none";
  document.getElementById("first_cascade_v2").style.display = "none";
  document.getElementById("second_cascade_v2").style.display = "none";
  document.getElementById("third_cascade_v2").style.display = "none";
}

// Helper function to display the correct cascade version based on screen size
function displayCorrectVersion(smallScreenElement, largeScreenElement) {
  if (window.innerWidth <= 768) {
    smallScreenElement.style.display = "block";
    largeScreenElement.style.display = "none";
  } else {
    smallScreenElement.style.display = "none";
    largeScreenElement.style.display = "block";
  }
}

// Function to toggle between v2 and original based on screen width
function toggleCascade(smallScreenElement, largeScreenElement) {
  if (window.innerWidth <= 768) {
    if (smallScreenElement.style.display === "none") {
      hideAllCascades();
      smallScreenElement.style.display = "block";
    } else {
      smallScreenElement.style.display = "none";
    }
  } else {
    if (largeScreenElement.style.display === "none") {
      hideAllCascades();
      largeScreenElement.style.display = "block";
    } else {
      largeScreenElement.style.display = "none";
    }
  }
}


// Track currently visible cascade to handle resize
let currentCascade = null;

function trackCurrentCascade() {
  const cascades = [
    {small: document.getElementById("first_cascade_v2"), large: document.getElementById("first_cascade")},
  ];

  // Find which cascade is currently displayed
  cascades.forEach(cascade => {
    if (cascade.small && cascade.small.style.display === "block") {
      currentCascade = cascade;
    } else if (cascade.large.style.display === "block") {
      currentCascade = cascade;
    }
  });
}

// Handle window resize
window.addEventListener("resize", function() {
  trackCurrentCascade();
  
  if (currentCascade) {
    // Only switch versions for first and second cards
    if (currentCascade.small) {
      displayCorrectVersion(currentCascade.small, currentCascade.large);
    } else {
      // For the third cascade, ensure it's still displayed properly
      currentCascade.large.style.display = "block";
    }
  }
});

// Initial call to adjust cascade versions based on initial screen size
window.addEventListener("load", function() {
  trackCurrentCascade();
  if (currentCascade) {
    // Only switch versions for first and second cards
    if (currentCascade.small) {
      displayCorrectVersion(currentCascade.small, currentCascade.large);
    } else {
      // For the third cascade, ensure it's still displayed properly
      currentCascade.large.style.display = "block";
    }
  }
});
