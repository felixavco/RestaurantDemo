$(document).ready(function(){
    var ww = $(window).width();

/** Menu on Small devices */
    if(ww <= 599){
        var flag = true;
        $('.btn-menu').on('click', function(){
            if(flag)
            {
                $('#menu-nav').removeClass('menu-nav').addClass('menu-res');
                $(this).addClass('change');
                flag = false;
            } 
            else
            {
                $('#menu-nav').addClass('menu-nav').removeClass('menu-res');
                $(this).removeClass('change');
                flag = true;
            }
        });

        $('.menu-item').on('click', function(){ //hides menu when a menu element is clicked
            flag = true;
            $('#menu-nav').addClass('menu-nav').removeClass('menu-res');
            $('.btn-menu').removeClass('change');
        })
    }
/** Menu on Small devices */

/** Materialize */
    $('.slider').slider();
    $('.parallax').parallax();
    Materialize.updateTextFields();

    //Date Picker
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 2, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
      });

    //time Picker
    $('.timepicker').pickatime({
        default: 'now', // Set default time: 'now', '1:30AM', '16:30'
        fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: false, // Use AM/PM or 24-hour format
        donetext: 'OK', // text for done-button
        cleartext: 'Clear', // text for clear-button
        canceltext: 'Cancel', // Text for cancel-button
        autoclose: false, // automatic close timepicker
        ampmclickable: true, // make AM PM clickable
        aftershow: function(){} //Function for after opening timepicker
      });
   

/** Materialize */

/*Scroll Menu*/
   

    $(window).scroll(function(){
        headerH = $("header").height();        
        if($(document).scrollTop() > headerH)
        {
            $('header').css({background: "url('assets/img/old_wood.jpg')"});
            $('.menu-res').css("background", "rgba(152, 0, 1, 0.5)");
            $('.menu-nav').css("background", "#980001").css('box-shadow', '0px 0px 4px #000');
            $('nav > ul > li > a').css("color", "#fafafa")
        }
        else
        {
            $('header').css("background", 'rgba(0,0,0,0.3)');
            $('.menu-res').css("background", "rgba(152, 0, 1, 0.9)");
            $('.menu-nav').css("background", "transparent").css('box-shadow', '0px 0px 3px transparent');
            $('nav > ul > li > a').css("color", "#fff")

        }

    });
/*Scroll Menu*/

/* Reservaciones */
    $('.show-reservaciones').on('click', function(){
        $('#reservaciones').animate({right: '0'}, 500);
    });

    $('.close-reservaciones').on('click', function(){
        $('#reservaciones').animate({right: '-100%'}, 700);
    });
/* Reservaciones */
    
}); //ready callback function 
