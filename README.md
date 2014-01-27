# Konami Code

This is a JQuery plugin to put a hidden code keycode on any website. The default is the classic Konami code for video games made by Konami--most notable, Contra and Teenage Mutant Ninja Turltles. (gotta' love old school games!)

## How to use
1. **Include the plugin** --- Right now, this plugin assumes you have jQuery included in your HTML document. Use a script tag to include this plugin somewhere in the head tag and **below** your script tage that include the base jQuery library.
```html
<script type="text/javascript" src="jQuery_konami_code.js"></script>
```

2. **Invoke the plugin** --- In either the document head (preferred) or in the body include the following snippet to inkoke the plugin and start listing to keystrokes in the background.
```html
<script type="text/javascript">
	$(document).konami_code()
</script>
```

3. **Overide the default behavior** --- The current default action after inputting the proper key sequence is to output the phrase *"Power up"* in the browswer console and in an alert() popup message.  You should specify your own function to run by setting the callback key in an options object. When you invoke the plugin pass in an object with a key/value pair.  The key is 'callback:' and the value should be the name of the function that you want to execute when the proper sequence is typed.
```html
<script type="text/javascript">
	myCallback = function(){ alert('yay!') }
	$(document).konami_code({ callback: myCallback })
</script>
```

4. To enable the Street Fighter II code *instead* of the Konami Code pass in an object with a key/value pair when you invoke the plugin.
```html
<script type="text/javascript">
	$(document).konami_code({ activeCode: 'SFII' })
</script>
```

5. To enable your own key sequence add new key/value pair to the object and set the value for the key 'activeCode' to the name of your custom key (just like 'SFII' in the previous example).  Be sure to make your key sequence a string of space seperated integers.
```html
<script type="text/javascript">
	$(document).konami_code({
		mySequence: '49 50 51 52 53', // 1, 2, 3, 4, 5
		activeCode: 'mySequence'
	})
</script>
```

6. If you need to set the execution scope of the custom callback and/or pass arguement  If you want the callback to be an object's member function or you just doen't have to be declared in the global scope you can set the execution scope in the configuration object.
```html
<script type="text/javascript">
    var myObj = { testName: "Bruce Wayne", myFunc: function(){alert(this.testName)} }
    var myScope = { testName: "Clark Kent" }
    $(document).konami_code({
      scope: myScope,
      callback: myObj.myFunc
    })
</script>
```

7. To pass one or more arguments to the callback put each value in an array index and pass that array into the configuration object.
```html
<script type="text/javascript">
    var myArgs = [{ property1: "some object" }, "some value", "some other value" ]
    $(document).konami_code({
      arguments: myArgs,
      callback: function(a, b, c){
        alert("These are your arguments:\n1. " + a + ",\n2. " + b + ",\n3. " + c)
      }
    })
</script>
```


## Demo
* [Try a bare bones working demo] (http://goo.gl/jj2EKd)
* Unofficial demo by [@SamSamskies] (https://github.com/SamSamskies) - [whatdoyouknowaboutcontra.com] (http://whatdoyouknowaboutcontra.com)


## Supported Codes
+ **Konami** --- up, up, down, down, left, right, left, right, b, a
+ **Capcom Street Fighter II** --- down, r, up, l, y, b, x, a
( requires an option object to be passed to the plugin. See: *How To Use* )

### Roadmap
(in no particular order)
+ ~~Add support for options to be passed in for custom configuration.~~
+ ~~Add the Capcom Street Fighter II code as a possible default.~~
+ ~~allow for the custom callback's execution scope to be settable~~
+ Add a mode/utility that will record any series of keystrokes and return an encoded sequence to make it easier for less technical people to customize this feature for their site
+ mobile support.  Maybe via directional swiping
+ re-tool to trigger a custom event to allow for greater flexibility and unknown use cases.
(this could be :sparkles: epic :sparkles:)


Your suggestions, bug fixes, and feature requests are welcome. [email Cricket] (mailto:cricketw@WeAreTheInternauts.com) or submit pull requests whichever you prefer.


### In the Wild
Are you using this plugin?  Let me know and I'll list your site here.
