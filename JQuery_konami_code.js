;(function( $, window, document, undefined){
    var keys     = [];
    var konami  = '38,38,40,40,37,39,37,39,66,65'; //change this to an array when I create the setup utility       
    var SFII = '40,82,38,76,89,66,88,65';             
        
    $.fn.konami_code = function() {                    
        $(this).keydown(
            function(e) {
                keys.push( e.keyCode );
                /*console.log(keys.toString());*/ 
                if ( keys.toString().indexOf( konami ) >= 0 ){
 
                    // do something when the konami code is executed
                     console.log("power up"); 
                    // empty the array containing the key sequence entered by the user
                    keys = [];
                } else if (keys.length >1000){
                    keys = []; //a crude way to keep the array from getting too big for no reason--a better check would be to clear after a long delay between keypresses (400-800ms)
                }
                
            }
        );
        console.log('konami_code: power on');
        return this;
    };
    //needs mobile support (swiping???)
})( jQuery );