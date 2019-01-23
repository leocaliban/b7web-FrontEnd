$(function () {

    
    $('#bt1').bind('click', function (e) {
        $('#div1').animate({
            'margin-left':'130px',
            'margin-top' : '15',
            'width' : '60px',
            'height' : '60px',
            'border-radius' : '30px'
           
        }, 1000);
    });


});