$(function () {
  // ハンバーガーメニュー設定
  $('.menu-content a[href]').on('click', function(event) {
    $('.menu-btn').trigger('click');
  });

});
;

$(window).on('load scroll',function (){
  $('.js-animation').each(function(){
    var target = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    if (scroll > target - height){
      $(this).addClass('js-active');
    }
  });

});

function EachTextAnimeControl() {
  $('.top_title h1').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });

  $('.top_title p').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext--second");

    } else {
      $(this).removeClass("appeartext--second");
    }
  });
}

$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".top_title h1");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
  EachTextAnimeControl();
});

$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".top_title p");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
  EachTextAnimeControl();
});