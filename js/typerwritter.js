//js of typerwritter area (historia.html) file//;

//function typerwritter//

$(function(){
function typeWritter(texto,idElemento,tempo){
    var char = texto.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        document.getElementById(idElemento).innerHTML += next;
        stop();
    }, tempo);
}
//end function typerwritter//


//call typerwritter in typerwritter area //
typeWritter('Computação é sobre resolver problemas e superação!','log',100);
typeWritter('PROGRAMADORES QUE MUDARAM O MUNDO','intro',150);
typeWritter('Ada Lovelace','ada',300);
typeWritter('Alan Turing','turing',300);
typeWritter('Linus Torvalds','linus',300);
typeWritter(' Guido van Rossum','guido',300);
typeWritter('Steve Jobs','jobs',300);
typeWritter('Bill Gates','bill',300);
typeWritter('John Backus','john',300);
typeWritter('Bjarne Stroustrup','bjarne',300);
typeWritter('Alan Kay','kay',300);
typeWritter('Richard Stallman','stellman',300);
typeWritter('Tim Berners-Lee ','lee',300);
typeWritter('Irmã Mary Kenneth Keller','keller',200);
typeWritter('Jean Sammet','jean',300);
// end call typerwritter in typerwritter area //



//animate txt typerwritter and programmers names //;
    $('#log').mouseenter(function () { 
        $(this).addClass('animated bounce').css('transition','1s');
    }).mouseout(function(){
        $(this).removeClass('animated bounce');
    })
    $('.item-typer').mouseenter(function(){ $(this).addClass('animated pulse').css('font-size','17px')}).mouseout(function() {$(this).removeClass('animated pulse').css('font-size','15px'); })
   
})
// end animate txt typerwritter and programmers names //;