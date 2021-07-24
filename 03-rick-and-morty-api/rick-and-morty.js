//  https://rickandmortyapi.com/api/character
/**
 * @author: AlexanderCD
 * @description: Rick and Morty API
 * 
 */

/** Variables globales **/

/** Se ejecuta al inicio **/
$(document).ready(function(){ 
    var page = 1;

    /** Carga inicial */
    getCaracter();

    $('#siguiente').click(function (event) {
        page = page + 1;
        getCaracter(page);
    })

    $('#regresar').click(function (event) { 
        if(page > 1){
            page = page - 1;
            getCaracter(page);
            $('#regresar').attr('disable', true);
        }else{
            $('#regresar').attr('disable', false);
        }
    })
});

/** Fuciones **/
function getCaracter(page) {
    $.ajax({
        url: "https://rickandmortyapi.com/api/character" + (page === undefined ? '' : '?page=' + page),
        type: "GET", 
        dataType: "json",
        crossDomain: true, 
        headers: {  'Access-Control-Allow-Origin': 'https://rickandmortyapi.com/api/' },
        beforeSend: function () {
            $('.div__container').text("Espere por favor... " ); 
            //$('#pokemon').attr("src", "") 
        },
        success: function(request){
            console.info(request.results);
            $('.div__container').text(""); 
            request.results.forEach(function (item, index) {
                $('.div__container').append(
                    $('<div><div>').addClass('div__content div__content' + index)
                );
                $('.div__content' + index).append(
                    $('<div></div>').append(item.name)
                )
                $('.div__content' + index).append(
                    $('<div></div>').append(
                        $('<img></img>').attr('src', item.image)
                    )
                )
            })
        },
    });
}
