/**
 * @author: AlexanderCDs
 * @description: Marvel API
 */

$(document).ready(function () { 

    getMarvelCaracters({name: null});

    $("#buscar").click(function (event) {
       var name = $("#name").val();
       getMarvelCaracters({name: name.trim() !== "" ? name : null});
    });
});

function getMarvelCaracters(params) {
    var publicKey = "998c593132cae28fa51da87da128f4a5";
    var privateKey = "d457e91e43a80f318c98a06611b8026522b41712";
    var tiemstamp = Date.now();
    var data = {
        apikey: publicKey,
        hash: md5(tiemstamp + privateKey + publicKey),
        ts: tiemstamp, 
    };
    if(params.name !== null){
        data.name = params.name;
    }
    $.ajax({
        url: 'https://gateway.marvel.com/v1/public/characters',
        type: 'GET',
        dataType: 'json',
        data: data,
        beforeSend: function () {
            $('.div__container').text("Espere por favor... " );  
        },
        success: function (response) {
            $('.div__container').text("" );
            console.info(response.data.results)
            response.data.results.forEach(function (item, index) {
                $('.div__container').append(
                    $('<div></div>').addClass('div__content' + index)
                );
                $('.div__content' + index).append(
                    $('<div></div>').append(item.name)
                );    
                $('.div__content' + index).append(
                    $('<div></div>').addClass('div__img').append(
                        $('<img></img>').attr('src', item.thumbnail.path + "." + item.thumbnail.extension)
                    )
                ); 
            })
        }
    });
}

