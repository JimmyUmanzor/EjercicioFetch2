fetch("https://api.escuelajs.co/api/v1/categories")
.then(response => response.json())
.then(data => {
    let card = '<div class="row row-cols-1 row-cols-md-3 g-4">'
    
    for (let usuario of data) {
        card += `<div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${usuario.name}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><img src="${usuario.image}" alt="Imagen" style="max-width: 100px; height: auto;"></li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }
    card += "</div>"

    document.getElementById("cardLista").innerHTML = card
    
})