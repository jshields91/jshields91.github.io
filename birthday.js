$(function () {
    //show starting intro
    var intro = $(".intro");
    var introIndex = -1;

    function showNextQuote() {
        ++introIndex;
        if (introIndex < 6) {
            intro.eq(introIndex)
                .fadeIn(2000)
                .delay(2000)
                .fadeOut(2000, showNextQuote);
        } else {
            $("#question1").show();
        }

    }

    var bCookie = getCookie("bday");
    console.log(bCookie);
    if (bCookie.trim() == "1") {        
        $("#niceTry").show();
    } else {
        showNextQuote();
    }

    

    $("#question1Btn").click(function () {
        var dName = $("#dogName").val();
        if (dName.trim().toLowerCase() === "thorn") {
            $("#question1").hide();
            $("#question2").show();
        }
    });

    $("#question2Btn").click(function () {
        var hasAnswer = false;

        var answer = $("input[name=levelUp]:checked").val() || "";
        if (answer === "Self Esteem") {
            hasAnswer = true;
            $(".levelUpLocation").html("head to your favorite clothing stores");
            $("#question2Remark").html("That's a good choice");

        } else if (answer === "Love") {
            hasAnswer = true;
            $(".levelUpLocation").html("head to your Victoria's Secret and Cirillas");
            $("#question2Remark").html("I was hoping you'd pick Love xD");
        } else if (answer === "Relaxation") {
            hasAnswer = true;
            $(".levelUpLocation").html("head to your favorite spa/salon");
            $("#question2Remark").html("You sure deserve some relaxation");
        }

        if (hasAnswer) {
            $(".levelUpAnswer").html(answer);

            $("#question2").hide();
            $("#question3").show();
        }
    });

    $("#question3Btn").click(function () {
        var hasAnswer = false;

        var answer = Number($("input[name=food]:checked").val()) || 0;

        if (answer === 1) {
            hasAnswer = true;
            $(".foodLocation").html("Raw");

        } else if (answer === 2) {
            hasAnswer = true;
            $(".foodLocation").html("Texas Roadhouse");

        } else if (answer === 3) {
            hasAnswer = true;
            $(".foodLocation").html("Carrabas");
        } else if (answer === 4) {
            hasAnswer = true;
            $(".foodLocation").html("Red Lobster");
        }

        if (hasAnswer) {
            $("#question3").hide();
            $("#question4").show();
        }
    });

    $("#question4Btn").click(function () {
        var hasAnswer = false;

        var answer = $("input[name=activity]:checked").val() || "";

        if (answer === "Competitive") {
            hasAnswer = true;
            $(".activityLocation").html("race some fast go-carts");
            $("#question4Remark").html("Maybe we can make it high stakes ;) ");

        } else if (answer === "Collaborative") {
            hasAnswer = true;
            $(".activityLocation").html("do a breakout game");
            $("#question4Remark").html("I like when we work together");

        } else if (answer === "Intense") {
            hasAnswer = true;
            $(".activityLocation").html("go on a biplane tour");
            $("#question4Remark").html("Intense huh? Well you asked for it...");

        } else if (answer === "Scary") {
            hasAnswer = true;
            $(".activityLocation").html("go bungie jumping");
            $("#question4Remark").html("Scary huh? Hope you don't chicken out...");

        }

        if (hasAnswer) {
            $(".activityAnswer").html(answer);
            $("#question4").hide();
            $("#question5").show();
        }
    });

    $("#question5Btn").click(function () {
        var hasAnswer = false;

        var answer = Number($("input[name=fun]:checked").val()) || 0;

        if (answer === 1) {
            hasAnswer = true;
            $("#question5Remark").html("Great!");

        } else if (answer === 2) {
            hasAnswer = true;
            $("#question5Remark").html("Awww :( I'm trying...");

        }


        if (hasAnswer) {
            $("#question5").hide();
            $("#question6").show();
        }
    });

    $("#question6Btn").click(function () {
        var hasAnswer = false;

        var answer = Number($("input[name=happy]:checked").val()) || 0;

        if (answer === 1) {
            hasAnswer = true;
            $(".happyAnswer").html("See me, I'll draw you a map");

        } else if (answer === 2) {
            hasAnswer = true;
            $(".happyAnswer").html("Sorry, but I did say 'Don't Pick this'! No bonus clue for you :P");

        } else {
            $("#question5Remark").html("Come on, pick an answer!");
            $(".hiddenHappy").show();
        }


        if (hasAnswer) {
            $("#question6").hide();
            $("#summary").show();            
            setCookie("bday", "1", 1);
        }
    });

});