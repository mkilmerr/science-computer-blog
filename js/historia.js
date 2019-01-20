$(function(){
   //site body show effect;
   $('#title-num').hover(function(){
       $('.txt-num').css({opacity:'1',transform:'translate3d(-10px,0,0)'});
       
   },
   function(){
    $('.txt-num').css({opacity:'1',transform:'translate3d(0,-10px,0)'});
   })
   // end site body show effect//
   
   $('#title-bin').hover(function () {
        $('.txt-bin').css({opacity:'1',transform:'translate3d(-10px,0,0)'})
        $('.img-digital').addClass('animated zoomOutUp');
   },
   function(){$('.txt-bin'.css({opacity:'1',transform:'translate3d(0,-10px,0)'}))});
  /*alan img configure effects*/
   $('.frase-alan').css({opacity:'0.8',transform:'translate3d(0,0,0)'});
   $('.img-alan').addClass('animated lightSpeedIn delay-2s');

   /*title História da Computação*/
   $('.txt-his').hover(function () { 
       $('.container').css({opacity:'1'}).addClass('animated bounceInDown');
       $(this).css({transform:'translate3d(0,-10px,0)',transition:'2s'})
    },
    function(){
        $(this).css({transform:'translate3d(-100px,0,0)',transition:'2s'})
    })
    $('#title-his').css({transform:'translate3d(0,0,0)',opacity:'1'})
    $('.slider').slider();

    $('.empresas').mouseenter(function(){
        $(this).addClass('animated bounce');
    }).mouseout(function(){
        $(this).removeClass('animated bounce');
    })

})