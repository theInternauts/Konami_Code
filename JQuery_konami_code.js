;(function( $, window, document, undefined){
  var keys = []

  $.fn.konami_code = function( options ) { 
    var settings = $.extend({
      konami: '38,38,40,40,37,39,37,39,66,65',       
      SFII: '40,82,38,76,89,66,88,65',
      callback: defaultCallback,
      activeCode: 'konami'
    }, options )

    $(this).keydown(function(e) {
      keys.push( e.keyCode )
      // console.log(keys.toString()) 
      if ( keys.toString().indexOf( settings[settings.activeCode] ) >= 0 ){
        // execute the specified callback function when the activeCode is detected
        settings.callback.call( this )
        // empty the array containing the key sequence entered by the user
        keys = []
      } else if (keys.length >1000) {
        keys = [] //a crude way to keep the array from getting too big for no reason--a better check would be to clear after a long delay between keypresses (400-800ms)
      }
    })
    console.log('konami_code: power on')
    return this
  }//end $.fn.konami_code()  

  defaultCallback = function(){
    console.log("power up")
    alert("power up")      
  }  
})( jQuery )