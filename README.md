# Konami Code

This is a JQuery plugin to put a hidden code keycode on any website. The default is the classic Konami code for video games made by Konami--most notable, Contra and Teenage Mutant Ninja Turltles. (gotta' love old school games!)

## How to use
1. **Include the plugin** --- Right now, this plugin assumes you have jQuery included in your HTML document. Use a script tag to include this plugin somewhere in the head tag and **below** your script tage that include the base jQuery library.
```html
<script type="text/javascript" src="jQuery_konami_code.js"></script>
```

2. **Invoke the plugin** --- In either the document head (preferred) or in the body include the following snippet to inkoke the plugin and start listing to keystrokes in the background.
```javascript
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


## Demo
[This html file] (https://github.com/theInternauts/Konami_Code/blob/master/demo.html) includes a working setup


## Supported Codes
+ **Konami** --- up, up, down, down, left, right, left, right, b, a
+ **Capcom Street Fighter II** --- down, r, up, l, y, b, x, a 
( requires an option object to be passed to the plugin. See: *How To Use* )

### Roadmap
(in no particular order)
+ ~~Add support for options to be passed in for custom configuration.~~
+ ~~Add the Capcom Street Fighter II code as a possible default.~~
+ Add a mode/utility that will record any series of keystrokes and return an encoded sequence to make it easier for less technical people to customize this feature for their site
+ mobile support.  Maybe via directional swiping
+ re-tool to trigger a custom event to allow for greater flexibility and unknown use cases. (this could be epic :) )


Your suggestions, bug fixes, and feature requests are welcome. [email Cricket] (mailto:cricketw@WeAreTheInternauts.com) or submit pull requests whichever you prefer.


### In the Wild
Are you using this plugin?  Let me know and I'll list your site here.
