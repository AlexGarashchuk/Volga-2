//$('.burger').click(function(){
//    $('.hidden-menu').slideToggle(400);
//})

//tab

(function($) {
  $(function() {
    $(".tabs__caption").on("click", ".br:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".section_tab")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);


//tab-bottom

(function($) {
  $(function() {
    $(".tabs__caption__main-bottom").on("click", ".br.bottom-main:not(.main-bottom_active)", function() {
      $(this)
        .addClass("main-bottom_active")
        .siblings()
        .removeClass("main-bottom_active")
        .closest(".section_tab")
        .find("div.main-bottom_content__tab")
        .removeClass("main-bottom_active")
        .eq($(this).index())
        .addClass("main-bottom_active");
    });
  });
})(jQuery);




//tabs-show

var a = $('.arrow-bottom').parent();


$('.arrow-bottom').on('click', function(){
   $(this).parent().children('.tabs__content__block-hidden_js').slideToggle();
    $(this).children().toggleClass('btn-arrow_js');
    $('.main-bottom_content__tab__hid').toggleClass('main-bottom_content__tab__inf__js');
    
})








//отмена перехода по ссылке

$('.noLink, .add-com_btn__ic').click(function(e){
    e.preventDefault();
});

$('.burger').click(function(){
    $('.hidden-menu').slideToggle(400);
})


//$('.add-com_btn__ic').on(click function(){
//   $(this).find().addClass('add-com_btn__ic__js');
//});

$('.other-articles_box__absolut').click( function(){
    $(this).toggleClass('other-articles_box__absolut__js');
    $(this).find('.other-bottom').toggleClass('other-bottom__js');
})

var t;
function up() {
    var top =Math.max(document.body.scrollTop,document.documentElement.scrollTop)
    if(top>0){
        window.scrollBy(0,-100);
        t = setTimeout('up()',20); 
    }else clearTimeout(t);
    return false;
}

//открытие подпунктов в сайтбаре

var a = $('.sitebar_container-content-article_container li');
    $(a).click(function(){
       $(this).find('.sitebar_container-content-article_container__hidden-list').slideToggle(500);
    });


