$(function () {

    $('#altura').bind('blur', function (e) {
        var valor = $('#altura').val();
        $('.altura-figura').animate(
            {
                'height': '120px'
            },
            {
                duration: 1500,
                complete: function () {
                    $('.altura-figura p').addClass('altura-valor');
                    $('.altura-valor').html(valor + ' cm');
                }
            }
        );
    });

    $('#peso').bind('blur', function (e) {
        var valor = $('#peso').val();
        $('.peso-figura').animate(
            {
                'height': '120px'
            },
            {
                duration: 1500,
                complete: function () {
                    $('.peso-figura p').addClass('peso-valor');
                    $('.peso-valor').html(valor + ' kg');
                }
            }
        );
    });



    $('button').bind('click', function (e) {
        var altura = $('#altura').val();
        var peso = $('#peso').val();

        altura = altura.replace(',', '.');
        peso = peso.replace(',', '.');

        var imc = peso / (altura * altura);

        var resultadoIMC = '';
        if (imc < 16) {
            resultadoIMC = 'Baixo peso muito grave';
        } else if (imc >= 16 && imc < 16.99) {
            resultadoIMC = 'Baixo peso grave';
        } else if (imc >= 17 && imc < 18.49) {
            resultadoIMC = 'Baixo peso';
        } else if (imc >= 18.50 && imc < 24.99) {
            resultadoIMC = 'Peso normal';
        } else if (imc >= 25 && imc < 29.99) {
            resultadoIMC = 'Sobrepeso';
        } else if (imc >= 30 && imc < 34.99) {
            resultadoIMC = 'Obesidade grau I';
        } else if (imc >= 35 && imc < 39.99) {
            resultadoIMC = 'Obesidade grau II';
        } else if (imc >= 40) {
            resultadoIMC = 'Obesidade grau III';
        }


        $('#resultado').addClass('resultado').html('Seu IMC: <br/> <span>' + imc + '</span><br/> Seu status: <br/><span> ' + resultadoIMC +'</span>');
    });

});