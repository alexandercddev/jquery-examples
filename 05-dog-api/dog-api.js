/**
 * @author: AlexanderCDs
 * @description: Dog API
 * 
 */

$(document).ready(function () {
    /** Carga inicial */
    getRandom();

    /** Evento click */
    $('#btnRandom').click(function (event) {
        getRandom();
    })
});

/** Obtener una imagen Random */
function getRandom(params) {

    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        type: 'GET',
        dataType: 'json', 
        beforeSend: function () {
            $('.div__container').text("Espere por favor... " );  
        },
        success: function (response) { 
            $('.div__container').text("");
            
            $('.div__container').append(
                $('<img></img>').addClass('img__dog').attr('src', response.message)
            )
            console.info(response)
        } 
    });
}