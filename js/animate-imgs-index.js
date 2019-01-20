$(function(){
    /*animate imgs txts*/
    $('.img-bill').mouseenter(function () { 
        $(this).addClass('animated tada');
      });
      $('.img-bill').mouseout(function(){
        $(this).removeClass('animated tada');
      })
      $('.img-future').mouseenter(function () { 
        $(this).addClass('animated tada');
      });
      $('.img-future').mouseout(function(){
        $(this).removeClass('animated tada');
      })
      $('.img-data').mouseenter(function(){
        $(this).addClass('animated tada');
      }).mouseout(function(){
        $(this).removeClass('animated tada');
      })

      /*animate nav elements*/
      $('.item-nav').mouseenter(function(){
        $(this).addClass('animated pulse');
      }).mouseout(function(){
        $(this).removeClass('animated pulse');
      })
      $('.brand-logo').mouseenter(function(){
        $(this).addClass('animated pulse');
      }).mouseout(function(){
        $(this).removeClass('animated pulse');
      })
})
   


