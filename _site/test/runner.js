define('runner',[
        'specs/accordionSpec'
        ,'specs/carouselSpec'
        ,'specs/datePickerSpec'
        ,'specs/inPageNavSpec'
        ,'specs/popupSpec'
        ,'specs/shareSpec'
        ,'specs/videoSpec'
        ,'specs/validationSpec'
        ,'specs/toggleSpec'
    ], function(){

    mocha.run();

});