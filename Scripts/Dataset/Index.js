


window.onscroll = function() {scrollFunction()};

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
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlay-text');



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
            <a id= "button_first_card" href="${pageUrl}" class="btn btn-primary btn-hover-shadow" style="border-radius: 24px; background-color: #272727; border: 2px solid #272727; color: white;"><i class="fas fa-arrow-right"></i> Download</a>

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
    var cardHTML = createCard(data[key].imageUrl, data[key].title, data[key].description, data[key].url);
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
    "title": "CelebA ",
    "imageUrl": "Images/Themes/celeba.jpg",
    "description": "Large-scale CelebFaces Attributes (CelebA) Dataset",
    "id": "4289032049832409238480908",
    "url": "https://mmlab.ie.cuhk.edu.hk/projects/CelebA.html"
  },
  "2": {
    "title": "Flickr 30k",
    "imageUrl": "Images/Themes/Flickr30k_2.jpg",
    "description": "Criado para desvendar os padrões complexos entre estímulos visuais e descrições textuais.",
    "id": "1234567890123456789012345",
    "url": "https://shannon.cs.illinois.edu/DenotationGraph/"
  },
  "3": {
    "title": "Visual Question Answering",
    "imageUrl": "Images/Themes/vqa.jpg",
    "description": "Aprenda a prever tendências e comportamentos com base em dados históricos.",
    "id": "9876543210987654321098765",
    "url": "https://visualqa.org/"
  },
  "4": {
    "title": "CIFAR-10",
    "imageUrl": "Images/Themes/cifar_10.jpg",
    "description": "Canadian Institute for Advanced Research, 10 classes",
    "id": "1357924680246813579135792",
    "url": "https://www.cs.toronto.edu/~kriz/cifar.html"
  },
  "5": {
    "title": "ImageNet",
    "imageUrl": "Images/Themes/ImageNet.jpg",
    "description": "ImageNet: A large-scale hierarchical image database",
    "id": "9876543210987654321098765",
    "url": "https://www.image-net.org/"
  },
  "6": {
    "title": "FFHQ",
    "imageUrl": "Images/Themes/ffhq.jpg",
    "description": "Flickr-Faces-HQ Dataset ",
    "id": "1357924680246813579135792",
    "url": "https://github.com/NVlabs/ffhq-dataset"
  },
  "7": {
    "title": "Oxford 102 Flower",
    "imageUrl": "Images/Themes/flowers.jpg",
    "description": " Automated Flower Classification over a Large Number of Classes",
    "id": "1357924680246813579135792",
    "url": "https://www.robots.ox.ac.uk/~vgg/data/flowers/102/"
  },
  "8": {
    "title": "Food-101",
    "imageUrl": "Images/Themes/Food-101.jpg",
    "description": "Food-101 - Mining Discriminative Components with Random Forests",
    "id": "1357924680246813579135792",
    "url": "https://www.kaggle.com/datasets/dansbecker/food-101"
  },
  "9": {
    "title": "Urban100",
    "imageUrl": "Images/Themes/Urban100.jpg",
    "description": "Single Image Super-Resolution From Transformed Self-Exemplars",
    "id": "1357924680246813579135792",
    "url": "https://figshare.com/articles/dataset/BSD100_Set5_Set14_Urban100/21586188"
  }

};

distributeCards(data_2);