Hi!
===

If you're thinking "I know what webpack is and I know what it's for, but I just can't figure out how everything fits together," then you've come to the right place.

Please run the following and then continue reading.

1.) `npm install`

2.) `npm run build`

3.) `npm run build:external`

Files
---
- `index.html` uses webpack magic to inject CSS
 - `index.external.html` is your "standard" CSS file gets loaded like a normal person

- `bundle.js` will have all sorts of magic JS in it to deal with injecting CSS, so it may be daunting

- `bundle.external.js` will have limited JS in it just to "bootstrap" webpack

Thank you
---
Hopefully this covers all of the basics of getting
started with using webpack. Accepting pull requests, feel free to add or create an issue.