$(function () {

   $('li').hover(function () {
           // over
           $(this).find('.menu2').slideDown();
       }, function () {
           // out
           $(this).find('.menu2').slideUp();
       }
   );

});