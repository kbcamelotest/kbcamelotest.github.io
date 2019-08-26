window.onload = function(){
    document.getElementById("autoid").click() ;
  }

$(document).ready(function(){
    console.log("jquery loaded!");

    // 1. select menu button
    // listen for the click
    $(".steele").click(function(){
        // 3. find the navigation
        $(".steeleHall").addClass("active");
        $(".veraHouse").removeClass("active");
        $(".womensMap").removeClass("active");
        $(".birdMap").removeClass("active");

    }); // click method end
}); // ready method end


$(document).ready(function(){
    console.log("jquery loaded!");

    // 1. select menu button
    // listen for the click
    $(".vera").click(function(){
        // 3. find the navigation
        $(".veraHouse").addClass("active");
        $(".steeleHall").removeClass("active");
        $(".womensMap").removeClass("active");
        $(".birdMap").removeClass("active");

    }); // click method end
}); // ready method end

$(document).ready(function(){
    console.log("jquery loaded!");

    // 1. select menu button
    // listen for the click
    $(".womens").click(function(){
        // 3. find the navigation
        $(".womensMap").addClass("active");
        $(".birdMap").removeClass("active");
        $(".kimmelMap").removeClass("active");
        $(".schineMap").removeClass("active");
    }); // click method end
}); // ready method end

$(document).ready(function(){
    console.log("jquery loaded!");

    // 1. select menu button
    // listen for the click
    $(".bird").click(function(){
        // 3. find the navigation
        $(".birdMap").addClass("active");
        $(".womensMap").removeClass("active");
        $(".kimmelMap").removeClass("active");
        $(".schineMap").removeClass("active");
    }); // click method end
}); // ready method end
