$(function(){

     $(window).scroll(function(){
      if($(this).scrollTop()>1){
        $('.header').addClass('fixed');
      }
      else if ($(this).scrollTop()<10){
        $('.header').removeClass('fixed');
      }
    });

    $('.drop-down-open').on('click', function(){
        $(this).addClass('active')
        $('.drop-down').addClass('active')
    });

    $('.account').on('click', function(){
        $('.account__drop-down').toggleClass('active')
    });

    $('.drop-down-2-open').on('click', function(){
        $('.drop-down-2').addClass('active')
    });

    $('.block__line-status-box--ban').on('click', function(){
        $(this).parent().parent().addClass('ban')
    });

     $('.btn-oper').on('click', function(){
        var btnOper = $(this).parent().parent().find('.btn-oper');
        btnOper.addClass('none');
        $(this).removeClass('none');
        $(this).addClass('active');
        $(this).closest('.col-5, .col-7').removeClass('pr-0 pl-0 pr-5');
        $(this).closest('.col-5, .col-7').addClass('col-12 pr-15 pl-15');
        if($(this).hasClass('active')){
        $(this).parents('.right-info--block__line').addClass('active')
        }else{
          $(this).parents('.right-info--block__line').removeClass('active')
        }
    });

    $('.btn-oper--do').on('click', function(){
        $(this).addClass('none');
        $(this).parent().find('.btn-oper--done').addClass('block active')
    });

    $('.btn-oper--pass').on('click', function(){
        $(this).parents('.right-info--block__line').addClass('active-pass')
    });



    $('.left-site__drop').on('click', function(){
        $(this).toggleClass('active')
        $('.left-site__drop-down').toggleClass('active')
    });

    $('.status-box--create').on('click', function(){
        $(this).toggleClass('none');
        $(this).parent().find('.status-box--done').addClass('block')
    });

    $('.redactors-block__item--send').on('click', function(){
        $(this).find('.redactors-block__drop-down-wrap').toggleClass('active')
    });

    $('.block-sorting__item').on('click', function(){
        $(this).find('.block-sorting__item--drop-down-wrap').toggleClass('active')
    });

    $('.actors__title').on('click', function(){
        $(this).toggleClass('active')
        $('.content-block__drop-down').toggleClass('active')
    });

   

    $('.faq__item').on('click', function(){
        $(this).toggleClass('active')
    });

    $('.link-3 a').on('click', function(){
        $('.participantss__item:first-child').addClass('active');
    }); 

    $('.participantss__title').on('click', function(){
      var parent = $(this).parents('.participantss__item') ;
        parent.toggleClass('active')
    });

    $('.header__menu-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });

     $('.confirm p').on('click', function(){
        $('.pupup-confirm-hint').toggleClass('active');
    });

     $('.pupup-confirm-btn').on('click', function(){
        $('.pupup-confirm-tel').removeClass('active');
    });

    $('.header__text-btn').on('click', function(){
      if($(this).hasClass('active')){
        $('.open-menu').addClass('left-site__menu-icon')
      }
    });

     $('.header__text-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.left-site').toggleClass('active');
        $('body').toggleClass('fixed');
        $('.header').removeClass('fixed');
        $('.progres').toggleClass('active');
    });

     $('.left-site__menu-icon').on('click', function(){
      if($(this).hasClass('left-site__menu-icon')){
        $('.left-site__menu-icon').addClass('open-menu');
        $('.header__text-btn').addClass('active')
        $('.left-site').addClass('active');
        $('body').addClass('fixed');
        $('.header').removeClass('fixed');
        $('.progres').addClass('active');
        $('.open-menu').removeClass('left-site__menu-icon');
      }
    });

    $('.open-popup').on('click', function(){
        $('.popup').toggleClass('active');
    });

    $('.remove-popup').on('click', function(){
        $('.popup').removeClass('active');
    });

    $('.search-icon').on('click', function(){
        $('.search-input').toggleClass('active');
    });

    $('.drop-down-close').on('click', function(){
        $('.drop-down').removeClass('active');
    });


    $('.drop-down-2 a').on('click', function(){
        $('.header__menu-btn.active').removeClass('active')
        $('.header__menu.active').removeClass('active')
    });



    $('.personal-btn, .close-popup, .popup-close-arrow, .personal-settings').on('click', function(){
        $('.popup-form').toggleClass('active')
    });

    $('.controls-item').on('click', function(){
        $(this).toggleClass('active')
    });

    $('.change-password').on('click', function(){
        $('.change-password--popup').addClass('active')
    });

     $('.message-svg, .close-popup').on('click', function(){
        $('.popup-moderator').toggleClass('active')
    });

     $('.personal-notification, .popup-close-arrow-2').on('click', function(){
        $('.popup__personal-notification').toggleClass('active')
    });

     $('.trevel-coins, .popup-grafic .btn').on('click', function(){
        $('.popup-grafic').toggleClass('active')
    });


//------------------oper-popup------------------

    $('.btn-open__oper-popup').on('click', function(){
        $('.popup-oper').addClass('active')
    });

    $('.popup-feedback--open').on('click', function(){
        $('.popup-feedback').addClass('active')
    });

    $('.popup-renouncement--open').on('click', function(){
        $('.popup-renouncement').addClass('active')
    });

    $('.popup-mediator-1--open').on('click', function(){
        $('.popup-mediator-1').addClass('active')
    });

    $('.popup-mediator-2--open').on('click', function(){
        $('.popup-mediator-2').addClass('active')
    });

    $('.popup-mediator-3--open').on('click', function(){
        $('.popup-mediator-3').addClass('active')
    });

    $('.popup-mediator-4--open').on('click', function(){
        $('.popup-mediator-4').addClass('active')
    });

    $('.popup-mediator-5--open').on('click', function(){
        $('.popup-mediator-5').addClass('active')
    });

    $('.popup-mediator-6--open').on('click', function(){
        $('.popup-mediator-6').addClass('active')
    });

    $('.popup-answer--open').on('click', function(){
        $('.popup-answer').addClass('active')
    });

    $('.popup-filter--open').on('click', function(){
        $('.popup-filter').addClass('active')
    });

    $('.popup-progect--open').on('click', function(){
        $('.popup-progect').addClass('active')
    });

    $('.popup-oper__btn--close').on('click', function(){
        $('.popup-oper').removeClass('active')
        $('.popup-oper__wrap').removeClass('active')
        $('.claim-popup__wrap').removeClass('active')
    });

    $('.popup-mediator--add').on('click', function(){
        var copyItem = $('.popup-mediator--template .popup-mediator__item').clone()
        $(this).parent().prepend(copyItem)
    });

    $('.variant-answer--add').on('click', function(){
        var copyItem1 = $('.popup-mediator--template .variant-answer').clone()
        $(this).parent().prepend(copyItem1)
    });

    $('.popup-interview--add').on('click', function(){
        var copyItem3 = $('.popup-mediator--template .oper-box-variant').clone();
        $(this).closest('.oper-box-variant-wrap').prepend(copyItem3);
    });

    $('.item-controls--close').on('click', function(){
        $(this).closest('.popup-mediator__item').remove();
    });

    $('.document__wrapper--close').on('click', function(){
      $(this).closest('.document__wrapper').remove();
    });

    $('.variant-answer-del').on('click', function(){
      $(this).closest('.oper-box-variant').remove();
    });

//------------------oper-popup------------------


//------------------claim-popup------------------

    $('.popup__grounds-open').on('click', function(){
        $('.claim-popup__grounds').addClass('active')
    });

    $('.popup__notif-open').on('click', function(){
        $('.claim-popup__notif').addClass('active')
    });
    
    $('.popup__notif-2-open').on('click', function(){
        $('.claim-popup__notif-2').addClass('active')
    });

    $('.popup__errors-open').on('click', function(){
        $('.claim-popup__errors').addClass('active')
    });

    $('.popup__files-open').on('click', function(){
        $('.claim-popup__files').addClass('active')
    });

//------------------oclaim-popup------------------

    $('.modal-donate--open').on('click', function(){
        $('.modal-donate').addClass('active')
    });

    $('.close-modal').on('click', function(){
        $('.modal-donate, .modal-answer').removeClass('active')
    });

    $('.modal-answer--open').on('click', function(){
        $('.modal-answer').addClass('active')
    });

     $('.sorting-block__item').on('click', function(){
        $(this).toggleClass('active')
    });
    


     $('.filter, .block-line-title ').on('click', function(){
      $(this).toggleClass('active')
    });

    $('.cookie-btn, .cookie-close').on('click', function(){
      $('.popup-cookie').removeClass('active')
    })



    $(function(){
      $('tr .checkbox, .content-block-statements .checkbox').on('change', function(){
        var navcheck = $(this).closest('.content-block');
        if($(this).closest('.content-block').find('tr .checkbox, .content-block-statements .checkbox').prop('checked')){
          navcheck.find('.controls .checkmark').addClass('disabled')
          navcheck.find('.controls .checkbox').prop('checked', true);
        }else{
          navcheck.find('.controls .checkbox').prop('checked', false);
          navcheck.find('.controls .checkmark').removeClass('disabled')
        }
      });
    });

    $('.checkbox-all').on('change', function(){
      var nacheck2 = $(this).closest('.content-block')
      $(this).parent().find('.checkmark').removeClass('disabled')
      if($(this).closest('.content-block').find('tr .checkbox, .content-block-statements .checkbox').prop('checked')){
        $(this).closest('.content-block').find('tr .checkbox, .content-block-statements .checkbox').prop('checked', false)
      }else{
        $(this).closest('.content-block').find('tr .checkbox, .content-block-statements .checkbox').prop('checked', true)
      }
    });


    $( ".trigger-btn" ).on( "click", function() {
      var file =  $(this).parent('.col').parent('.row').find("input[type='file']" )
      file.trigger( "click" );
    });

    $( ".oper-btn__file" ).on( "click", function() {
      var file2 =  $(this).parent().find("input[type='file']" )
      file2.trigger( "click" );
    });


    $( document ).ready(function() {
        $('.password-wrap span').click(function(){
            var type = $('#password').attr('type') == "text" ? "password" : 'text';
            $('#password').prop('type', type);
            $('.password-wrap').toggleClass('active');
        });
    });


    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 100;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });

    $('a[data-target^="anchor2"]').bind('click.smoothscroll', function(){
        var target2 = $(this).attr('href'),
            bl_top2 = $(target2).offset().top - 150;
        $('body, html').animate({scrollTop: bl_top2}, 0);
        return false;
    });

    $(document).mouseup(function (e){ 
        var element = $(".drop-down.active, .left-site-wrap, .header__text-btn, .account__drop-down.active, .pupup-confirm-tel, .popup-form-item, .popup-notification, .drop-down, .drop-down-open, .popup-oper__wrap, .redactors-block__drop-down-wrap, .block-sorting__item--drop-down-wrap, .claim-popup__wrap, .modal-donate, .modal-answer, .change-password--popup");
        if (!element.is(e.target) && element.has(e.target).length === 0) {
            $(".drop__down, .left-site, body, .header__text-btn, .pupup-confirm-tel, .account__drop-down.active, .popup-form, .popup__personal-notification, .drop-down, .drop-down-open, .drop-down-2, .popup-oper__wrap, .popup-oper, .redactors-block__drop-down-wrap, .block-sorting__item--drop-down-wrap, .claim-popup__wrap, .modal-donate, .modal-answer, .change-password--popup").removeClass("active");
            $("body").removeClass("fixed");
        };
    });

    $(document).keyup(function(e) {
      if(e.keyCode == 27) {
        $('.popup-oper').removeClass('active')
        $('.popup-oper__wrap').removeClass('active')
        $('.claim-popup__wrap').removeClass('active')
         $(".drop__down, .left-site, body, .header__text-btn, .pupup-confirm-tel, .account__drop-down.active, .popup-form, .popup__personal-notification, .drop-down, .drop-down-open, .drop-down-2, .popup-oper__wrap, .popup-oper, .redactors-block__drop-down-wrap, .block-sorting__item--drop-down-wrap, .claim-popup__wrap, .modal-donate, .modal-answer, .change-password--popup").removeClass("active");
      };
    });
    



