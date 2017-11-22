# Babelize: part 1

## An gentle intro to babel following the Class discussion.  This is part 1 of a 3 part series.

Let's not get caught up in [Decision Fatigue](https://en.wikipedia.org/wiki/Decision_fatigue) by worrying about bundling, linting, structure etc.  Instead let's bite off pieces we can digest, starting with [babel](https://babeljs.io/)

### Project Overview

Currently, this project works as expected in the latest version of Chrome \O/
But our dear friend IE 11 is feeling lonely!

Let's use babel to solve this conundrum.

**Note: We are not using Webpack in this section**

* Fork this rep
* Clone your forked copy to your machine
* `git checkout -b <YOUR_NAME_SOLUTION>`
* For performance reasons, ensure you're using [node >=6](https://nodejs.org/en/) with `$ node --version`
* Head to the [babel docs](https://babeljs.io/docs/setup/#installation)

### Project Goals

To transpile (babelize!) the code in your src folder to create a new folder that can code that can be ran in IE 11. Also, to understand how to navigate the babel docs to make transpiling your own projects faster and easier.

#### But!

When it comes to IE, we only want to support version 11 and beyond.

> "But Michael, you never showed us how to do that!

I know, isn't it great!

### Hints

* Use the `babel-cli` package
* When you get to the step to install your preset, click on its link to be taking to its docs.  
* Once there, read over the docs to get sense an understanding of what's happening. Notice how the preset can also be configured with an object. 
* Note that you can use **"any valid query format supported by browswerlist"** to target your `browsers`.
* When you try to transpile app.js, for example `npm run build`, npm will throw a syntax error shown below. What's happening is that even though the [object rest/spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) is now listed as stage 3 (a candidate), in babel 6 it's [still listed as experimental](http://babeljs.io/docs/plugins/#transform-plugins-experimental). To solve this issue, we need to `npm install` the [object-rest-spread](http://babeljs.io/docs/plugins/transform-object-rest-spread/) plugin and add it to the `.babelrc` file (see plugin documentation for details). The error should go away after this.
    ```
    SyntaxError: src/app.js: Unexpected token (16:4)
    14 | const otherDetails = {
    15 |     info: 'This won\'t work in IE 11 unless transpiled...try it out!',
    > 16 |     ...whoSaidIt
        |     ^
    17 | }
    18 |
    19 | container.innerText = triggered
    ```
---------------

When you're done, send a PR my way, and I'll give it a review!

Good luck and have fun,

ml
