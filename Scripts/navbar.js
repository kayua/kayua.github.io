fetch('navbar.html')
    .then(response => response.text())
    .then(data => document.getElementById('nav_bar').innerHTML = data);
