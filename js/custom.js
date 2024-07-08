$(function () {
    $('#header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .gnb').toggleClass('on');
    });

    $('#header .gnb>ul>li>a').on('click', function (e) {
        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideDown();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('#header .gnb').removeClass('on');
        $('#header .gnb>ul>li ul').removeAttr('style')
    })
})