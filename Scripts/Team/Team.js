fetch('../json/team.json')

    .then(response => {

        if (!response.ok) {

            throw new Error('Network response was not ok');

        }

        return response.json();

    })

    .then(teamData => {

        const cardsContainer = document.getElementById('Team-cards');

        teamData.forEach(member => {

            const card = `
            
            <div class="col-md-12 mb-4">
                
                <div class="card mb-4 d-flex flex-row align-items-center position-relative overflow-hidden">
                    
                    <img src="${member.photo}" class="card-img-left" alt="${member.name}">
                    
                    <div class="card-overlay"></div>
                    
                    <div class="card-body">
                        
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text"><strong>${member.position}</strong></p>
                        <p class="card-text">${member.details}</p>
                        
                        <div class="text-right">
                           
                           <a href="${member.lattes}" class="btn btn-primary btn-hover-shadow" style="border-radius: 24px; background-color: #272727; border: 2px solid #272727; color: white;">Currículo Lattes</a>
                           <a href="mailto:${member.email}" class="btn btn-secondary btn-hover-shadow" style="border-radius: 24px; margin-left: 5px;">Email</a>
                       
                        </div>
                   
                    </div>
                
                </div>
                
            </div>
        
`;
            cardsContainer.innerHTML += card;

        });}).catch(error => console.error('There was a problem with the fetch operation:', error));
