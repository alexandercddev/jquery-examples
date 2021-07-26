/**
 * @author: AlexanderCDs
 * @description: Jikan API - Anime
 * https://api.jikan.moe/v3/
 */
var baseUrl = "https://api.jikan.moe/v3/";

$(document).ready(function () {
    var page = 1;
    var value = "Dragon";
    searchWithPage(page, value);

    $("#btnSearch").click(function (event) {
        value = $("#search").val()
        searchWithPage(1, $("#search").val());
    })

    $("#btnAnterior").click(function (event) {
        if(page >= 2){
            page = page - 1;
            searchWithPage(page, value);
        } 
    })

    $("#btnSiguiente").click(function (event) {
        page = page + 1;
        searchWithPage(page, value);
    })

});

function search(params) {
    var data = {
        q: params.search,
        page: params.page
    }
    $.ajax({
        url: "https://api.jikan.moe/v3/search/" + params.type,
        type: "GET",
        dataType: "json",
        data: data,
        beforeSend: function() {
            $(".div__container").append("Espere por favor...");
        },
        success: function(response) {
            console.info(response.results)
            $(".div__container").text("");
            response.results.forEach(function(item, index) {
                $(".div__container").append(
                    $("<div></div>").addClass("div__content").append(
                        $("<div></div>").addClass("div__img").append( 
                            $("<img></img>").attr("src", item.image_url)
                        ).append( 
                            $("<div></div>").addClass("div__title").append( 
                                $("<h2></h2>").addClass("title").append( 
                                    item.title
                                )
                            ).append( 
                                $("<span></span>").addClass("type").append( 
                                    item.type
                                )
                            )
                        ).append( 
                            $("<div></div>").addClass("div__title").append( 
                                $("<p></p>").addClass("synopsis").append( 
                                    item.synopsis
                                )
                            ) 
                        )
                    )
                );
            })
        }
    })
}

function searchWithPage(page, value) {
    search({
        type: 'anime',
        search: value,
        page: page
    });
}