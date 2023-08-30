function hideEarth() {
    var $earth = $(".earth").eq(0);
    var $moon = $(".moon").eq(0);
    var $text_open = $(".default-open").eq(0);
    var $earth_person = $(".earth-person").eq(0);
    var $moon_person = $(".moon-person").eq(0);
    var $layer = $(".layer").eq(0);
    var $description = $(".description").eq(0);

    if ($moon.hasClass("hide-moon")) {
        $earth.removeClass("show-earth").addClass("hide-earth");
        $moon.removeClass("hide-moon").addClass("show-moon");
        $text_open.addClass("hide");
        $earth_person.addClass("hide");
        $moon_person.removeClass("hide");
        $layer.removeClass("hide");
        $description.removeClass("hide");

        $layer.on("click", closeAll);
        
        setTimeout(function() {
            $moon.removeClass("show-moon");
        }, 1000);
    }
}


function closeAll() {
    var $earth = $(".earth").eq(0);
    var $moon = $(".moon").eq(0);
    var $text_open = $(".default-open").eq(0);
    var $earth_person = $(".earth-person").eq(0);
    var $moon_person = $(".moon-person").eq(0);
    var $layer = $(".layer").eq(0);
    var $description = $(".description").eq(0);

    $moon.removeClass("show-moon").addClass("hide-moon");
    $description.addClass("hide");
    $layer.addClass("hide");
    $earth.removeClass("hide-earth").addClass("show-earth");
    $moon_person.addClass("hide");
    
    setTimeout(function() {
        $text_open.removeClass("hide");
    }, 1000);

    $earth_person.removeClass("hide");

    setTimeout(function() {
        $earth.removeClass("show-earth");
    }, 1000);
}

