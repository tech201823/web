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
        if ($(this).scrollTop() > 870) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
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

// para
var particles = Particles.init({
    selector: '.background',
    sizeVariations: 10,
    color: ['#00bbdd', '#404B69', '#DBEDF3'],
    connectParticles: true
});

// textillate
// added

$('.tlt1').textillate({
    // the default selector to use when detecting multiple texts to animate
    selector: '.texts',

    // enable looping
    loop: true,

    // sets the minimum display time for each text before it is replaced
    minDisplayTime: 2000,

    // sets the initial delay before starting the animation
    // (note that depending on the in effect you may need to manually apply
    // visibility: hidden to the element before running this plugin)
    initialDelay: 0,

    // set whether or not to automatically start animating
    autoStart: true,

    // custom set of 'in' effects. This effects whether or not the
    // character is shown/hidden before or after an animation
    inEffects: [],

    // custom set of 'out' effects
    outEffects: ['hinge'],

    // in animation settings
    in: {
        // set the effect name
        effect: 'fadeInDownBig',

        // set the delay factor applied to each consecutive character
        delayScale: 1.5,

        // set the delay between each character
        delay: 50,

        // set to true to animate all the characters at the same time
        sync: false,

        // randomize the character sequence
        // (note that shuffle doesn't make sense with sync = true)
        shuffle: true,

        // reverse the character sequence
        // (note that reverse doesn't make sense with sync = true)
        reverse: true,

        // callback that executes once the animation has finished
        callback: function () { }
    },

    // out animation settings.
    out: {
        effect: 'bounceOut',
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: true,
        reverse: false,
        callback: function () { }
    },

    // callback that executes once textillate has finished
    callback: function () { },

    // set the type of token to animate (available types: 'char' and 'word')
    type: 'char'
});