(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:800px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;

  const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {
      // clean up old instances and inline styles when available
      $(".swiper-container .swiper-wrapper, .swiper-container-5 .swiper-wrapper, .swiper-container-6 .swiper-wrapper, .swiper-container-2-0 .swiper-wrapper, .swiper-container-2-1 .swiper-wrapper, .swiper-container-2-1-1 .swiper-wrapper").addClass('row');
      // $(".swiper-container, .swiper-container-5, .swiper-container-6, .swiper-container-2-0, .swiper-container-2-1, .swiper-container-2-1-1").removeClass('swiper-container-initialized swiper-container-horizontal');
      $(".swiper-pagination, .swiper-pagination-2, .swiper-pagination-3, .swiper-pagination-2-0").css('display', 'none');
      if ( mySwiper !== undefined ) mySwiper.destroy( true);
    // or/and do nothing
    return;
      // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        $(".swiper-container .swiper-wrapper, .swiper-container-5 .swiper-wrapper, .swiper-container-6 .swiper-wrapper, .swiper-container-2-0 .swiper-wrapper, .swiper-container-2-1 .swiper-wrapper, .swiper-container-2-1-1 .swiper-wrapper").removeClass('row');
        $(".swiper-pagination, .swiper-pagination-2, .swiper-pagination-3, .swiper-pagination-2-0").css('display', 'block');
        return enableSwiper();
      }
    };

    const enableSwiper = function() {

      mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        breakpoints:{
        800: {
          spaceBetween: 0,
          initialSlide: 0,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        },
      });
      mySwiper = new Swiper ('.swiper-container-2-0', {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
        pagination: {
          el: '.swiper-pagination-2-0',
          type: 'bullets',
        },
        breakpoints:{
        800: {
          spaceBetween: 0,
          } 
        },
      });
      mySwiper = new Swiper ('.swiper-container-2-1', {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 1,
        pagination: {
          el: '.swiper-pagination-2-0',
          type: 'bullets',
        },
        breakpoints:{
        800: {
          spaceBetween: 0,
          } 
        },
      });
      mySwiper = new Swiper ('.swiper-container-2-1-1', {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 1,
        pagination: {
          el: '.swiper-pagination-2-0-1',
          type: 'bullets',
        },
        breakpoints:{
        800: {
          spaceBetween: 0,
          } 
        },
      });
      mySwiper = new Swiper ('.swiper-container-5', {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
        pagination: {
          el: '.swiper-pagination-2',
          type: 'bullets',
        },
        breakpoints:{
        600: {
          slidesPerView: 2,
        },
        800: {
          spaceBetween: 0,
          } 
        },
      });
      mySwiper = new Swiper ('.swiper-container-6', {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination-3',
          type: 'bullets',
        },
        breakpoints:{
        800: {
          spaceBetween: 0,
          } 
        },
      });
    };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();
})(); /* IIFE end */


    var swiper = new Swiper('.swiper-container-2', {
      slidesPerView: 1,
      spaceBetween: 25,
      initialSlide: 1,
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.slider-pagination',
          type: 'bullets',
        },
      breakpoints:{
        800: {
          slidesPerView: 2,
          pagination: {
            el: '.none'
          }
        },
        1180: {
          centeredSlides: true,
          slidesPerView: 3,
          initialSlide: 1,
        }
      }
    });


    var swiper = new Swiper('.slider-4', {
      slidesPerView: 1,
      spaceBetween: 30,
      hashNavigation: {
        watchState: true,
      },
      pagination: {
        el: '.swiper-pag',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var swiper = new Swiper('.swiper-container-3', {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 1,
       navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
      pagination: {
          el: '.slider-pagination',
          type: 'bullets',
        },
      breakpoints:{
        800: {
          slidesPerView: 2,
          spaceBetween: 40,
          pagination: {
            el: '.none'
          }
        },
        1180: {
          centeredSlides: true,
          slidesPerView: 3,
          initialSlide: 1,
        }
      }
    });

    var swiper = new Swiper('.swiper-container-4', {
      slidesPerView: 1,
      spaceBetween: 45,
      initialSlide: 1,
       navigation: {
        nextEl: '.button-next-2',
        prevEl: '.button-prev-2',
      },
       pagination: {
          el: '.slider-pagination',
          type: 'bullets',
        },
    });

    swiper = new Swiper ('.swiper-container-7', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination-4',
          type: 'bullets',
        },
        breakpoints:{
        600: {
          slidesPerView: 2,
          centeredSlides: false,
        },
      }
      });

     $('select').selectize();
     // $('.selectize-input > input').prop('disabled', 'disabled');

    $('input:file').styler({
      fileBrowse: 'Загрузить',
    });

    $('.tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.tab_content').find('.tab-item').removeClass('active-tab');
        $('.tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $("div[data-item-id="+id+"]").addClass('active-tab').fadeIn();
        return false;
    });
     $('.tab__wrap .tab__drop-down-value').on('click', function(event) {
      var ide = $(this).attr('data-id');
        $(this).closest('.content-box ').find('.tab_content .tab-item').removeClass('active-tab');
        $("div[data-item-id="+ide+"]").addClass('active-tab').fadeIn();
        return false;
    });

    $('.tab-claim-input').on('click', function(){
       $(this).closest('.tab__wrap').find('.tab__drop-down').toggleClass('active');
    })

    $('.tab__drop-down-value').on('click', function(){
     var dropVal = $(this).text()
     $(this).closest('.tab__wrap').find('.tab-claim-input').text(dropVal);
     $(this).parent().removeClass('active')
    })

    $('.single').on('click',function() {
      var flag = true;
      $("#select").each(function (i) {
        if ($(this).val() !== 'not') {
           $('.check-option .claim-input').addClass('not-active');
          flag = false;
        } 
      });
      if (flag) {
        $('.check-option .claim-input').removeClass('not-active');
      };
    });

    $( window ).scroll(function() {
      $(".cabinet-element").each(function() {
        var top43 = (this).offsetTop;
        if(window.pageYOffset > top43){
          $('.cabinet-element').removeClass('active');
          $(this).addClass('active');
        }
      });
    });

    $('.navigation-arrows-top').on('click', function(){
      var next2 = $(".cabinet-element.active").prev('.cabinet-element');
      $('html, body').animate({
        scrollTop: next2.offset().top - 100
        }, 1000);
    });
    $('.navigation-arrows-bottom').on('click', function(){
      var prev2 = $(".cabinet-element.active").next('.cabinet-element');
      $('html, body').animate({
        scrollTop: prev2.offset().top - 100
        }, 1000);
    });



    window.onscroll = function() {myFunction()};
    
    function myFunction() {
      if (window.pageYOffset > sticky) {
        $('.right-site-nav').addClass('fixed');
      } else {
        $('.right-site-nav').removeClass('fixed');
      };
      return false;
    };


    document.onscroll = function() {myFun()};


    var boc = document.getElementById("anchor-link-1");
    var boc2 = document.getElementById("anchor-link-2");
    var boc3 = document.getElementById("anchor-link-3");
    var boc4 = document.getElementById("anchor-link-4");
    var boc5 = document.getElementById("anchor-link-5");
    var boc6 = document.getElementById("anchor-link-6");
    var boc7 = document.getElementById("anchor-link-7");
    var boc8 = document.getElementById("anchor-link-8");
    var boc9 = document.getElementById("anchor-link-9");
    var boc10 = document.getElementById("anchor-link-10");
    var boc11 = document.getElementById("anchor-link-11");
    
    function myFun() {

        if (window.pageYOffset > stick) {
          $('.link').removeClass('text');
          $('.link-1').addClass('active text');
        }else{
          $('.link-1').removeClass('active');
        };
        if (window.pageYOffset > stick2) {
          $('.link').removeClass('text');
          $('.link-2').addClass('active text');
        }else{
          $('.link-2').removeClass('active');
        }; 
        if (window.pageYOffset > stick3) {
          $('.link').removeClass('text');
          $('.link-3').addClass('active text');
        }else{
          $('.link-3').removeClass('active');
        }; 
        if (window.pageYOffset > stick4) {
          $('.link').removeClass('text');
          $('.link-4').addClass('active text');
        }else{
          $('.link-4').removeClass('active');
        }; 
        if (window.pageYOffset > stick5) {
          $('.link').removeClass('text');
          $('.link-5').addClass('active text');
        }else{
          $('.link-5').removeClass('active');
        }; 
        if (window.pageYOffset > stick6) {
          $('.link').removeClass('text');
          $('.link-6').addClass('active text');
        }else{
          $('.link-6').removeClass('active');
        }; 
        if (window.pageYOffset > stick7) {
          $('.link').removeClass('text');
          $('.link-7').addClass('active text');
        }else{
          $('.link-7').removeClass('active');
        }; 
        if (window.pageYOffset > stick8) {
          $('.link').removeClass('text');
          $('.link-8').addClass('active text');
        }else{
          $('.link-8').removeClass('active');
        }; 
        if (window.pageYOffset > stick9) {
          $('.link').removeClass('text');
          $('.link-9').addClass('active text');
        }else{
          $('.link-9').removeClass('active');
        }; 
        if (window.pageYOffset > stick10) {
          $('.link').removeClass('text');
          $('.link-10').addClass('active text');
        }else{
          $('.link-10').removeClass('active');
        }; 
        if (window.pageYOffset > stick11) {
          $('.link').removeClass('text');
          $('.link-11').addClass('active text');
        }else{
          $('.link-11').removeClass('active');
        }; 
        return false;
    };
    
    

    if($('div').hasClass('right-site-nav')){
      var box = document.getElementById("box");
      var sticky = box.offsetTop - 70;
      var stick = boc.offsetTop;
      var stick2 = boc2.offsetTop;
      var stick3 = boc3.offsetTop;
      var stick4 = boc4.offsetTop;
      var stick5 = boc5.offsetTop;
      var stick6 = boc6.offsetTop;
      var stick7 = boc7.offsetTop;
      var stick8 = boc8.offsetTop;
      var stick9 = boc9.offsetTop;
      var stick10 = boc10.offsetTop;
      var stick11 = boc11.offsetTop;
      myFunction();
      myFun();
    }

    // jQuery(document).ready(function(){
    //   jQuery('.scrollbar-light').scrollbar();
    // });

    //--- script video ---//
    
    jQuery( document ).ready(function($) {
      $('.myvideo').click(function() {
        this.paused ? this.play() : this.pause();
      });
    });
        
