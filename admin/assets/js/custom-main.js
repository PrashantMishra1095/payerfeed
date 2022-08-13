"use strict";
$(document).ready(function() {
    $("#topnav-hamburger-icon").click(function() {
        $("body").toggleClass("minimize-menu");
        $(".app-menu").toggleClass("active-sidebar");
    });

    // $("#nav-tabs").find(".nav-item").each(function( index, elements ) {
    //     console.log(elements)
    //     $(this).on("click" , function(e){
    //        $(".nav-item").removeClass("active");
    //         $(elements).addClass("active")
    //     });
    // });

    $(".step").each(function( index, elements) {
        
        // next step
        $(this).find('.next').on("click", function(e) {
             $(elements).addClass('inactive hide').removeClass('active');
             $(elements.nextElementSibling).addClass('active').removeClass('hide inactive');
        });

        // back Step
        $(this).find('.back').on('click', function(e) {
             $(elements).addClass('inactive hide').removeClass('active');
             $(elements.previousElementSibling).addClass('active').removeClass('hide inactive');
        })
    })
});
    
