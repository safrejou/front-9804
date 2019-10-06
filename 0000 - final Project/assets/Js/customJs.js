$(document).ready(function () {

    // ---------- 6 - slider --------------
    var slideCount = $(".slider ul li").length;

    var slideWidth = $(".slider ul li").width();

    var slideHeight = $(".slider ul li").height();

    var slideArea = $ (".main");

    var sliderUlWidth = slideCount * slideWidth;


    $(".slider").css({
        width: slideArea,
        height: slideHeight
    });

    $(".slider ul").css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });


    function moveRight(){
        $(".slider ul").animate({
            left: -slideWidth
        },2000,function(){
            $(".slider ul li:first-child").appendTo(".slider ul");
            $(".slider ul").css('left', '0');
        });
    }

    setInterval(function () {
        moveRight();

    }, 5000);


// ---------- /6 - slider --------------
// -------- 6 - slider 2 --------------
    var slideCount2 = $(".slider-2 ul li").length;

    var slideWidth2 = $(".slider-2 ul li").width();

    var slideHeight2 = $(".slider-2 ul li").height();

    var slideArea2 = $ (".main");

    var sliderUlWidth2 = slideCount * slideWidth;


    $(".slider-2").css({
        width: slideArea2,
        height: slideHeight2
    });

    $(".slider-2 ul").css({
        width: sliderUlWidth2,
        marginLeft: -slideWidth2
    });


    function moveRight2(){
        $(".slider-2 ul").animate({
            left: -slideWidth2
        },4000,function(){
            $(".slider-2 ul li:first-child").appendTo(".slider-2 ul");
            $(".slider-2 ul").css('left', '0');
        });
    }
    setInterval(function () {
        moveRight2();

    }, 5000);


// -------- /6 - slider 2 --------------


// ------- 10 - form section - submit botton -------

    var name = document.getElementById("name");
    var email = document.getElementById("e-mail");
    var subject = document.getElementById("subject");
    var comment = document.getElementById("comment");

    document.querySelector('form.user-info').addEventListener('submit', function (e) {

        //prevent the normal submission of the form
        e.preventDefault();


        console.log(name.value);
        console.log(email.value);
        console.log(subject.value);
        console.log(comment.value);

    });

// ------- /10 - form section - submit botton -------

});