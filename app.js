const url = 'https://images-api.nasa.gov/search?q=apollo%2011';
fetch(url)
    .then(response => response.json())
    .then(datos => mostrarDatos(datos))
    .catch(error => console.error(error));

const mostrarDatos = (datos) => {
    console.log(datos);
    let body = '';
    for(let i=0; i<10;i++){
        body += `<tr><td>${datos.collection.items[i].data[0].title}</td><td>${datos.collection.items[i].data[0].description}</td><td>${datos.collection.items[i].links[0].href}</td></tr>`
    }   
    document.getElementById('data').innerHTML=body;
    console.log(body)
}
//collection.items.length

