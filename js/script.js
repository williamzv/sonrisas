$(function(){
    /*------------------------------------
      FUNCIONES PARA EL MENU PRINCIPAL
    ------------------------------------*/

    // Agrega o Elimina la clase icono-cerrar al boton del menu
    $('#menu-navegacion .navbar-toggler').click(function() {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    // Al hacer click en un enlace del menu principal
    $('#menu-navegacion .navbar-nav a').click(function(){
        // Quitar la clase icono-cerrar
        $('.boton-menu').removeClass('icono-cerrar');
        
        // Contraer el menu
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    /*------------------------------------
      INICIALIZANDO SWIPER
    ------------------------------------*/
    var mySwiper = new Swiper ('#animacion', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 5000
        }
    });


    /*------------------------------------
      INICIALIZANDO VENOBOX
    ------------------------------------*/
    $('.venobox-video').venobox({
        autoplay: true,
        spinner: 'cube-grid',
        bgcolor: 'rgba(255,255,255,0.4)',
        border: '5px'
    });

    /*------------------------------------
      INICIALIZANDO JARALLAX
    ------------------------------------*/
    // $('.jarallax').jarallax({
    //     speed: 0.2
    // });

    /*------------------------------------
      INICIALIZANDO COUNTER-UP
    ------------------------------------*/
    $('.counter').counterUp();


    /*------------------------------------
      INICIALIZANDO DATEPICKER.JS
    ------------------------------------*/
    $('.datepicker').pickadate(
        {
            monthsFull: [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
            monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
            weekdaysFull: [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ],
            weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
            today: 'hoy',
            clear: 'borrar',
            close: 'cerrar',
            firstDay: 1,
            format: 'dddd d !de mmmm !de yyyy',
            formatSubmit: 'dd/mm/yyyy',
            labelMonthNext: 'Siguiente mes',
            labelMonthPrev: 'Mes anterior',
            labelMonthSelect: 'Seleccione un mes',
            labelYearSelect: 'Seleccione un año',
            selectYears: 2,
            selectMonths: true,
            min: new Date(),
            onStart: function () {
                var date = new Date();
                this.set('select',[date.getFullYear(),date.getMonth(),date.getDate()])
            }
        }
    );
    $('.timepicker').pickatime(
        {
            clear: 'Limpiar',
            min: [8, 00],
            max: [18, 00]
        }
    );

    /*------------------------------------
      INICIALIZANDO PARSLEY.JS
    ------------------------------------*/
    $('#mi-formulario').parsley({
        errorClass: 'is-invalid',
        successClass: 'is-valid',
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-1 small"></ul>',
        errorTemplate: '<li></li>',
        triggerAfterFailure: 'change'
    });
    

    /*------------------------------------
      INICIALIZANDO STICKIT
    ------------------------------------*/
    $('#menu-navegacion').stickit({
        className: 'menu-fijo'
    });

    /*------------------------------------
      DERECHOS DE AUTOR
    ------------------------------------*/
    var anno = new Date().getFullYear();
    $('#autor').html('<p>(c) '+anno+'. Diseñado por <a id="autor-link" target="_blank" href="https://wzamora.com/#/home">WZamora.com</a></p>');

    /*------------------------------------
      INICIALIZANDO PAGESCROLL2ID
    ------------------------------------*/
    $('#menu-principal a').mPageScroll2id({
        offset: '62',
        highlightClass: 'active'
    });

})

