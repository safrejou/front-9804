$(document).ready(function () {

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

// ------- 10 - form section - submit botton -------

});