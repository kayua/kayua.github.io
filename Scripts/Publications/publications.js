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

const jsonFilePath = 'Data/Publications.json';

async function loadData() {

    const response = await fetch(jsonFilePath);
    const data = await response.json();
    return data;

}

async function displayPremiacoes() {

    const data = await loadData();
    const listElement = document.getElementById('premiacoes-list');

    data.slice(0, 3).forEach(item => {
        const card = `
                       
            <div class="col-md-12 mb-4">
                
                <div class="card mb-4 d-flex flex-row align-items-center position-relative overflow-hidden">
                    
                    <img src="${item.imageUrl}" class="card-img-news img-fluid" style="height: 172px; object-fit: cover;" alt="${item.title}">
                    
                    <div class="card-overlay"></div>
                    
                    <div class="card-body">
                        
                        <h5 class="card-title">${item.title}</h5> 
                        <p class="card-text">${item.description}</p>
                        
                        <div class="text-right">
                           
                           <a href="${item.url}" class="btn btn-primary btn-hover-shadow" style="border-radius: 24px; background-color: #272727; border: 2px solid #272727; color: white;">Mais informações</a>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
        
        `;
        listElement.insertAdjacentHTML('beforeend', card);

    });

}

async function displayListaCompleta() {

    const data = await loadData();
    const listElement = document.getElementById('lista-completa');

    data.forEach(item => {
        const card = `
                       
            <div class="col-md-12 mb-4">
    
                <div class="card mb-4 d-flex flex-row align-items-center position-relative overflow-hidden">
    
                    <img src="${item.imageUrl}" class="card-img-news img-fluid"  style="height: 220px; alt="${item.title}">
    
                    <div class="card-overlay"></div>
    
                    <div class="card-body">
    
                        <h5 class="card-title">${item.title}</h5>                     
                        <p class="card-text">${item.description}</p>
                        
                        <div class="text-right">
                           
                           <a href="${item.url}" class="btn btn-primary btn-hover-shadow" style="border-radius: 24px; background-color: #272727; border: 2px solid #272727; color: white;">Mais informações</a>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
        `; listElement.insertAdjacentHTML('beforeend', card);

    });

}

if (document.getElementById('premiacoes-list')) {

    displayPremiacoes();

} else if (document.getElementById('lista-completa')) {

    displayListaCompleta();

}
