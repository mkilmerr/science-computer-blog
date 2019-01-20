$(function(){
    $('.modal').modal();
    $('.txt-brain').addClass('animated swing')
    .css({opacity:'1'}).
    hover(function(){
        $(this).removeClass('animated swing').addClass('animated tada');
    },
    function(){
        $(this).removeClass('animated tada');
    });

    $('#s1').addClass('animated bounceInDown')
    .css({opacity:'1'});
    $('#s2').addClass('animated bounceInDown')
    .css({opacity:'1'});
    $('#s3').addClass('animated bounceInDown')
    .css({opacity:'1'});
    $('#s4').addClass('animated bounceInDown')
    .css({opacity:'1'});
    $('#s5').addClass('animated bounceInDown')
    .css({opacity:'1'});
    $('#s6').addClass('animated bounceInDown')
    .css({opacity:'1'});
    $('#s7').addClass('animated bounceInDown')
    .css({opacity:'1'});
    $('#s8').addClass('animated bounceInDown')
    .css({opacity:'1'});

})