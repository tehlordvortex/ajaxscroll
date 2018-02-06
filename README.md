# AJAXScroll

Scrolls the page to the element with `id == location.hash` after an AJAX request is made.

## Installation

It's available on npm:
```
$ npm i --save ajaxscroll
```
Then in your code:
```javascript
const AJAXScroll = require('ajaxscroll');
...
AJAXScroll.attach(xmlhttp);
...
```
You can also drop the JS file in your HTML page:
```html
<script src="ajaxscroll.js"></script>
<script>
  ...
  AJAXScroll.attach(xmlhttp);
  ...
</script>
```

## Documentation

### AJAXScroll

#### attach(xmlhttp?: XMLHTTPRequest)

xmlhttp is optional. if it isn't provided, it'll hook into the XMLHTTPRequest prototype object.

This replaces XMLHTTPRequest.send with a custom version that scrolls once the request is complete.

#### detach(xmlhttp?: XMLHTTPRequest)

xmlhttp is optional. if it isn't provided, it'll hook into the XMLHTTPRequest prototype object.

This restores the default send function.