# Konami Code

This is a JQuery plugin to put a hidden code keycode on any website. The default is the classic Konami code for video games made by Konami--most notable, Contra and Teenage Mutant Ninja Turltles. (gotta' love old school games!)

## How to use
1. **Include the plugin** --- Right now, this plugin assumes you have jQuery included in your HTML document. Use a script tage to include this plugin somewhere in the head tag and **below** your script tage that include the base jQuery library.
2. **Edit plugin source** --- The *current* default action after unputting the proper key sequence is to output the phrase *"Power up"* in the browswer console and in an alert() popup message.  You should delete or comment out those lines and add your own function there.
3. **Invoke the plugin** -- In either the document head or in the body include the following snippet to inkoke the plugin and start listing to keystrokes in the background. ```
<script type="text/javascript">
	$(document).konami_code()			
</script>
```


## Demo
[This html file] (https://github.com/theInternauts/Konami_Code/blob/master/demo.html) includes a working setup


## Supported Codes
+ **Konami** --- up, up, down, down, left, right, left, right, b, a

### Roadmap
(in no particular order)
+ Add support for options to be passed in for custom configuration.
+ Add the Capcom Street Fighter II code as a possible default.
+ Add a mode/utility that will record any series of keystrokes and return an encoded sequence to make it easier for less technical people to customize this feature for their site
+ mobile support.  Maybe via directional swiping


Your suggestions, bug fixes, and feature requests are welcome. [email Cricket] (mailto:cricketw@WeAreTheInternauts.com) or submit pull requests whichever you prefer.