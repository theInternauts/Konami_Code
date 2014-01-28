;(function( $, window, document, undefined){
  var keys = []

  $.fn.konami_code = function( options ) { 
    var settings = $.extend(true, {}, $.fn.konami_code.defaults, options )
    var executionCount = 0
    
    $(this).keydown(function(e) {
      if(settings.maximum > executionCount){        
        keys.push( e.keyCode )
      }
      // console.log(keys.toString()) 
      if ( keys.toString().indexOf( settings[settings.activeCode] ) >= 0 ){
        // execute the specified callback function when the activeCode is detected
        // if I ever use event triggers I'll need to append the event argument object to the end of settings.arguments
        settings.callback.apply( settings.scope, settings.arguments )
        executionCount++;
        // empty the array containing the key sequence entered by the user
        keys = []
      } else if (keys.length >1000) {
        keys = [] //a crude way to keep the array from getting too big for no reason--a better check would be to clear after a long delay between keypresses (400-800ms)
      }
    })
    console.log('konami_code: power on')
    return this
  } //end $.fn.konami_code()  

  defaultCallback = function(){
    console.log("power up")
    alert("power up")      
  }  

  $.fn.konami_code.defaults = {
    konami: '38,38,40,40,37,39,37,39,66,65',       
    SFII: '40,82,38,76,89,66,88,65',
    callback: defaultCallback,
    activeCode: 'konami',
    maximum: 1000000000000000,
    scope: window
  }
})( jQuery , window, document)