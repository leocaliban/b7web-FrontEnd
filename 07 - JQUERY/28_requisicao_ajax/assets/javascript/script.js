$(function () {

   $('#form').bind('submit', function (e) {
       e.preventDefault();

       var txt = $(this).serialize();
       console.log(txt);

       $.ajax({
           type: "GET",
           url: "ajax.php",
           data: txt,
           success: function (response) {
               console.log(response);
               $('.div').html('Resultado: ' + response);
           },
           error:function(){
               console.log('Deu erro na requisição.');
           }
       });
   });

});