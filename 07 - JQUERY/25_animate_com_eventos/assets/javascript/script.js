$(function () {


    $('#bt1').bind('click', function (e) {
        $('#div1').animate(
            {
                'margin-left': '130px',
                'margin-top': '15',
                'width': '60px',
                'height': '60px',
                'border-radius': '30px'

            },
            {
                duration: 1500,
                step: function () {
                    console.log('Nova etapa da animação');
                },
                complete: function () {
                    console.log('Animação finalizada');

                    $('#div1').animate(
                        {
                            'margin-left': '50px',
                            'margin-top': '10',
                            'width': '80px',
                            'height': '100px',
                            'border-radius': '20px'
            
                        });
                },
                start: function () {
                    console.log('Animação iniciada.');
                }
            });
    });


});