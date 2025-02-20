
function sucesso(posicao) {
 console.log(posicao.coords.latitude, posicao.coords.longitude);
 h2.textContent = `Latitude: ${posicao.coords.latitude}, Longitude: ${posicao.coords.longitude}`;
}
 
let h2 = document.querySelector('h2');

let erro = () => {  
    console.log('Não foi possível obter sua localização');
    h2.textContent = 'Não foi possível obter sua localização';
}
let loc = navigator.geolocation.watchPosition(sucesso, erro);



