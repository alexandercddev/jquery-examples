//  https://pokeapi.co/api/v2/pokemon/
/**
 * @author: AlexanderCD
 * @description: Poke API
 * 
 */

/** Variables globales **/

/** Se ejecuta al inicio **/
$(document).ready(function(){ 
    /** Variables locales **/
    var idPokemon = 39;

    /** Get info pokemon **/
    getPokemon(idPokemon);

    /** Clicks **/
    $('#regresar').click(function (event) {
        idPokemon = idPokemon - 1;
        getPokemon(idPokemon);
    })

    $('#siguiente').click(function (event) {
        idPokemon = idPokemon + 1;
        getPokemon(idPokemon);
    })
});

/** Fuciones **/
function getPokemon(idPokemon) {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + idPokemon,
        type: "GET",
        cache: false,
        dataType: "json",
        beforeSend: function () {
            $('#name').text("Espere por favor... " ); 
            $('#pokemon').attr("src", "") 
        },
        success: function(request){
          console.info(request);
          $('#name').text("Pokemon: " + request.name); 
          $('#pokemon').attr("src", request.sprites.other.dream_world.front_default) 
          //alert("Exito");
        },
    });
}
