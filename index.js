$(document).ready(function(){

    $('.leaf').click(function(){
        $(this).hide();
        $('.pollute').hide();
        $('.betternow').show();
        $('.cover').css('background-color','rgba(0, 0, 0, 0)');
        $('.pm2').show();
    });
    $('.pm2').click(function(){
        $(this).hide();
         $('.betternow').hide();
        $('.pollute').show();
        $('.cover').css('background-color','rgba(0, 0, 0, 0.5)')
        $('.leaf').show();
    })

});
