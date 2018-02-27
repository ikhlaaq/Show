$(function () {
    $('.top h1').text('This is cool');
    $('#list').children().text('Super!');
    $('.element').children().addClass('hidden');

    //Buttons

    $('.change-show').click(function () {
        $('.show').toggleClass('hidden');
    });

    $('.add-item').click(function (){
        $('#list').append('<li>Super!</li>');
    });

    $('.fav').click(function (){
        $('#list').append('<li>Favourite!</li>')
    });

    $(".cart").click(function () {
        $('#list').append('<li>Unliked!</li>')
    });

    $(".supercool").click(function () {
        $('#list').append('<li>Super Cool!</li>')
    });



});