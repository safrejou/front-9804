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

    $(".slider ul li:last-child").prependTo(".slider ul");


    function moveLeft() {
        $(".slider ul").animate({
            right: +slideWidth
        }, 300, function () {
            $(".slider ul li:last-child").prependTo(".slider ul");
            $(".slider ul").css('right', '0');
        });
    }

    function moveRight(){
        $(".slider ul").animate({
            left: -slideWidth
        },500,function(){
            $(".slider ul li:first-child").appendTo(".slider ul");
            $(".slider ul").css('left', '0');
        });
    }

    $("a.control-next").click(function (e) {
        moveRight();
        return false;
    });

    $("a.control-pre").click(function (e) {
        moveLeft();
        return false;
    });
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

    $(".slider-2 ul li:last-child").prependTo(".slider-2 ul");


    function moveLeft2() {
        $(".slider-2 ul").animate({
            right: +slideWidth2
        }, 300, function () {
            $(".slider-2 ul li:last-child").prependTo(".slider-2 ul");
            $(".slider-2 ul").css('right', '0');
        });
    }

    function moveRight2(){
        $(".slider ul").animate({
            left: -slideWidth2
        },500,function(){
            $(".slider-2 ul li:first-child").appendTo(".slider-2 ul");
            $(".slider-2 ul").css('left', '0');
        });
    }

    $("a.control-next-2").click(function (e) {
        moveRight2();
        return false;
    });

    $("a.control-pre-2").click(function (e) {
        moveLeft2();
        return false;
    });
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