//--- end video ---//

//--- date ---//


    // $( function() {
    //     $( ".claim-input-date" ).datepicker({
    //        dateFormat : "dd-mm-yy",
    //        // minDate: new Date($('#hiddendelivdate').val()),
    //        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    //        dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    //     });
    // } );



      // var maxCount = 10;
      // $('.claim-input-date').keyup(function(){
      //   var count = $(this).val().length;
      //   var countNum = $(this).val();
      //   if(count == 2 || count == 5){
      //     $(this).val(countNum + "-");
      //   };
      //   if (event.keyCode == 8) {
      //     $(this).val(countNum );
      //   }
      //   if(count > 10){
      //     this.value = this.value.substr(0, maxCount);
      //   }
      // });


//--- date ---//

    $( ".trigger-btn" ).on( "click", function() {
      var file =  $(this).parent('.col').parent('.row').find("input[type='file']" )
      file.trigger( "click" );
    });

    $('.claim-search__box').on('click', function(){
      var serchInput = $(this).closest('.claim-search--wrap').find('input');
     $('.contants__info').addClass('none')
    });

    $('.claim-input--search').blur(function() {
      var searchPerent = $(this).closest('.claim-search--wrap');
      searchPerent.find('.claim-search__drop-down, .claim-search__results-found').removeClass('active')
    });


    // $(document).ready(function(){

    //   $(".search-input-2, .claim-search").keyup(function(){
    //     var topr = $(this).parent().parent().find('.search__drop-down, .claim-search__drop-down, .claim-search__results-found')
    //     var box23 = $(this).val();
    //     var main = box23.length *100;
    //     var value = (main / 50);
    //     var count = 50 - box23.length;

    //     if(box23.length <= 2)
    //     {
    //       topr.removeClass('active');
    //     }
    //     else
    //     {
    //       topr.addClass('active');
    //     }
    //     return false;
    //   });
    // });


    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Text', 'Text', 'Text', 'Text', 'Text'],
        datasets: [{
          label: '',//optional
          data: [75, 18, 9, 60, 50],
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#2181F1',
          pointBackgroundColor: '#2181F1',
          borderWidth: 2,
          borderCapStyle: 0
        }]
      },
      options: {
        legend:{
          display: false,
        },
        labels: {
            // This more specific font property overrides the global property
            defaultFontColor: '#38393E',
            defaultFontFamily: "'Montserrat', sans-serif"
          },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });

    $('.option-1').on('click', function(){
      $(body).addClass('adsfsd')
    });

    });



//-----preolader-----//

$('.claim-file').on('click', function(){
      $('body').removeClass('loaded');
      setTimeout(function () {
        $('body').addClass('loaded');
        $('body').removeClass('loaded_hiding');
      }, 500);
    });

    $('.formation').on('click', function(){
      $(this).addClass('active')
      $('body').removeClass('loaded');
      setTimeout(function () {
        $('body').addClass('loaded');
        $('body').removeClass('loaded_hiding');
      }, 500);
    });


window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
//-----preolader-----//