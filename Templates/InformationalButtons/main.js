window.onload = function(){
    document.getElementById("autoid").click() ;
  }

$(document).ready(function(){
    console.log("jquery loaded!");

    // 1. select menu button
    // listen for the click
    $(".schine").click(function(){
        // 3. find the navigation
        $(".schineMap").addClass("active");
        $(".kimmelMap").removeClass("active");
        $(".womensMap").removeClass("active");
        $(".birdMap").removeClass("active");

    }); // click method end
}); // ready method end


$(document).ready(function(){
    console.log("jquery loaded!");

    // 1. select menu button
    // listen for the click
    $(".kimmel").click(function(){
        // 3. find the navigation
        $(".kimmelMap").addClass("active");
        $(".schineMap").removeClass("active");
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
