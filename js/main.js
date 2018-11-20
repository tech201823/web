var mySwiper = new Swiper('.swiper-container', {
    effect: "flip",
    loop: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
})

// top ボタン

$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// 文字浮き上がる
$('#animation').css('visibility', 'hidden');
$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('#animation').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 100) {
            $(this).addClass("fadeInDown");
        }
    });
});

