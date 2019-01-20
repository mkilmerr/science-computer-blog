//js of index.html file//;

/*moviment of carousel*/
$(function(){
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  /*end moviment of carousel */

  /*moviment title bill gates */
  $('.title-bill').hover(function(){
    $(this).css({opacity:'1',transition:'1s',transform:'translate3d(0,0,0)',color:'#4169E1'})
  },
  function(){
    $(this).css({opacity:'1',transition:'1s',transform:'translate3d(-10px,-10px,-10px)',color:'#4169E1'})
  })
  //end moviment title bill gates;

/*img bill gates*/
  $('.img-bill').hover(function() {
    $('.legend-bill').css({opacity:'1',transform:'translate3d(0,0,0)',transition:'1s',background:'black'});
    
  },
  function(){
   $('.legend-bill').css({opacity:0,transform:'translate3d(-100px,0,0)'});
  })
  //end img bill gates;

  /*imgs lateral effects*/
  $('#face').hover(function(){
    $('.lateral').css('opacity','');
  },
  function(){
    $('.lateral').css('opacity','1');
  })
  $('.collapsible').collapsible();
  //end imgs lateral effects;

/*img future*/
  $('.title-future').hover(function(){
    $(this).css({opacity:'1',transition:'1s',transform:'translate3d(0,0,0)'})
  },
  function(){
    $(this).css({opacity:'1',transition:'1s',transform:'translate3d(-10px,-10px,-10px)'})
  })
  $('.dropdown-trigger').dropdown();
  $('.title-data').hover(function(){
    $(this).css({opacity:'1',transform:'translate3d(0,0,0)'});
  },
  function(){
    $(this).css({opacity:'1',transform:'translate3d(-100px,0,0)'});
  })
});

//end img future;

