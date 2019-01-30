$(function () {

    $('#form').bind('submit', function (e) {
        e.preventDefault();

        var txt = $(this).serialize();
        console.log(txt);

        $.ajax({
            type: "POST",
            url: "ajax.php",
            data: txt,
            dataType: "json",
            success: function (response) {
                console.log('O nome é: ' + response.nome + ' e tem ' + response.qt_nome + ' caracteres.');
            },
            error: function () {
                console.log('Deu erro na requisição.');
            }
        });
    });

});