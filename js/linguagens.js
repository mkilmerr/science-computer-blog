$(function(){
    $('#title-main').addClass('animated zoomIn').css('font-size','25px');
    $('#title-main').hover(function(){
        $(this).css('font-size','40px');
    },
    function(){
        $(this).css('font-size','25px');
    });
    $('#txt-main').addClass('animated zoomInDown');
    //$('.ada').css({opacity:'1',transform:'translate3d(0,0,0'})
    $('#img-ada').addClass('animated jackInTheBox delay-1s').css('opacity','1');
    $('.lang').addClass('animated jackInTheBox');
    $('.img-lang').addClass('animated bounceIn delay-1s').css('opacity','1');
   
    $('.img-lang').hover(function () { 
        $(this).removeClass('animated bounceIn delay-1s').addClass('animated rubberBand');
     },
     function(){
         $(this).removeClass('animated rubberBand');
     })
     $('#img-py').hover(function(){
         $('#txt-python').css('opacity','1');
     },
     function(){
        $('#txt-python').css('opacity','0');
     })

     $('#img-php').hover(function(){
        $('#txt-php').css('opacity','1');
    },
    function(){
       $('#txt-php').css('opacity','0');
    })
    $('#img-haskell').hover(function(){
        $('#txt-haskell').css('opacity','1');
    },
    function(){
       $('#txt-haskell').css('opacity','0');
    })

    $('#img-js').hover(function(){
        $('#txt-js').css('opacity','1');
    },
    function(){
       $('#txt-js').css('opacity','0');
    })

    $('#img-c').hover(function(){
        $('#txt-c').css('opacity','1');
    },
    function(){
       $('#txt-c').css('opacity','0');
    })

    $('#img-kotlin').hover(function(){
        $('#txt-kotlin').css('opacity','1');
    },
    function(){
       $('#txt-kotlin').css('opacity','0');
    })
    $('#img-scala').hover(function(){
        $('#txt-scala').css('opacity','1');
    },
    function(){
       $('#txt-scala').css('opacity','0');
    })

    $('#img-lua').hover(function(){
        $('#txt-lua').css('opacity','1');
    },
    function(){
       $('#txt-lua').css('opacity','0');
    })

    $('#img-java').hover(function(){
        $('#txt-java').css('opacity','1');
    },
    function(){
       $('#txt-java').css('opacity','0');
    })
    $('#img-ruby').hover(function(){
        $('#txt-ruby').css('opacity','1');
    },
    function(){
       $('#txt-ruby').css('opacity','0');
    })

    $('#img-swift').hover(function(){
        $('#txt-swift').css('opacity','1');
    },
    function(){
       $('#txt-swift').css('opacity','0');
    })
    $('#txt-hello').hover(function(){
        $('.ada').css('opacity','1').addClass('animated jello');
    })
    $('#txt-hello').addClass('animated rotateIn');
    $('#title-tipos').addClass('animated zoomIn').css('font-size','25px');
    $('#title-tipos').hover(function(){
        $(this).css('font-size','40px');
    },
    function(){
        $(this).css('font-size','25px')
    })
    
    $('#title-tipos').hover(function(){
        $('#baixo-nivel').addClass('animated zoomIn').css('opacity','1');
        $('#alto-nivel').addClass('animated zoomIn').css('opacity','1');
    })
})