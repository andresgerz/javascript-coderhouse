
$('.search').click(() => {
  let pokemon = $('input').val();
  
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    type: 'get',
    headers: {
      'content-type': 'application/json'
    },
    success: function (data) {
      
      $('.characters').html(`
        <h2>Nombre: ${data.name}</h2>
        <img src='${data.sprites.front_default}'></img>
        <p><strong>Habilidades:</strong></p>
        <ul>${data.abilities.map(item => `
          <li>- ${item.ability.name}</li>`
          )}
        </ul>
        <p><strong>Peso:</strong> ${data.weight}</p>
        <p><strong>Altura:</strong> ${data.height} </p>
        `
        );
  },
  error: function(xhr, status, error){
    var errorMessage = xhr.status + ': ' + xhr.statusText
    alert('¡Este pokemon no existe!');
  }
})
}); 