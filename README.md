fossa is a lightweight TypeScript/JavaScript game engine built on top of the [Three.js](http://threejs.org/) graphics library and the [Cannon.js](http://schteppe.github.io/cannon.js/) physics library. It aims to provide a simple framework for creating prototype 3D games for the browser.

## Installation
Include fossa on your site by adding either `fossa.js` or `fossa.min.js` before your game scripts, and include an element with the ID `#fossa-container`. (You can configure this with fossa.configure in your scripts, if you want.)

```html
<body>
<div id="fossa-container"></div>
<script src="lib/vendor/fossa.js"></script>
<script>
fossa.configure({
  // Your configuration options go here
});
<!-- Your game scripts go here -->
</script>
</body>
```

## Contributing
See `CONTRIBUTING.md` for development setup instructions.

