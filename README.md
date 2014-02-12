jetpack-id [![Build Status](https://travis-ci.org/jsantell/jetpack-id.png)](https://travis-ci.org/jsantell/jetpack-id)
======

Takes a [Jetpack](https://wiki.mozilla.org/Jetpack) addon manifest object and returns a properly formatted ID for the addon. Works with [cfx](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/cfx) and [jpm](http://github.com/mozilla/jpm) and any Jetpack addon that uses a `package.json`.

## Usage

```javascript
var getID = require("jetpack-id");

getID({ id: "jid1-JtUwP0fsy08AKw" }); // "jid1-JtUwP0fsy08AKw@jetpack"
getID({ name: "my-addon" }); // "@my-addon"
getID({ id: "tab-fixer@addon" }); // "tab-fixer@addon"
```

## Installing

* `npm install jetpack-id`

## License

MIT License, copyright (c) 2014 Jordan Santell
